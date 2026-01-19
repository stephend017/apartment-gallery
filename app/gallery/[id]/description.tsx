type DescriptionProps = {
  description: string;
};

export function Description({ description }: DescriptionProps) {
  return (
    <p
      className="text-base sm:text-lg dark:text-zinc-300 whitespace-pre-line"
      style={{ fontFamily: '"Noto Sans"' }}
    >
      {description}
    </p>
  );
}
