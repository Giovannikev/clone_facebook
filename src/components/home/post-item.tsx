"use client";

import { useState } from "react";
import { ThumbsUp, MessageCircle, Share2, Send } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { Post } from "@/lib/posts";
import { CommentList } from "@/components/home/comment-list";

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  const [commentText, setCommentText] = useState("");

  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-700 font-bold">U{post.id}</span>
          </div>
          <div>
            <h3 className="font-semibold">{post.user}</h3>
            <p className="text-xs text-gray-500">{post.time}</p>
          </div>
        </div>
        <p className="mb-3">{post.content}</p>
      </div>
      <div className="bg-gray-200 h-60 flex items-center justify-center">
        <span className="text-gray-500">Image de publication {post.id}</span>
      </div>
      <div className="p-4">
        <div className="flex justify-between mb-2">
          <div className="text-sm text-gray-500">{post.likes} J'aime</div>
          <div className="text-sm text-gray-500">
            {post.comments.length} commentaire
            {post.comments.length !== 1 ? "s" : ""}
          </div>
        </div>
        <div className="flex border-t pt-2">
          <button className="flex items-center justify-center space-x-2 flex-1 py-1 hover:bg-gray-100 rounded-lg">
            <span className="flex gap-2">
              <ThumbsUp className="h-5 w-5" />
              J'aime
            </span>
          </button>
          <button className="flex items-center justify-center space-x-2 flex-1 py-1 hover:bg-gray-100 rounded-lg">
            <span className="flex gap-2">
              <MessageCircle className="h-5 w-5" />
              Commenter
            </span>
          </button>
          <button className="flex items-center justify-center space-x-2 flex-1 py-1 hover:bg-gray-100 rounded-lg">
            <span className="flex gap-2">
              <Share2 className="h-5 w-5" />
              Partager
            </span>
          </button>
        </div>

        {post.comments.length > 0 && <CommentList comments={post.comments} />}

        <div className="mt-3 flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="Votre avatar"
                className="rounded-full"
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Écrivez un commentaire..."
              className="bg-gray-100 rounded-full py-2 px-3 w-full text-sm focus:outline-none focus:ring-1 focus:ring-transparent"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500"
              aria-label="Envoyer le commentaire"
              disabled={!commentText.trim()}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
