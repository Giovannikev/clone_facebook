"use client";

import { posts } from "@/lib/posts";
import { PostItem } from "@/components/home/post-item";

export function PostList() {
  return (
    <>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </>
  );
}
