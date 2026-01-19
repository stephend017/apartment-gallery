import Image from "next/image";

type ImageFigureProps = {
  src: string;
  alt: string;
  caption?: string;
  basePath?: string;
};

export function ImageFigure({
  src,
  alt,
  caption,
  basePath = "",
}: ImageFigureProps) {
  return (
    <figure className="border-zinc-200/50 border-1 rounded-t-2xl rounded-b-lg">
      <Image
        src={`${basePath}${src}`}
        alt={alt}
        width={175}
        height={175}
        className="rounded-t-2xl object-cover w-full sm:w-auto"
        priority
      />
      {caption && (
        <figcaption
          className="bg-zinc-200/50 dark:bg-zinc-800/50 font-bold text-xs sm:text-sm p-3 rounded-b-lg"
          style={{ fontFamily: '"Noto Sans"' }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
