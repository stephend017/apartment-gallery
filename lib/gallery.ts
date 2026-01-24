import fs from "fs/promises";
import path from "path";

interface Settings {
  darkMode?: {
    noGray?: boolean;
  };
}

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
    expand?: boolean;
  }>;
  credits: {
    name: string;
    role: string;
  }[];
  settings?: Settings;
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
