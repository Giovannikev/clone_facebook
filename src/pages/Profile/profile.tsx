"use client";

import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileSidebar } from "@/components/profile/profile-sidebar";
import { ProfileContent } from "@/components/profile/profile-content";
import { profileData } from "@/lib/profile";

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <ProfileHeader profile={profileData} />

      <div className="flex gap-6">
        <div className="w-2/3">
          <ProfileSidebar profile={profileData} />
        </div>

        <div className="w-3/4">
          <ProfileContent profile={profileData} />
        </div>
      </div>
    </div>
  );
}
