type MetadataProps = {
  metadata: {
    label: string;
    value: string;
    format: string;
  }[];
  settings?: {
    darkMode?: {
      noGray?: boolean;
    };
  }
};

export function Metadata({ metadata, settings }: MetadataProps) {
  return (
    <p
      className={`text-xs sm:text-sm ${settings?.darkMode?.noGray ? 'dark:text-white' : 'dark:text-zinc-400'}`}
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
