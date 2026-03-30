"use client";

import {
  Children,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

/* ── Sequence orchestration ─────────────────────────────── */

interface SequenceCtx {
  register: () => number;
  complete: (idx: number) => void;
  activeIndex: number;
  started: boolean;
}

const SeqCtx = createContext<SequenceCtx | null>(null);
const IdxCtx = createContext<number>(-1);

/* ── AnimatedSpan — fade-in reveal for output lines ────── */

export function AnimatedSpan({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const seq = useContext(SeqCtx);
  const idx = useContext(IdxCtx);
  const [show, setShow] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    if (!seq || doneRef.current) return;
    if (seq.started && seq.activeIndex === idx) {
      setShow(true);
    }
  }, [seq?.activeIndex, seq?.started, idx]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={show ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.25 }}
      className={cn("text-[13px] font-mono whitespace-pre", className)}
      onAnimationComplete={() => {
        if (show && seq && !doneRef.current) {
          doneRef.current = true;
          seq.complete(idx);
        }
      }}
    >
      {children}
    </motion.div>
  );
}

/* ── TypingAnimation — character-by-character reveal ───── */

export function TypingAnimation({
  children,
  className,
  speed = 45,
}: {
  children: string;
  className?: string;
  speed?: number;
}) {
  const seq = useContext(SeqCtx);
  const idx = useContext(IdxCtx);
  const textRef = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);
  const doneRef = useRef(false);

  // Start when sequence reaches this item
  useEffect(() => {
    if (!seq || startedRef.current) return;
    if (seq.started && seq.activeIndex === idx) {
      startedRef.current = true;
      typeText();
    }
  }, [seq?.activeIndex, seq?.started, idx]);

  function typeText() {
    const el = textRef.current;
    if (!el) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      el.textContent = children.substring(0, i);
      if (i >= children.length) {
        clearInterval(timer);
        // Hide cursor
        const cursor = el.nextElementSibling;
        if (cursor) (cursor as HTMLElement).style.display = "none";
        // Signal complete
        if (seq && !doneRef.current) {
          doneRef.current = true;
          seq.complete(idx);
        }
      }
    }, speed);
  }

  // Only visible once started
  const isActive = seq ? seq.started && seq.activeIndex >= idx : false;

  return (
    <div
      className={cn("text-[13px] font-mono whitespace-pre", className)}
      style={{ visibility: isActive || startedRef.current ? "visible" : "hidden" }}
    >
      <span ref={textRef} />
      <span
        className="terminal-cursor ml-px inline-block h-[1.1em] w-[0.5em] translate-y-[2px] align-middle"
        style={{ display: isActive && !doneRef.current ? "inline-block" : "none" }}
      />
    </div>
  );
}

/* ── Terminal container ─────────────────────────────────── */

export function CodeTerminal({
  children,
  className,
  title = "sitelet.se",
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef as React.RefObject<Element>, {
    amount: 0.3,
    once: true,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const ctx = useMemo<SequenceCtx>(
    () => ({
      register: () => 0,
      complete: (i: number) => {
        setActiveIndex((c) => (i === c ? c + 1 : c));
      },
      activeIndex,
      started: isInView,
    }),
    [activeIndex, isInView]
  );

  const wrapped = useMemo(() => {
    return Children.toArray(children).map((child, i) => (
      <IdxCtx.Provider key={i} value={i}>
        {child}
      </IdxCtx.Provider>
    ));
  }, [children]);

  return (
    <SeqCtx.Provider value={ctx}>
      <div
        ref={containerRef}
        className={cn(
          "w-full overflow-hidden rounded-2xl border border-white/[0.06]",
          className
        )}
        style={{
          background: "#0a0a0a",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.04), 0 8px 40px rgba(0,0,0,0.3)",
        }}
      >
        {/* Chrome */}
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-3 font-mono text-[11px] text-white/30">
            {title}
          </span>
        </div>

        {/* Body */}
        <pre className="px-5 pb-5 pt-1">
          <code className="flex flex-col gap-y-1">{wrapped}</code>
        </pre>

        {/* CSS cursor blink — no JS needed */}
        <style>{`
          .terminal-cursor {
            background-color: rgba(255,255,255,0.8);
            animation: blink 1.06s step-end infinite;
          }
          @keyframes blink {
            0%, 100% { background-color: rgba(255,255,255,0.8); }
            50% { background-color: transparent; }
          }
        `}</style>
      </div>
    </SeqCtx.Provider>
  );
}
