import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

/*
Standard response format:
{
  success: boolean,
  data: any,
  message: string,
  status: number
}
*/

export const getProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);

    return {
      success: true,
      data: response.data,
      status: response.status,
      message: "Products fetched successfully",
    };
  } catch (error) {
    return handleError(error);
  }
};

export const createProduct = async (product) => {
  try {
    const response = await axios.post(BASE_URL, product);

    return {
      success: true,
      data: response.data,
      status: response.status,
      message: "Product created successfully",
    };
  } catch (error) {
    return handleError(error);
  }
};

export const updateProduct = async (id, product) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, product);

    return {
      success: true,
      data: response.data,
      status: response.status,
      message: "Product updated successfully",
    };
  } catch (error) {
    return handleError(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);

    return {
      success: true,
      data: null,
      status: response.status,
      message: "Product deleted successfully",
    };
  } catch (error) {
    return handleError(error);
  }
};

/* -------- GLOBAL ERROR HANDLER -------- */

const handleError = (error) => {
  if (error.response) {
    // Server responded but with error status
    return {
      success: false,
      data: null,
      status: error.response.status,
      message: error.response.data?.message || "Server Error",
    };
  } else if (error.request) {
    // No response received
    return {
      success: false,
      data: null,
      status: 0,
      message: "No response from server",
    };
  } else {
    // Something else happened
    return {
      success: false,
      data: null,
      status: 0,
      message: error.message,
    };
  }
};