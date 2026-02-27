import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
export const metadata = {
  title: "All Products",
  description: "Browse all products",
};
export default async function productsPage() {
  const products = await getProducts();
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        All products
      </h1>
      <SearchBar />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}