import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath =
      process.env.FILE_PATH_PRODUCTS ||
      path.join(process.cwd(), "public", "database", "products.json");

    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);
    let products = data.products || data;
    products = products.filter((item) => parseInt(item.id) > 160);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "خطا در خواندن فایل" }, { status: 500 });
  }
}
