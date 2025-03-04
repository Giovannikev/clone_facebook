interface SectionHeaderProps {
  title: string;
  noMargin?: boolean;
}

export function SectionHeader({ title, noMargin = false }: SectionHeaderProps) {
  return (
    <h3 className={`font-semibold text-gray-500 ${noMargin ? "" : "mb-2"}`}>
      {title}
    </h3>
  );
}
