import type React from "react";
import { Link } from "react-router-dom";

interface NavigationLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

export function NavigationLink({ to, icon, label }: NavigationLinkProps) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition-colors"
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}
