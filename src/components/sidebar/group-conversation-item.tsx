import { Phone } from "lucide-react";

interface GroupConversationItemProps {
  name: string;
  isCreateButton?: boolean;
}

export function GroupConversationItem({
  name,
  isCreateButton = false,
}: GroupConversationItemProps) {
  return (
    <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors w-full">
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        {isCreateButton ? <Phone className="w-4 h-4" /> : null}
      </div>
      <span className="font-medium">{name}</span>
    </button>
  );
}
