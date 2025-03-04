"use client";

import { CreatePost } from "@/components/home/create-post";
import { StoriesSection } from "@/components/home/stories-section";
import { FriendSuggestionsSection } from "@/components/home/friend-suggestion";
import { PostList } from "@/components/home/post-list";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto py-6">
        <CreatePost userAvatar="https://github.com/shadcn.png" />
        <StoriesSection />
        <FriendSuggestionsSection />
        <PostList />
      </div>
    </div>
  );
}
