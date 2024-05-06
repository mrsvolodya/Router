import { useContext } from "react";
import { PostForm } from "../components/PostForm";
import { useUsers } from "../store/UsersContext";
import { PostsContext } from "../store/PostsContext";
import { Post } from "../types";
import { useNavigate, useParams } from "react-router";

export const NewPostPage = () => {
  const { addPost } = useContext(PostsContext);
  const { userId } = useParams();
  const users = useUsers();
  const navigation = useNavigate();
  const normilizeUserId = userId ? +userId : 0;

  const handleSubmit = async ({ title, userId, body }: Omit<Post, "id">) => {
    await addPost({ title, userId, body });
    navigation("..")
  };

  return (
    <>
      <h1 className="title">Write a post</h1>

      <PostForm
        users={users}
        fixedUserId={normilizeUserId}
        onSubmit={handleSubmit}
      />
    </>
  );
};
