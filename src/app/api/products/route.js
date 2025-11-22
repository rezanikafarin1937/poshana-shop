// pages/api/products.js
import { NextResponse } from "next/server";
import path from 'path';

// مسیر ذخیره‌سازی تصاویر
const uploadDir = path.join(process.cwd(), 'public', 'uploads');

export default async function POST(request) {
  if (req.method === 'POST') {
    const { title, price, description, images } = await request.json();
    const newProduct = {
      title,
      price,
      description,
      images,
    };

    // ذخیره‌سازی محصول در json-server
    // اینجا از fs برای ذخیره فایل‌ها استفاده می‌کنیم (در واقع شما در json-server این کار رو انجام می‌دید)
    const filePath = path.join(uploadDir, newProduct.images[0]); // مثال برای استفاده از نام تصویر در فایل ذخیره

    // ارسال پاسخ

     return NextResponse.json({ message: "Product Created", data: { title, price, description, images } }, { status: 201 });
    res.status(200).json(newProduct);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
