"use client";

import { useState } from "react";
import {
  Users,
  Bookmark,
  Calendar,
  Video,
  ShoppingBag,
  Clock,
  UserIcon as UserGroup,
  Gamepad2,
  Heart,
  Activity,
  Settings,
  HelpCircle,
  MessageCircle,
  Bell,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { NavigationLink } from "@/components/sidebar/navigation-link";
import { ShortcutItem } from "@/components/sidebar/shortcut-item";
import { SectionHeader } from "@/components/ui/section-header";
import { ToggleButton } from "@/components/sidebar/toggle-button";
import "@/components/css/scrollbar.css";
import { NavItem } from "@/types/type";

export default function LeftSidebar() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const mainNavItems: NavItem[] = [
    {
      path: "/friends",
      icon: <Users className="w-6 h-6 text-blue-500" />,
      label: "Friends",
    },
    {
      path: "/saved",
      icon: <Bookmark className="w-6 h-6 text-purple-500" />,
      label: "Saved",
    },
    {
      path: "/events",
      icon: <Calendar className="w-6 h-6 text-red-500" />,
      label: "Events",
    },
    {
      path: "/watch",
      icon: <Video className="w-6 h-6 text-blue-500" />,
      label: "Watch",
    },
    {
      path: "/marketplace",
      icon: <ShoppingBag className="w-6 h-6 text-blue-500" />,
      label: "Marketplace",
    },
    {
      path: "/memories",
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      label: "Memories",
    },
  ];

  const extraNavItems: NavItem[] = [
    {
      path: "/groups",
      icon: <UserGroup className="w-6 h-6 text-blue-500" />,
      label: "Groups",
    },
    {
      path: "/gaming",
      icon: <Gamepad2 className="w-6 h-6 text-green-500" />,
      label: "Games",
    },
    {
      path: "/fundraisers",
      icon: <Heart className="w-6 h-6 text-red-500" />,
      label: "Fundraisers",
    },
    {
      path: "/activity",
      icon: <Activity className="w-6 h-6 text-orange-500" />,
      label: "Recent Activity",
    },
    {
      path: "/messages",
      icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
      label: "Messages",
    },
    {
      path: "/notifications",
      icon: <Bell className="w-6 h-6 text-blue-500" />,
      label: "Notifications",
    },
    {
      path: "/settings",
      icon: <Settings className="w-6 h-6 text-gray-500" />,
      label: "Settings",
    },
    {
      path: "/help",
      icon: <HelpCircle className="w-6 h-6 text-gray-500" />,
      label: "Help Center",
    },
  ];

  const shortcuts = [
    { path: "/groups/gaming", label: "Gaming Group" },
    { path: "/groups/tech", label: "Tech Enthusiasts" },
    { path: "/groups/cooking", label: "Cooking Club" },
    { path: "/groups/fitness", label: "Fitness Fanatics" },
    { path: "/groups/books", label: "Book Club" },
  ];

  return (
    <aside className="hidden md:flex flex-col w-[350px] p-4 overflow-y-auto h-[calc(100vh-64px)] sticky top-16 custom-scrollbar">
      <nav className="space-y-1">
        <Link
          to="/profile"
          className="flex items-center gap-3 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="rounded-full"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <p className="font-medium text-gray-700">Giovanni Kevin</p>
        </Link>

        {mainNavItems.map((item) => (
          <NavigationLink
            key={item.path}
            to={item.path}
            icon={item.icon}
            label={item.label}
          />
        ))}

        {showMore && (
          <>
            {extraNavItems.map((item) => (
              <NavigationLink
                key={item.path}
                to={item.path}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </>
        )}

        <ToggleButton showMore={showMore} onClick={toggleShowMore} />
      </nav>

      <div className="mt-4 pt-4 border-t">
        <SectionHeader title="Your shortcuts" />
        <div className="space-y-1">
          {shortcuts.map((shortcut) => (
            <ShortcutItem
              key={shortcut.path}
              to={shortcut.path}
              label={shortcut.label}
            />
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4 text-xs text-gray-500 px-2">
        <p>
          Privacy · Terms · Advertising · Ad Choices · Cookies · More · Giova ©
          2025
        </p>
      </div>
    </aside>
  );
}
