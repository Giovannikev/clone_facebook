"use client";

import type { Comment } from "@/lib/posts";

interface CommentListProps {
  comments: Comment[];
}

interface CommentItemProps {
  comment: Comment;
}

function CommentItem({ comment }: CommentItemProps) {
  return (
    <div className="flex space-x-2">
      <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center">
        <span className="text-xs text-gray-700 font-bold">
          {comment.user.charAt(0)}
        </span>
      </div>
      <div className="flex-1">
        <div className="bg-gray-100 rounded-2xl px-3 py-2">
          <p className="text-sm font-medium">{comment.user}</p>
          <p className="text-sm">{comment.content}</p>
        </div>
        <div className="flex gap-4 mt-1 ml-1">
          <button className="text-xs text-gray-500 hover:text-gray-700">
            J'aime
          </button>
          <button className="text-xs text-gray-500 hover:text-gray-700">
            Répondre
          </button>
          <span className="text-xs text-gray-500">{comment.time}</span>
        </div>
      </div>
    </div>
  );
}

export function CommentList({ comments }: CommentListProps) {
  return (
    <div className="mt-4 border-t pt-3">
      <h4 className="text-sm font-medium mb-2">Commentaires</h4>
      <div className="space-y-3">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
