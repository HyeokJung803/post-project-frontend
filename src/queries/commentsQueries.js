import { useQuery } from "@tanstack/react-query";
import { getComments } from "../apis/Posts/commentsApi";

export const useGetCommentsQuery = (postId) => useQuery({
    queryKey: ["getComments", postId],
    queryFn: async () => await getComments(postId),
});