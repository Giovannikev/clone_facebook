"use client";

import {
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Calendar,
} from "lucide-react";
import type { ProfileInfo } from "@/lib/profile";

interface ProfileSidebarProps {
  profile: ProfileInfo;
}

export function ProfileSidebar({ profile }: ProfileSidebarProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-bold text-xl mb-4">Intro</h2>
        <div className="space-y-3">
          {profile.bio && (
            <p className="text-center text-gray-700 mb-3">{profile.bio}</p>
          )}

          {profile.location && (
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="h-5 w-5 text-gray-500" />
              <span>Habite à {profile.location}</span>
            </div>
          )}

          {profile.work && (
            <div className="flex items-center gap-2 text-gray-700">
              <Briefcase className="h-5 w-5 text-gray-500" />
              <span>Travaille chez {profile.work}</span>
            </div>
          )}

          {profile.education && (
            <div className="flex items-center gap-2 text-gray-700">
              <GraduationCap className="h-5 w-5 text-gray-500" />
              <span>A étudié à {profile.education}</span>
            </div>
          )}

          {profile.relationship && (
            <div className="flex items-center gap-2 text-gray-700">
              <Heart className="h-5 w-5 text-gray-500" />
              <span>{profile.relationship}</span>
            </div>
          )}

          {profile.joinedDate && (
            <div className="flex items-center gap-2 text-gray-700">
              <Calendar className="h-5 w-5 text-gray-500" />
              <span>{profile.joinedDate}</span>
            </div>
          )}
        </div>

        <button className="w-full mt-4 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md font-medium text-sm">
          Modifier les infos
        </button>
      </div>

      {/* Photos Section */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-xl">Photos</h2>
          <a href="#" className="text-blue-500 text-sm hover:underline">
            Voir toutes les photos
          </a>
        </div>

        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-200 rounded-md overflow-hidden"
            >
              <img
                src={`/placeholder.svg?height=100&width=100&text=Photo ${
                  index + 1
                }`}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Friends Section */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="font-bold text-xl">Amis</h2>
            <p className="text-gray-500 text-sm">{profile.friendsCount} amis</p>
          </div>
          <a href="#" className="text-blue-500 text-sm hover:underline">
            Voir tous les amis
          </a>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {profile.friends.map((friend) => (
            <div key={friend.id} className="space-y-1">
              <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                <img
                  src={friend.avatar || "/placeholder.svg"}
                  alt={friend.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium truncate">{friend.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
