const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failded to fetch data");
  }
  return res.json();
}

export async function getProduct(id: string) {
  if (!id) {
    return null;
  }
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  const text = await res.text();
  if (!text) {
    return null;
  }
  return JSON.parse(text);
}