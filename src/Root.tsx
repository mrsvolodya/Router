import { Route, Routes } from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./pages/HomePage";
import { UsersPage } from "./pages/UsersPage";
import { PostsPage } from "./pages/PostsPage";
import { PostDetailsPage } from "./pages/PostDetailsPage";
import { NewPostPage } from "./pages/NewPostPage";
export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="users">
          <Route index element={<UsersPage />} />
          <Route path=":userId/posts">
            <Route index element={<PostsPage />} />
            <Route path=":postId" element={<PostDetailsPage />} />
            <Route path="new" element={<NewPostPage />} />
          </Route>
        </Route>
        <Route path="posts">
          <Route index element={<PostsPage />} />
          <Route path=":postId" element={<PostDetailsPage />} />
          <Route path="new" element={<NewPostPage />} />
        </Route>
      </Route>

      <Route
        path="*"
        element={<p style={{ color: "red", fontWeight: "bold" }}>Bad way</p>}
      />
    </Routes>
  );
};
