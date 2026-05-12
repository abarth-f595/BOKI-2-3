"use client";
import { useEffect, useState } from "react";
import { EizoukenCharacter } from "@/data/characterDialogue";

type Props = {
  character: EizoukenCharacter;
  text: string;
  mode: "lecture" | "correct" | "wrong";
};

export default function EizoukenGuide({ character, text, mode }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [imgError, setImgError] = useState(false);

  // タイピングアニメーション
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, 28);
    return () => clearInterval(timer);
  }, [text]);

  const borderColor =
    mode === "correct"
      ? "#4caf50"
      : mode === "wrong"
      ? "#ef5350"
      : character.color;

  const modeLabel =
    mode === "correct" ? "✅ 正解！" : mode === "wrong" ? "❌ 解説" : "📖 講義";

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "flex-start",
        background: character.bgColor,
        border: `2px solid ${borderColor}`,
        borderRadius: "16px",
        padding: "14px 16px",
        marginBottom: "16px",
        animation: "eizouken-fadein 0.35s ease-out",
      }}
    >
      <style>{`
        @keyframes eizouken-fadein {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes eizouken-bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }
      `}</style>

      {/* キャラクターアイコン */}
      <div style={{ flexShrink: 0, textAlign: "center" }}>
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={character.imagePath}
            alt={character.name}
            onError={() => setImgError(true)}
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              objectFit: "cover",
              border: `3px solid ${character.color}`,
              animation: "eizouken-bounce 2.4s ease-in-out infinite",
              background: "#1e293b",
            }}
          />
        ) : (
          /* 画像が読めない場合のフォールバックアバター */
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: character.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: "bold",
              color: "#fff",
              border: `3px solid ${character.color}`,
              animation: "eizouken-bounce 2.4s ease-in-out infinite",
              flexShrink: 0,
            }}
          >
            {character.initial}
          </div>
        )}
        <p
          style={{
            marginTop: 4,
            fontSize: 11,
            fontWeight: "bold",
            color: character.color,
            whiteSpace: "nowrap",
          }}
        >
          {character.name}
        </p>
      </div>

      {/* セリフ */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <span
          style={{
            display: "inline-block",
            fontSize: 11,
            fontWeight: "bold",
            color: borderColor,
            background: "rgba(255,255,255,0.08)",
            borderRadius: 6,
            padding: "2px 8px",
            marginBottom: 6,
          }}
        >
          {modeLabel}
        </span>
        <p
          style={{
            fontSize: 14,
            color: "#e2e8f0",
            lineHeight: 1.7,
            margin: 0,
            whiteSpace: "pre-wrap",
          }}
        >
          {displayed}
          <span
            style={{
              display: "inline-block",
              width: 2,
              height: "1em",
              background: character.color,
              marginLeft: 2,
              verticalAlign: "middle",
              opacity: displayed.length < text.length ? 1 : 0,
            }}
          />
        </p>
      </div>
    </div>
  );
}
