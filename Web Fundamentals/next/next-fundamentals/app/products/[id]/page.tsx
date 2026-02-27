import { getProduct } from "@/lib/api";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);

  return {
    title: product?.title || "Product",
    description: product?.description || "Product details",
  };
}
export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={500}
        className="w-full h-96 object-contain"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4">
          {product.title}
        </h1>

        <p className="text-gray-500 mb-2">
          Category: {product.category}
        </p>

        <p className="text-2xl font-semibold mb-4">
          ₹ {product.price}
        </p>

        <p className="text-gray-700 leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
}