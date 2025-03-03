"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Image,
  Video,
  Smile,
  ThumbsUp,
  MessageCircle,
  Share2,
  Send,
  ChevronLeft,
  ChevronRight,
  X,
  UserPlus,
} from "lucide-react";
import { useRef, useState } from "react";

// Sample data with comments
const posts = [
  {
    id: 1,
    user: "Utilisateur 1",
    time: "Il y a 1 heure",
    content: "Voici un exemple de publication sur Facebook !",
    likes: 15,
    comments: [
      {
        id: 1,
        user: "Marie",
        content: "Super photo !",
        time: "Il y a 30 minutes",
      },
      {
        id: 2,
        user: "Thomas",
        content: "J'adore !",
        time: "Il y a 15 minutes",
      },
      {
        id: 3,
        user: "Sophie",
        content: "Magnifique !",
        time: "Il y a 5 minutes",
      },
    ],
  },
  {
    id: 2,
    user: "Utilisateur 2",
    time: "Il y a 2 heures",
    content: "Voici un exemple de publication sur Facebook !",
    likes: 15,
    comments: [],
  },
  {
    id: 3,
    user: "Utilisateur 3",
    time: "Il y a 3 heures",
    content: "Voici un exemple de publication sur Facebook !",
    likes: 15,
    comments: [
      {
        id: 1,
        user: "Pierre",
        content: "Très intéressant !",
        time: "Il y a 1 heure",
      },
    ],
  },
];

// Sample friend suggestions
const friendSuggestions = [
  {
    id: 1,
    name: "Alexandre Dupont",
    mutualFriends: 3,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Camille Martin",
    mutualFriends: 5,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Julien Bernard",
    mutualFriends: 2,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Émilie Petit",
    mutualFriends: 7,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Nicolas Leroy",
    mutualFriends: 1,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "Sophie Moreau",
    mutualFriends: 4,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 7,
    name: "Thomas Dubois",
    mutualFriends: 6,
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 8,
    name: "Laura Blanc",
    mutualFriends: 2,
    avatar: "/placeholder.svg?height=100&width=100",
  },
];

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = 300; // Adjust as needed
    const currentScroll = carouselRef.current.scrollLeft;
    const newScroll =
      direction === "left"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;

    carouselRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });

    // Update arrow visibility after scrolling
    setTimeout(() => {
      if (!carouselRef.current) return;

      setShowLeftArrow(carouselRef.current.scrollLeft > 0);
      setShowRightArrow(
        carouselRef.current.scrollLeft <
          carouselRef.current.scrollWidth - carouselRef.current.clientWidth - 10
      );
    }, 300);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow mb-6 p-4">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-10 h-10 flex items-center justify-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  className="rounded-full"
                />
                <AvatarFallback>CN</AvatarFallback>
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

        <div className="bg-white rounded-lg shadow mb-6 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Suggestions d'amis</h2>
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Voir tout
            </a>
          </div>

          <div className="relative">
            {showLeftArrow && (
              <button
                onClick={() => scrollCarousel("left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1.5 hover:bg-gray-100"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
            )}

            <div
              ref={carouselRef}
              className="flex overflow-x-auto scrollbar-hide gap-3 pb-2 px-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onScroll={() => {
                if (!carouselRef.current) return;
                setShowLeftArrow(carouselRef.current.scrollLeft > 0);
                setShowRightArrow(
                  carouselRef.current.scrollLeft <
                    carouselRef.current.scrollWidth -
                      carouselRef.current.clientWidth -
                      10
                );
              }}
            >
              {friendSuggestions.map((friend) => (
                <div
                  key={friend.id}
                  className="flex-shrink-0 w-[160px] border rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
                >
                  <div className="h-[100px] bg-gray-200 relative">
                    <img
                      src={friend.avatar || "/placeholder.svg"}
                      alt={friend.name}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 hover:bg-gray-300">
                      <X className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm truncate">
                      {friend.name}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">
                      {friend.mutualFriends} ami
                      {friend.mutualFriends > 1 ? "s" : ""} en commun
                    </p>
                    <Button
                      className="w-full text-xs py-1 h-8 bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-1"
                      size="sm"
                    >
                      <UserPlus className="h-3.5 w-3.5" />
                      Ajouter
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {showRightArrow && (
              <button
                onClick={() => scrollCarousel("right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-1.5 hover:bg-gray-100"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            )}
          </div>
        </div>

        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow mb-6">
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
              <span className="text-gray-500">
                Image de publication {post.id}
              </span>
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

              {post.comments.length > 0 && (
                <div className="mt-4 border-t pt-3">
                  <h4 className="text-sm font-medium mb-2">Commentaires</h4>
                  <div className="space-y-3">
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="flex space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center">
                          <span className="text-xs text-gray-700 font-bold">
                            {comment.user.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-100 rounded-2xl px-3 py-2">
                            <p className="text-sm font-medium">
                              {comment.user}
                            </p>
                            <p className="text-sm">{comment.content}</p>
                          </div>
                          <div className="flex gap-4 mt-1 ml-1">
                            <button className="text-xs text-gray-500 hover:text-gray-700">
                              J'aime
                            </button>
                            <button className="text-xs text-gray-500 hover:text-gray-700">
                              Répondre
                            </button>
                            <span className="text-xs text-gray-500">
                              {comment.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-3 flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs text-gray-700 font-bold">M</span>
                </div>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Écrivez un commentaire..."
                    className="bg-gray-100 rounded-full py-2 px-3 w-full text-sm focus:outline-none focus:ring-1 focus:ring-transparent"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
