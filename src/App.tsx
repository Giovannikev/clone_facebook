import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "@/components/header";
import Home from "@/pages/Home/home";
import Contact from "@/pages/Contact/contact";
import LeftSidebar from "@/components/left-sidebar";
import RightSidebar from "@/components/right-sidebar";
import NotFound from "@/components/not-found";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <LeftSidebar />
        <main className="flex-1 min-h-[calc(100vh-64px)]">
          <div className="max-w-2xl mx-auto py-4 px-4 sm:px-6">
            <Outlet />
          </div>
        </main>
        <RightSidebar />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
