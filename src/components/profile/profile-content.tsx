"use client";

import { CreatePost } from "@/components/home/create-post";
import { PostList } from "@/components/home/post-list";
import type { ProfileInfo } from "@/lib/profile";

interface ProfileContentProps {
  profile: ProfileInfo;
}

export function ProfileContent({ profile }: ProfileContentProps) {
  return (
    <div className="space-y-6">
      {/* Create Post Section */}
      <CreatePost userAvatar={profile.profilePhoto} />

      {/* Posts */}
      <PostList />
    </div>
  );
}
