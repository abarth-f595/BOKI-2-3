"use client";
import { useEffect, useState } from "react";
import type { Character } from "@/types/character";
import { getRandomCharacter, getRandomLine } from "@/lib/character-utils";

type Props = {
  isCorrect: boolean;
};

export default function CharacterReaction({ isCorrect }: Props) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [line, setLine] = useState("");
  const [displayed, setDisplayed] = useState("");
  const [imgError, setImgError] = useState(false);

  // On mount: pick character and line, avoiding consecutive repeats via sessionStorage
  useEffect(() => {
    const lastCharId = sessionStorage.getItem("cr_last_char_id") ?? undefined;
    const lastLine = sessionStorage.getItem("cr_last_line") ?? undefined;

    const char = getRandomCharacter(lastCharId);
    const l = getRandomLine(char, isCorrect, lastLine ? [lastLine] : []);

    sessionStorage.setItem("cr_last_char_id", char.id);
    sessionStorage.setItem("cr_last_line", l);

    setCharacter(char);
    setLine(l);
    setImgError(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Typing animation
  useEffect(() => {
    if (!line) return;
    setDisplayed("");
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(line.slice(0, i));
      if (i >= line.length) clearInterval(timer);
    }, 28);
    return () => clearInterval(timer);
  }, [line]);

  if (!character) return null;

  const borderColor = isCorrect ? "#4caf50" : "#ef5350";
  const modeLabel = isCorrect ? "✅ 正解！" : "❌ 解説";
  const initial = character.displayName.charAt(0);

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "flex-start",
        background: `${character.themeColor}22`,
        border: `2px solid ${borderColor}`,
        borderRadius: "16px",
        padding: "14px 16px",
        marginBottom: "16px",
        animation: "cr-fadein 0.35s ease-out",
      }}
    >
      <style>{`
        @keyframes cr-fadein {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cr-bounce {
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
            alt={character.displayName}
            onError={() => setImgError(true)}
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "top center",
              border: `3px solid ${character.themeColor}`,
              animation: "cr-bounce 2.4s ease-in-out infinite",
              background: "#1e293b",
            }}
          />
        ) : (
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: character.themeColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: "bold",
              color: "#fff",
              border: `3px solid ${character.themeColor}`,
              animation: "cr-bounce 2.4s ease-in-out infinite",
              flexShrink: 0,
            }}
          >
            {initial}
          </div>
        )}
        <p
          style={{
            marginTop: 4,
            fontSize: 11,
            fontWeight: "bold",
            color: character.themeColor,
            whiteSpace: "nowrap",
          }}
        >
          {character.displayName}
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
              background: character.themeColor,
              marginLeft: 2,
              verticalAlign: "middle",
              opacity: displayed.length < line.length ? 1 : 0,
            }}
          />
        </p>
      </div>
    </div>
  );
}
