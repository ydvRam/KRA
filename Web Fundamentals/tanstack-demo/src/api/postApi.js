import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/posts";
export async function fetchPost() {
  const { data } = await axios.get(API_URL);
  return data;
}
export async function addPost(newPost) {
  const { data } = await axios.post(API_URL, newPost);
  return data;
}