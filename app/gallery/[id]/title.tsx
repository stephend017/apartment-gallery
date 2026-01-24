import { Metadata } from "./metadata";

type TitleProps = {
  title: string;
  metadata: {
    label: string;
    value: string;
    format: string;
  }[];
  settings?: {
    darkMode?: {
      noGray?: boolean;
    };
  };
};

export function Title({ title, metadata, settings }: TitleProps) {
  return (
    <header className="mb-4 sm:mb-6">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl/5xl font-extrabold mb-4 leading-relaxed"
        style={{ fontFamily: '"Edu NSW ACT Cursive"' }}
      >
        {title}
      </h1>
      <Metadata metadata={metadata} settings={settings} />
    </header>
  );
}
