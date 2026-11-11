import Link from "next/link";

export function EmptyState({
  title,
  hint,
  actionHref = "/new",
  actionLabel = "+ نشر إعلان جديد",
  icon = "📦",
}: {
  title: string;
  hint?: string;
  actionHref?: string;
  actionLabel?: string;
  icon?: string;
}) {
  return (
    <div className="text-center py-12 text-gray-400">
      <p className="text-4xl mb-2" aria-hidden="true">
        {icon}
      </p>
      <p className="text-sm text-gray-500">{title}</p>
      {hint ? <p className="text-xs mt-1">{hint}</p> : null}
      <Link href={actionHref} className="btn-primary inline-block mt-4">
        {actionLabel}
      </Link>
    </div>
  );
}
