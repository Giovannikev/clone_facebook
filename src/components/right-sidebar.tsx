import { Search, MoreHorizontal, Video } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { SponsoredItem } from "@/components/sidebar/sponsored-item";
import { ContactItem } from "@/components/sidebar/contact-item";
import { GroupConversationItem } from "@/components/sidebar/group-conversation-item";
import "@/components/css/scrollbar.css";

interface Contact {
  id: number;
  name: string;
  online: boolean;
}

export default function RightSidebar() {
  const contacts: Contact[] = [
    { id: 1, name: "Jane Cooper", online: true },
    { id: 2, name: "Wade Warren", online: true },
    { id: 3, name: "Esther Howard", online: false },
    { id: 4, name: "Cameron Williamson", online: true },
    { id: 5, name: "Brooklyn Simmons", online: false },
    { id: 6, name: "Leslie Alexander", online: true },
    { id: 7, name: "Jenny Wilson", online: true },
    { id: 8, name: "Guy Hawkins", online: false },
    { id: 9, name: "Robert Fox", online: true },
    { id: 10, name: "Jacob Jones", online: false },
  ];

  const sponsoredItems = [
    {
      title: "Learn web development",
      url: "example.com",
    },
    {
      title: "Tech gadgets on sale",
      url: "techstore.com",
    },
  ];

  const groupConversations = [
    { id: "create", name: "Create new group", isCreateButton: true },
    { id: "design", name: "Design Team", isCreateButton: false },
    { id: "marketing", name: "Marketing Team", isCreateButton: false },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-[400px] p-4 overflow-y-auto h-[calc(100vh-64px)] sticky top-16 custom-scrollbar">
      <div className="mb-4">
        <SectionHeader title="Sponsored" />
        <div className="space-y-4">
          {sponsoredItems.map((item, index) => (
            <SponsoredItem key={index} title={item.title} url={item.url} />
          ))}
        </div>
      </div>

      <div className="mb-4">
        <SectionHeader title="Anniversaires" />
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-[120px] h-[80px] bg-gray-200 rounded"></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between mb-2">
          <SectionHeader title="Contacts" noMargin />
          <div className="flex gap-2">
            <button className="p-1 rounded-full hover:bg-gray-200">
              <Video className="w-4 h-4" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-200">
              <Search className="w-4 h-4" />
            </button>
            <button className="p-1 rounded-full hover:bg-gray-200">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-1">
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              name={contact.name}
              online={contact.online}
            />
          ))}
        </div>
      </div>

      <div className="border-t mt-4 pt-4">
        <SectionHeader title="Group conversations" />
        <div className="space-y-1">
          {groupConversations.map((group) => (
            <GroupConversationItem
              key={group.id}
              name={group.name}
              isCreateButton={group.isCreateButton}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
