import Image from "next/image"
import { notFound } from "next/navigation"
import { loadGalleryContent } from "@/lib/gallery"

type PageProps = {
  params: Promise<{
    id: string
  }>
}

export default async function GalleryPage({ params }: PageProps) {
  const { id } = await params

  let content
  try {
    content = await loadGalleryContent(id)
  } catch {
    notFound()
  }

  const {
    title,
    paintedDate,
    artist,
    description,
    leftImageSrc,
    rightImageSrc,
  } = content

  return (
    <div className="flex h-screen items-center justify-center bg-zinc-50 dark:bg-black" style={{backgroundImage: `url(${content.leftImageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <main className="
  max-w-4xl 
  p-12 
  rounded-2xl 
  shadow-xl
  bg-white/50 
  dark:bg-black/30
  backdrop-blur-lg 
  backdrop-saturate-150
  border 
  border-white/20 
  dark:border-white/10
">
        <header className="mb-6">
          <h1 className="text-5xl font-extrabold mb-6" style={{ fontFamily: '"Edu NSW ACT Cursive"' }}>
            {title}
          </h1>
          <p className="text-sm  dark:text-zinc-400" style={{ fontFamily: '"Noto Sans"' }}>
            <strong>Painted:</strong> {paintedDate} <br />
            <strong>Artist:</strong> {artist}
          </p>
        </header>

        <p className="text-lg  dark:text-zinc-300" style={{ fontFamily: '"Noto Sans"' }}>
          {description}
        </p>

        <section className="flex gap-6 justify-left mt-10">
          <Image
            src={leftImageSrc}
            alt={`${title} painting`}
            width={350}
            height={350}
            className="rounded-2xl object-cover"
            priority
          />
          <Image
            src={rightImageSrc}
            alt={`${title} reference`}
            width={350}
            height={350}
            className="rounded-2xl object-cover"
            priority
          />
        </section>
      </main>
    </div>
  )
}