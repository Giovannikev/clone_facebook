import { ChevronDown, ChevronUp } from "lucide-react";

interface ToggleButtonProps {
  showMore: boolean;
  onClick: () => void;
}

export function ToggleButton({ showMore, onClick }: ToggleButtonProps) {
  return (
    <button
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors w-full"
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-300">
        {showMore ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </div>
      <span className="font-medium">{showMore ? "See less" : "See more"}</span>
    </button>
  );
}
