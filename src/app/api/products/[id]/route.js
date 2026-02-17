import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    console.log("Id = ", id);

    const filePath =
      process.env.FILE_PATH_PRODUCTS ||
      path.join(process.cwd(), "public", "database", "products.json");

    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    const products = data.products || data;

    const product = products.find((item) => parseInt(item.id)  === parseInt(id));
    if (product) {
      return NextResponse.json(product);
    } else if (!product) {
      return NextResponse.json({ error: "محصول پیدا نشد" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: "خطا در خواندن فایل" }, { status: 500 });
  }
}
