import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addPost, fetchPost } from "../api/postApi";
export const usePost = () => {
  const queryClient = useQueryClient()

  // ✅ FETCH POSTS
  const postQuery = useQuery({
    queryKey:["posts"],
    queryFn:fetchPost,
    staleTime:5000,                           // caching for 5 seconds
  })

  const addPostMutation = useMutation({
    mutationFn: addPost,
    onSuccess: () => {
      // Refetch posts after adding
      queryClient.invalidateQueries(["posts"])
    }
  });
  return { postQuery, addPostMutation }
}