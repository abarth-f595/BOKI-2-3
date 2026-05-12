"use client";
import { useState } from "react";
import { MemoryHook, MemoryHookType } from "@/data/memoryHooks";

const TYPE_CONFIG: Record<MemoryHookType, { label: string; bg: string; border: string; text: string }> = {
  goro:     { label: "語呂合わせ", bg: "rgba(251,191,36,0.12)",  border: "#f59e0b", text: "#fcd34d" },
  story:    { label: "ストーリー", bg: "rgba(99,102,241,0.12)",  border: "#6366f1", text: "#a5b4fc" },
  visual:   { label: "視覚化",     bg: "rgba(16,185,129,0.12)",  border: "#10b981", text: "#6ee7b7" },
  fun_fact: { label: "豆知識",     bg: "rgba(239,68,68,0.12)",   border: "#ef4444", text: "#fca5a5" },
};

export default function MemoryHookCard({ hook }: { hook: MemoryHook }) {
  const [open, setOpen] = useState(false);
  const cfg = TYPE_CONFIG[hook.type];

  return (
    <div
      style={{
        border: `1.5px solid ${cfg.border}`,
        background: cfg.bg,
        borderRadius: 14,
        marginBottom: 10,
        overflow: "hidden",
        transition: "box-shadow 0.2s",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: 22, flexShrink: 0 }}>{hook.emoji}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: "bold",
              color: cfg.text,
              background: "rgba(255,255,255,0.08)",
              borderRadius: 4,
              padding: "1px 6px",
              marginRight: 6,
            }}
          >
            {cfg.label}
          </span>
          <span style={{ fontSize: 13, fontWeight: "bold", color: "#e2e8f0" }}>
            {hook.title}
          </span>
        </div>
        <span style={{ color: cfg.text, fontSize: 14, flexShrink: 0 }}>
          {open ? "▲" : "▼"}
        </span>
      </button>

      {open && (
        <div
          style={{
            padding: "0 14px 14px",
            fontSize: 13,
            color: "#cbd5e1",
            lineHeight: 1.85,
            whiteSpace: "pre-wrap",
            borderTop: `1px solid ${cfg.border}`,
            paddingTop: 10,
          }}
        >
          {hook.body}
        </div>
      )}
    </div>
  );
}
