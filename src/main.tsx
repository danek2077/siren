import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles-globals/index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home.tsx";
import App from "./App.tsx";
import { Service } from "./pages/service/service.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/service", element: <Service /> },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
