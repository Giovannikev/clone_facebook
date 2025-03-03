import { Search, MoreHorizontal, Video, Phone } from "lucide-react";

export default function RightSidebar() {
  const contacts = [
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

  return (
    <aside className="hidden lg:flex flex-col w-[300px] p-4 overflow-y-auto h-[calc(100vh-64px)] sticky top-16">
      <div className="mb-4">
        <h3 className="font-semibold text-gray-500 mb-2">Sponsored</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-[120px] h-[80px] bg-gray-200 rounded"></div>
            <div>
              <p className="font-medium">Learn web development</p>
              <p className="text-xs text-gray-500">example.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-[120px] h-[80px] bg-gray-200 rounded"></div>
            <div>
              <p className="font-medium">Tech gadgets on sale</p>
              <p className="text-xs text-gray-500">techstore.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-500">Contacts</h3>
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
            <button
              key={contact.id}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors w-full"
            >
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
                )}
              </div>
              <span className="font-medium">{contact.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="border-t mt-4 pt-4">
        <h3 className="font-semibold text-gray-500 mb-2">
          Group conversations
        </h3>
        <div className="space-y-1">
          <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors w-full">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-medium">Create new group</span>
          </button>
          <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors w-full">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            <span className="font-medium">Design Team</span>
          </button>
          <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors w-full">
            <div className="w-8 h-8 rounded-full bg-gray-300"></div>
            <span className="font-medium">Marketing Team</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
