"use client";

import { FaFacebook, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiMessengerFill } from "react-icons/ri";
import {
  Search,
  Home,
  Store,
  Gamepad2,
  MonitorPlayIcon as TvMinimalPlay,
} from "lucide-react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CgMenuGridR } from "react-icons/cg";
import { useState } from "react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
  };

  return (
    <header className="bg-white text-white sticky top-0 z-50 shadow">
      <div className="w-full px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              <FaFacebook size={40} />
            </Link>
            <div className="relative hidden lg:block">
              <Input
                type="text"
                placeholder="Rechercher sur Facebook"
                className="bg-gray-100 text-black rounded-full py-2 pl-10 pr-4 w-64 placeholder:xl:inline placeholder:max-xl:hidden"
              />
              <Search className="absolute left-3 top-3.5 text-gray-500 h-4 w-4" />
            </div>
          </div>

          <nav className="flex items-center justify-center flex-1 max-md:hidden">
            <div className="flex space-x-1 md:space-x-8 text-gray-500">
              <Link
                to="/"
                className={`p-2 px-10 rounded-lg transition-colors relative ${
                  activeMenu === "home"
                    ? "text-blue-600 hover:bg-blue-50"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleMenuClick("home")}
              >
                <Home className="h-7 w-7" />
                {activeMenu === "home" && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-b-lg"></div>
                )}
              </Link>
              <Link
                to="/reel"
                className={`p-2 px-12 rounded-lg transition-colors relative ${
                  activeMenu === "friends"
                    ? "text-blue-600 hover:bg-blue-50"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleMenuClick("friends")}
              >
                <TvMinimalPlay className="h-7 w-7" />
                {activeMenu === "friends" && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-b-lg"></div>
                )}
              </Link>
              <Link
                to="/marketplace"
                className={`p-2 px-12 rounded-lg transition-colors relative ${
                  activeMenu === "messages"
                    ? "text-blue-600 hover:bg-blue-50"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleMenuClick("messages")}
              >
                <Store className="h-7 w-7" />
                {activeMenu === "messages" && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-b-lg"></div>
                )}
              </Link>
              <Link
                to="/gaming"
                className={`p-2 px-12 rounded-lg transition-colors relative ${
                  activeMenu === "notifications"
                    ? "text-blue-600 hover:bg-blue-50"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleMenuClick("notifications")}
              >
                <Gamepad2 className="h-7 w-7" />
                {activeMenu === "notifications" && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 rounded-b-lg"></div>
                )}
              </Link>
            </div>
          </nav>

          <div className="flex items-center space-x-2">
            <button className="p-2 bg-gray-300/90 rounded-full text-black cursor-pointer">
              <CgMenuGridR className="h-5 w-5" />
            </button>
            <button className="p-2 bg-gray-300/90 rounded-full text-black cursor-pointer">
              <RiMessengerFill className="h-5 w-5" />
            </button>
            <button className="p-2 bg-gray-300/90 rounded-full text-black cursor-pointer">
              <FaBell className="h-5 w-5" />
            </button>
            <Link
              to="/profile"
              className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"
            >
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
