import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.css";
import "bulma";
import "./index.scss";
import { PostsProvider } from "./store/PostsContext";
import { UsersProvider } from "./store/UsersContext";
import { Root } from "./Root";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root") as HTMLElement;

createRoot(container).render(
  <BrowserRouter>
    <UsersProvider>
      <PostsProvider>
        <Root />
      </PostsProvider>
    </UsersProvider>
  </BrowserRouter>
);
