import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  image: string;
  location: string;
  time: string;
}

export function ProductCard({
  id,
  title,
  price,
  image,
  location,
  time,
}: ProductCardProps) {
  return (
    <Link
      href={`/list/${id}`}
      className="card card-hover block"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
        <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-xs px-2 py-1 rounded-md text-gray-700">
          {time}
        </span>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="text-sm text-gray-800 line-clamp-2 leading-relaxed">
          {title}
        </h3>
        <p className="text-lg font-bold text-damascus-blue-600 mt-1">
          {price}
        </p>
        <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
          📍 {location}
        </p>
      </div>
    </Link>
  );
}
