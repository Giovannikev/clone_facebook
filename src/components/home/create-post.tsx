"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Image, Video, Smile } from "lucide-react";

interface CreatePostProps {
  userAvatar?: string;
}

export function CreatePost({
  userAvatar = "https://github.com/shadcn.png",
}: CreatePostProps) {
  return (
    <div className="bg-white rounded-lg shadow mb-6 p-4">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-10 h-10 flex items-center justify-center">
          <Avatar>
            <AvatarImage
              src={userAvatar}
              alt="Avatar utilisateur"
              className="rounded-full"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
        <button className="bg-gray-100 hover:bg-gray-200 rounded-full py-2.5 px-4 flex-1 text-left text-gray-500 cursor-pointer">
          Quoi de neuf ?
        </button>
      </div>
      <div className="flex border-t pt-3">
        <Button
          className="flex items-center justify-center space-x-2 flex-1 py-1 hover:bg-gray-100 rounded-lg"
          variant={"ghost"}
          size={"sm"}
        >
          <Video className="h-6 w-6 text-red-500" />
          <span>Vidéo en direct</span>
        </Button>
        <Button
          className="flex items-center justify-center space-x-2 flex-1 py-1 hover:bg-gray-100 rounded-lg"
          variant={"ghost"}
          size={"sm"}
        >
          <Image className="h-6 w-6 text-green-500" />
          <span>Photo/vidéo</span>
        </Button>
        <Button
          className="flex items-center justify-center space-x-2 flex-1 py-1 hover:bg-gray-100 rounded-lg"
          variant={"ghost"}
          size={"sm"}
        >
          <Smile className="h-6 w-6 text-amber-300" />
          <span>Humeur/Activité</span>
        </Button>
      </div>
    </div>
  );
}
