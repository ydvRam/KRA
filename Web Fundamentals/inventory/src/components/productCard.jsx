export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain"
      />
      <h2 className="font-semibold mt-3 line-clamp-2">
        {product.title}
      </h2>
      <p className="text-blue-600 font-bold mt-1">
        ${product.price}
      </p>
      <p className="text-sm text-gray-500 capitalize">
        {product.category}
      </p>
    </div>
  );
}