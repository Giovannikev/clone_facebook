"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { Story } from "@/lib/stories";

interface StoryModalProps {
  stories: Story[];
  activeStoryId: number;
  onClose: () => void;
  onNavigate: (id: number) => void;
}

export function StoryModal({
  stories,
  activeStoryId,
  onClose,
  onNavigate,
}: StoryModalProps) {
  const currentStory = stories.find((s) => s.id === activeStoryId);
  const currentIndex = stories.findIndex((s) => s.id === activeStoryId);

  const navigateToPrevious = () => {
    if (currentIndex > 0) {
      onNavigate(stories[currentIndex - 1].id);
    }
  };

  const navigateToNext = () => {
    if (currentIndex < stories.length - 1) {
      onNavigate(stories[currentIndex + 1].id);
    }
  };

  if (!currentStory) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-md h-[80vh]">
        <button
          className="absolute top-4 right-4 z-20 bg-black/30 rounded-full p-1.5 text-white hover:bg-black/50"
          onClick={onClose}
          aria-label="Fermer"
        >
          <X className="h-6 w-6" />
        </button>

        {currentIndex > 0 && (
          <div className="absolute top-1/2 left-4 z-20">
            <button
              className="bg-black/30 rounded-full p-1.5 text-white hover:bg-black/50"
              onClick={navigateToPrevious}
              aria-label="Story précédente"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
        )}

        {currentIndex < stories.length - 1 && (
          <div className="absolute top-1/2 right-4 z-20">
            <button
              className="bg-black/30 rounded-full p-1.5 text-white hover:bg-black/50"
              onClick={navigateToNext}
              aria-label="Story suivante"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}

        <div className="h-full w-full relative rounded-lg overflow-hidden">
          <img
            src={currentStory.image || "/placeholder.svg"}
            alt={`Story de ${currentStory.user}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10 border-2 border-blue-500">
                <AvatarImage
                  src={currentStory.avatar}
                  alt={currentStory.user}
                />
                <AvatarFallback>{currentStory.user.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-white font-medium">{currentStory.user}</p>
                <p className="text-white/70 text-xs">{currentStory.time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
