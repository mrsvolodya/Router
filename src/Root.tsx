/* eslint-disable react/jsx-no-comment-textnodes */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { PostsProvider } from "./store/PostsContext";
import { UsersProvider } from "./store/UsersContext";
import { HomePage } from "./pages/HomePage";
import { UsersPage } from "./pages/UsersPage";
import { PostsPage } from "./pages/PostsPage";
import { PostDetailsPage } from "./pages/PostDetailsPage";
import { NewPostPage } from "./pages/NewPostPage";

export const Root = () => {
  return (
    <BrowserRouter>
      <UsersProvider>
        <PostsProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<HomePage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="posts">
                <Route index element={<PostsPage />} />
                <Route path="620" element={<PostDetailsPage />} />
                <Route path="new" element={<NewPostPage />} />
              </Route>
            </Route>
          </Routes>
        </PostsProvider>
      </UsersProvider>
    </BrowserRouter>
  );
};
