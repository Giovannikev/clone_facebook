import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import Header from "@/components/header";
import Home from "@/pages/Home/home";
import Contact from "@/pages/Contact/contact";
import LeftSidebar from "@/components/left-sidebar";
import RightSidebar from "@/components/right-sidebar";
import NotFound from "@/components/not-found";
import ProfilePage from "@/pages/Profile/profile";
import Marketplace from "@/pages/marketplace/marketplace";
import Gaming from "@/pages/gaming/gaming";
import Reel from "@/pages/réel/reel";

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const showSidebar = currentPath === "/";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        {showSidebar && <LeftSidebar />}
        <main className="flex-1 min-h-[calc(100vh-64px)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Outlet />
          </div>
        </main>
        {showSidebar && <RightSidebar />}
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
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "marketplace",
        element: <Marketplace />,
      },
      {
        path: "gaming",
        element: <Gaming />,
      },
      {
        path: "reel",
        element: <Reel />,
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
