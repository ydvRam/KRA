import { useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/productApi";

import Loader from "../components/UI/Loader";
import ErrorBanner from "../components/UI/ErrorBanner";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal";
import Input from "../components/UI/Input";
import ProductCard from "../components/productCard";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const [editProduct, setEditProduct] = useState(null);

  /* ---------------- FETCH PRODUCTS ---------------- */

  const fetchProducts = async () => {
    setLoading(true);
    const response = await getProducts();
    setLoading(false);

    if (response.success) {
      setProducts(response.data);
      setError("");
    } else {
      setError(`(${response.status}) ${response.message}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ---------------- HANDLE INPUT CHANGE ---------------- */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ---------------- CREATE PRODUCT (POST) ---------------- */

  const handleCreate = async (e) => {
    e.preventDefault();

    const response = await createProduct(formData);

    if (response.success) {
      setProducts([response.data, ...products]);
      setStatusMessage(
        `✅ ${response.status} - ${response.message}`
      );
      setFormData({
        title: "",
        price: "",
        category: "",
        description: "",
        image: "",
      });
    } else {
      setStatusMessage(
        `❌ ${response.status} - ${response.message}`
      );
    }
  };

  /* ---------------- DELETE PRODUCT ---------------- */

  const handleDelete = async (id) => {
    const response = await deleteProduct(id);

    if (response.success) {
      setProducts(products.filter((p) => p.id !== id));
      setStatusMessage(
        `🗑 ${response.status} - ${response.message}`
      );
    } else {
      setStatusMessage(
        `❌ ${response.status} - ${response.message}`
      );
    }
  };

  /* ---------------- UPDATE PRODUCT (PUT) ---------------- */

  const handleUpdate = async () => {
    const response = await updateProduct(
      editProduct.id,
      editProduct
    );

    if (response.success) {
      const updatedList = products.map((p) =>
        p.id === editProduct.id ? response.data : p
      );

      setProducts(updatedList);
      setEditProduct(null);
      setStatusMessage(
        `✏ ${response.status} - ${response.message}`
      );
    } else {
      setStatusMessage(
        `❌ ${response.status} - ${response.message}`
      );
    }
  };

  if (loading) return <Loader />;
  if (error) return <ErrorBanner message={error} />;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Inventory Dashboard
      </h1>

      {/* STATUS MESSAGE */}
      {statusMessage && (
        <div className="mb-4 bg-green-100 text-green-800 p-3 rounded">
          {statusMessage}
        </div>
      )}

      {/* ADD PRODUCT FORM */}
      <form
        onSubmit={handleCreate}
        className="grid grid-cols-2 gap-4 mb-10"
      >
        <Input
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <Input
          label="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          type="number"
        />
        <Input
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
        <Input
          label="Image URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
        <div className="col-span-2">
          <Input
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="col-span-2">
          <Button>Create Product</Button>
        </div>
      </form>

      {/* PRODUCT LIST */}
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
            <div className="flex gap-2 mt-2">
              <Button
                variant="secondary"
                onClick={() => setEditProduct(product)}
              >
                Edit
              </Button>

              <Button
                variant="danger"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* EDIT MODAL */}
      <Modal
        isOpen={!!editProduct}
        onClose={() => setEditProduct(null)}
      >
        {editProduct && (
          <>
            <h2 className="text-lg font-bold mb-4">
              Edit Product
            </h2>

            <Input
              label="Title"
              value={editProduct.title}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  title: e.target.value,
                })
              }
            />

            <Input
              label="Price"
              type="number"
              value={editProduct.price}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  price: e.target.value,
                })
              }
            />

            <div className="flex gap-3 mt-4">
              <Button onClick={handleUpdate}>
                Update
              </Button>
              <Button
                variant="secondary"
                onClick={() => setEditProduct(null)}
              >
                Cancel
              </Button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}