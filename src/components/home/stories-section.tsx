"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel } from "@/components/home/carousel";
import { StoryModal } from "@/components/home/story-modal";
import { type Story, stories } from "@/lib/stories";

interface StoryItemProps {
  story: Story;
  onClick: (id: number) => void;
}

function StoryItem({ story, onClick }: StoryItemProps) {
  return (
    <div
      className="flex-shrink-0 w-[110px] h-[180px] rounded-lg overflow-hidden relative cursor-pointer"
      onClick={() => onClick(story.id)}
    >
      <div className="absolute inset-0 z-10" />
      <img
        src={story.image || "/placeholder.svg"}
        alt={`Story de ${story.user}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-2 left-2 z-20 p-0.5 bg-blue-500 rounded-full border-2 border-white">
        <Avatar className="h-8 w-8">
          <AvatarImage src={story.avatar} alt={story.user} />
          <AvatarFallback>{story.user.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      <div className="absolute bottom-2 left-2 right-2 z-20 text-white">
        <p className="text-xs font-medium truncate">{story.user}</p>
        <p className="text-[10px] opacity-80">{story.time}</p>
      </div>
    </div>
  );
}

function CreateStoryItem() {
  return (
    <div className="flex-shrink-0 w-[110px] h-[180px] rounded-lg overflow-hidden relative cursor-pointer bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-blue-500 rounded-full p-2 mb-2">
        <Plus className="h-5 w-5 text-white" />
      </div>
      <p className="text-xs font-medium text-center">Créer une story</p>
    </div>
  );
}

export function StoriesSection() {
  const [activeStory, setActiveStory] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-lg shadow mb-6 p-4 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Stories</h2>
        <a href="#" className="text-blue-500 text-sm hover:underline">
          Voir tout
        </a>
      </div>

      <Carousel>
        <CreateStoryItem />
        {stories.map((story) => (
          <StoryItem key={story.id} story={story} onClick={setActiveStory} />
        ))}
      </Carousel>

      {activeStory !== null && (
        <StoryModal
          stories={stories}
          activeStoryId={activeStory}
          onClose={() => setActiveStory(null)}
          onNavigate={setActiveStory}
        />
      )}
    </div>
  );
}
