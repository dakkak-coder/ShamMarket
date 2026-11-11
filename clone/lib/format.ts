export const arabicIndic = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"] as const;

/** Convert Western digits in a value to Arabic-Indic digits. */
export function toArabicDigits(value: string | number): string {
  return String(value).replace(/[0-9]/g, (digit) => arabicIndic[Number(digit)]);
}

/** Format a count for display, e.g. 465 -> "٤٦٥". */
export function formatCount(value: number): string {
  return toArabicDigits(value.toLocaleString("en-US"));
}

/** Join listing metadata without repeating separators. */
export function joinMeta(parts: Array<string | null | undefined>): string {
  return parts.filter(Boolean).join(" · ");
}
