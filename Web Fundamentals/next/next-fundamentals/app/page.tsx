export default function Home() {
  return (
    <div className="text-center space-y-5">
      <h1 className="text-4xl font-bold">
        Welcome to modern store
      </h1>
      <p className="text-gray-600">
        Discover premium products with clean UI.
      </p>
      <a href="/products" className="bg-black text-white px-3 py-3 rounded-lg inline-block hover:bg-gray-800 transition">Explore products</a>
    </div>
  );
}