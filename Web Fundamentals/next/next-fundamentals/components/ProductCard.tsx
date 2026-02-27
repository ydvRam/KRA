import Link from "next/link";
import Image from "next/image";
export default function productCard({ product }: any) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="h-52 w-full object-contain mb-4"
      />
      <h2 className="font-semibold text-lg line-clamp-1">
        {product.title}
      </h2>
      <p className="text-blue-600 font-bold mt-2">
        $ {product.price}
      </p>
      <Link href={`/products/${product.id}`} className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-lg text-sm">View Details</Link>
    </div>
  )
}