interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return (
    <span className="inline-block px-2.5 py-1 rounded text-xs font-medium bg-surface text-accent border border-accent/15">
      {label}
    </span>
  );
}
