import fs from "fs/promises";
import path from "path";

export interface GalleryContent {
  title: string;
  metadata: {
    label: string;
    value: string;
    format: string;
  }[];
  description: string;
  images: Array<{
    src: string;
    caption?: string;
    isBackground?: boolean;
  }>;
  credits: {
    name: string;
    role: string;
  }[];
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
