import { Link } from "react-router-dom";

interface ShortcutItemProps {
  to: string;
  label: string;
}

export function ShortcutItem({ to, label }: ShortcutItemProps) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors"
    >
      <div className="w-6 h-6 rounded bg-gray-300"></div>
      <span className="font-medium">{label}</span>
    </Link>
  );
}
