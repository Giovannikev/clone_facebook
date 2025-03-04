"use client";

import { X, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/home/carousel";
import { type FriendSuggestion, friendSuggestions } from "@/lib/friends";

interface FriendSuggestionItemProps {
  friend: FriendSuggestion;
}

function FriendSuggestionItem({ friend }: FriendSuggestionItemProps) {
  return (
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
        <button
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-1 hover:bg-gray-300"
          aria-label="Ignorer la suggestion"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-sm truncate">{friend.name}</h3>
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
  );
}

export function FriendSuggestionsSection() {
  return (
    <div className="bg-white rounded-lg shadow mb-6 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Suggestions d'amis</h2>
        <a href="#" className="text-blue-500 text-sm hover:underline">
          Voir tout
        </a>
      </div>

      <Carousel>
        {friendSuggestions.map((friend) => (
          <FriendSuggestionItem key={friend.id} friend={friend} />
        ))}
      </Carousel>
    </div>
  );
}
