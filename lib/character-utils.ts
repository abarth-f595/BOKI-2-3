import type { Character } from "@/types/character";
import { ALL_CHARACTERS } from "@/data/characters";

export function getRandomCharacter(excludeId?: string): Character {
  const candidates = excludeId
    ? ALL_CHARACTERS.filter((c) => c.id !== excludeId)
    : ALL_CHARACTERS;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

export function getRandomLine(
  character: Character,
  isCorrect: boolean,
  excludeLines?: string[]
): string {
  const pool = isCorrect ? character.correctLines : character.incorrectLines;
  const candidates =
    excludeLines && excludeLines.length > 0
      ? pool.filter((l) => !excludeLines.includes(l))
      : pool;
  const source = candidates.length > 0 ? candidates : pool;
  return source[Math.floor(Math.random() * source.length)];
}
