"use client";
import Link from "next/link";
export default function navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center" >
      <h1 className="text-lg font-bold">
        Modern store
      </h1>
      <div className="flex gap-6 text-sm">
        <Link href="/" className="hover:text-gray-300 transition">Home</Link>
        <Link href="/products" className="hover:text-gray-300 transition">Products</Link>
      </div>
    </nav>
  )
}