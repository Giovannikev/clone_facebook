"use client";

import { useState } from "react";
import { Camera, Edit, Plus, MoreHorizontal, ChevronDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { ProfileInfo } from "@/lib/profile";

interface ProfileHeaderProps {
  profile: ProfileInfo;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const [activeTab, setActiveTab] = useState("publications");

  return (
    <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
      <div className="relative h-[300px] bg-gray-200">
        <img
          src={profile.coverPhoto || "/placeholder.svg"}
          alt="Photo de couverture"
          className="w-full h-full object-cover"
        />
        <button className="absolute bottom-4 right-4 bg-white rounded-md px-3 py-1.5 flex items-center gap-1.5 text-sm font-medium shadow hover:bg-gray-100">
          <Camera className="h-4 w-4" />
          Modifier la photo de couverture
        </button>
      </div>

      <div className="relative px-8 pb-4">
        <div className="absolute -top-20 left-8">
          <div className="relative">
            <Avatar className="h-[168px] w-[168px] border-4 border-white shadow-md">
              <AvatarImage src={profile.profilePhoto} alt={profile.name} />
              <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <button className="absolute bottom-3 right-3 bg-gray-200 rounded-full p-2 hover:bg-gray-300">
              <Camera className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="ml-[184px] pt-4">
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          <p className="text-blue-500 font-medium cursor-pointer hover:underline">
            @{profile.username}
          </p>
          <p className="text-gray-500 mt-1">{profile.bio}</p>
        </div>

        <div className="flex justify-end items-center gap-2 mt-4">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-1.5">
            <Plus className="h-4 w-4" />
            Ajouter à la story
          </Button>
          <Button className="bg-gray-200 hover:bg-gray-300 text-black flex items-center gap-1.5">
            <Edit className="h-4 w-4" />
            Modifier le profil
          </Button>
          <Button className="bg-gray-200 hover:bg-gray-300 text-black">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>

        <div className="h-[1px] bg-gray-300 mt-4"></div>

        <div className="flex mt-1">
          <button
            className={`px-4 py-3 font-medium text-sm relative ${
              activeTab === "publications"
                ? "text-blue-500"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("publications")}
          >
            Publications
            {activeTab === "publications" && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-500"></div>
            )}
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm relative ${
              activeTab === "about"
                ? "text-blue-500"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("about")}
          >
            À propos
            {activeTab === "about" && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-500"></div>
            )}
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm relative ${
              activeTab === "friends"
                ? "text-blue-500"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("friends")}
          >
            Amis
            {activeTab === "friends" && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-500"></div>
            )}
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm relative ${
              activeTab === "photos"
                ? "text-blue-500"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("photos")}
          >
            Photos
            {activeTab === "photos" && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-500"></div>
            )}
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm relative ${
              activeTab === "videos"
                ? "text-blue-500"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("videos")}
          >
            Vidéos
            {activeTab === "videos" && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-500"></div>
            )}
          </button>
          <button className="px-4 py-3 font-medium text-sm text-gray-600 hover:bg-gray-100 flex items-center">
            Plus
            <ChevronDown className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
