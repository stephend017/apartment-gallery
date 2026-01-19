type MetadataProps = {
  metadata: {
    label: string;
    value: string;
    format: string;
  }[];
};

export function Metadata({ metadata }: MetadataProps) {
  return (
    <p
      className="text-xs sm:text-sm dark:text-zinc-400"
      style={{ fontFamily: '"Noto Sans"' }}
    >
      {metadata.map((item) => (
        <span key={item.label}>
          <strong>{item.label}</strong> {item.value} <br />
        </span>
      ))}
    </p>
  );
}
