import { notFound } from "next/navigation";
import { loadGalleryContent } from "@/lib/gallery";
import { readdir } from "fs/promises";
import { join } from "path";
import { ImageFigure } from "./image-figure";
import { Title } from "./title";
import { Description } from "./description";
import { Credits } from "./credits";

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

  const { title, metadata, description, images,credits, settings } = content;

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black p-4 sm:p-6 md:p-8"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH || ""}${images.find((img) => img.isBackground)?.src})`,
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
        <Title title={title} metadata={metadata} settings={settings} />

        <Description description={description} />

        <section className="flex flex-col gap-6 justify-center mt-5">
          {images.map((image, index) => (
            <ImageFigure
              key={index}
              src={image.src}
              alt={`${title} image ${index + 1}`}
              caption={image.caption}
              basePath={process.env.NEXT_PUBLIC_BASE_PATH || ""}
            />
          ))}
        </section>

        <Credits credits={credits} settings={settings} />
      </main>
    </div>
  );
}
