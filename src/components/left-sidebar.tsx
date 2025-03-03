import {
  Home,
  Users,
  Bookmark,
  Calendar,
  Video,
  ShoppingBag,
  Clock,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function LeftSidebar() {
  return (
    <aside className="hidden md:flex flex-col w-[300px] p-4 overflow-y-auto h-[calc(100vh-64px)] sticky top-16 bg-transparent">
      <nav className="space-y-1">
        <Link
          to="/"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Home className="w-6 h-6 text-blue-500" />
          <span className="font-medium">Home</span>
        </Link>
        <Link
          to="/friends"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Users className="w-6 h-6 text-blue-500" />
          <span className="font-medium">Friends</span>
        </Link>
        <Link
          to="/saved"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Bookmark className="w-6 h-6 text-purple-500" />
          <span className="font-medium">Saved</span>
        </Link>
        <Link
          to="/events"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Calendar className="w-6 h-6 text-red-500" />
          <span className="font-medium">Events</span>
        </Link>
        <Link
          to="/watch"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Video className="w-6 h-6 text-blue-500" />
          <span className="font-medium">Watch</span>
        </Link>
        <Link
          to="/marketplace"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <ShoppingBag className="w-6 h-6 text-blue-500" />
          <span className="font-medium">Marketplace</span>
        </Link>
        <Link
          to="/memories"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Clock className="w-6 h-6 text-blue-500" />
          <span className="font-medium">Memories</span>
        </Link>

        <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors w-full">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-300">
            <ChevronDown className="w-4 h-4" />
          </div>
          <span className="font-medium">See more</span>
        </button>
      </nav>

      <div className="mt-4 pt-4 border-t">
        <h3 className="font-semibold text-gray-500 mb-2 px-2">
          Your shortcuts
        </h3>
        <div className="space-y-1">
          <Link
            to="/groups/gaming"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <div className="w-6 h-6 rounded bg-gray-300"></div>
            <span className="font-medium">Gaming Group</span>
          </Link>
          <Link
            to="/groups/tech"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <div className="w-6 h-6 rounded bg-gray-300"></div>
            <span className="font-medium">Tech Enthusiasts</span>
          </Link>
          <Link
            to="/groups/cooking"
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <div className="w-6 h-6 rounded bg-gray-300"></div>
            <span className="font-medium">Cooking Club</span>
          </Link>
        </div>
      </div>

      <div className="mt-auto pt-4 text-xs text-gray-500 px-2">
        <p>
          Privacy · Terms · Advertising · Ad Choices · Cookies · More · Giova ©
          2023
        </p>
      </div>
    </aside>
  );
}
