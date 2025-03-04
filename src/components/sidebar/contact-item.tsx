interface ContactItemProps {
  name: string;
  online: boolean;
}

export function ContactItem({ name, online }: ContactItemProps) {
  return (
    <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors w-full">
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        {online && (
          <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
        )}
      </div>
      <span className="font-medium">{name}</span>
    </button>
  );
}
