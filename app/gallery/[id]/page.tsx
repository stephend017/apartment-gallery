import Image from "next/image";
import { notFound } from "next/navigation";
import { loadGalleryContent } from "@/lib/gallery";
import { readdir } from "fs/promises";
import { join } from "path";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

// This function tells Next.js which dynamic routes to pre-render
export async function generateStaticParams() {
  const pagesDir = join(process.cwd(), "public", "pages");
  const entries = await readdir(pagesDir, { withFileTypes: true });
  const pageNames = entries
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => ({ id: dirent.name }));

  return pageNames;
}

export default async function GalleryPage({ params }: PageProps) {
  const { id } = await params;

  let content;
  try {
    content = await loadGalleryContent(id);
  } catch {
    notFound();
  }

  const {
    title,
    paintedDate,
    artist,
    description,
    leftImageSrc,
    leftImageCaption,
    rightImageSrc,
    rightImageCaption
  } = content;

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black p-4 sm:p-6 md:p-8"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ""}${content.leftImageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main
        className="
  w-full
  max-w-4xl
  max-w-sm mx-auto
  p-6
  rounded-2xl 
  shadow-xl
  bg-white/50 
  dark:bg-black/30
  backdrop-blur-lg 
  backdrop-saturate-150
  border 
  border-white/20 
  dark:border-white/10
"
      >
        <header className="mb-4 sm:mb-6">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6"
            style={{ fontFamily: '"Edu NSW ACT Cursive"' }}
          >
            {title}
          </h1>
          <p
            className="text-xs sm:text-sm dark:text-zinc-400"
            style={{ fontFamily: '"Noto Sans"' }}
          >
            <strong>Painted:</strong> {paintedDate} <br />
            <strong>Artist:</strong> {artist}
          </p>
        </header>

        <p
          className="text-base sm:text-lg dark:text-zinc-300"
          style={{ fontFamily: '"Noto Sans"' }}
        >
          {description}
        </p>

        <section className="flex flex-col gap-6 justify-center mt-10">
          <figure className="border-zinc-200/50 border-1 rounded-t-2xl rounded-b-lg">
          
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${leftImageSrc}`}
            alt={`${title} painting`}
            width={175}
            height={175}
            className="rounded-t-2xl object-cover w-full sm:w-auto"
            priority
            />

            {leftImageCaption && (
              <figcaption className='bg-zinc-200/50 dark:bg-zinc-800/50 font-bold text-xs sm:text-sm p-3 rounded-b-lg' style={{ fontFamily: '"Noto Sans"' }}>
                {leftImageCaption}
              </figcaption>
            )}
          </figure>
                    <figure className="border-zinc-200/50 border-1 rounded-t-2xl rounded-b-lg">


          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${rightImageSrc}`}
            alt={`${title} reference`}
            width={175}
            height={175}
            className="rounded-t-2xl object-cover w-full sm:w-auto"
            priority
          />
          { rightImageCaption && (
            <figcaption className='bg-zinc-200/50 dark:bg-zinc-800/50 font-bold text-xs sm:text-sm p-3 rounded-b-lg' style={{ fontFamily: '"Noto Sans"' }}>
              {rightImageCaption}
            </figcaption>
          )}
          </figure>

        </section>
      </main>
    </div>
  );
}
