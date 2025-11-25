import { writeFile } from "fs/promises";
import path from "path";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    //  get simple data
    const id = formData.get("id")?.toString()!;
    const title = formData.get("title")?.toString()!;
    const price = formData.get("price")?.toString()!;
    const description = formData.get("description")?.toString()!;

    //  get files
    const files = formData.getAll("images") as File[];

    const savedFiles: string[] = [];

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filename = `${Date.now()}-${file.name}`;

      const uploadDir = path.join(process.cwd(), "public", "uploads", filename);

      await writeFile(uploadDir, buffer);

      savedFiles.push(filename);
    }

    // 📌 ارسال فقط JSON به json-server
    await axios.post("http://localhost:8000/products", {
      id,
      title,
      price,
      description,
      images: savedFiles, // فقط نام فایل‌ها
    });

    return Response.json({ message: "success", images: savedFiles });
  } catch (err: any) {
    console.error("UPLOAD ERROR:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
