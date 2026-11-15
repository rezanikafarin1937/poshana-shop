
import { readFile } from "fs/promises";
import path from "path";

export interface IUsagesProps {
  id: string;
  title: string;
  image: string;
}

export async function fetchUsage(): Promise<IUsagesProps[]> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "database",
    "usage.json"
  );

  const file = await readFile(filePath, "utf8");

  const result = JSON.parse(file);

  return result.usage || result;
}


