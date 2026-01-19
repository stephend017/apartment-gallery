import fs from "fs/promises";
import path from "path";

export interface GalleryContent {
  title: string;
  paintedDate: string;
  artist: string;
  description: string;
  images: Array<{
    src: string;
    caption?: string;
    isBackground?: boolean;
  }>;
}

export async function loadGalleryContent(id: string): Promise<GalleryContent> {
  const filePath = path.join(
    process.cwd(),
    "public/pages",
    `${id}/config.json`,
  );

  const json = await fs.readFile(filePath, "utf-8");
  return JSON.parse(json);
}
