export function PriceTag({
  price,
  negotiable,
  size = "md",
}: {
  price: string;
  negotiable: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const priceClass =
    size === "lg"
      ? "text-2xl sm:text-3xl"
      : size === "sm"
        ? "text-base"
        : "text-lg";

  return (
    <p className="mt-1 flex flex-wrap items-center gap-2">
      <span className={`${priceClass} font-bold text-damascus-blue-600`}>{price}</span>
      {negotiable ? (
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-olive-50 text-olive-600 border border-olive-100">
          قابل للتفاوض
        </span>
      ) : (
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
          سعر ثابت
        </span>
      )}
    </p>
  );
}
