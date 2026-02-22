import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DetailContact from "./pages/DetailContact";
import A1 from "./components/A1";
import A2 from "./components/A2";

// Layout Component (Navbar + Outlet)
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "a1",
            element: <A1 />,
          },
          {
            path: "a2",
            element: <A2 />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "contact/:id",
        element: <DetailContact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;