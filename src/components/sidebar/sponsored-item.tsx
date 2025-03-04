interface SponsoredItemProps {
  title: string;
  url: string;
}

export function SponsoredItem({ title, url }: SponsoredItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-[120px] h-[80px] bg-gray-200 rounded"></div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-gray-500">{url}</p>
      </div>
    </div>
  );
}
