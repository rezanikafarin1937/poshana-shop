import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get('_page')) || 1;
    const per_page = parseInt(searchParams.get('_per_page')) || 10;
    const cat = searchParams.get('cat');
    const title = searchParams.get('title');

    const filePath =
      process.env.FILE_PATH_PRODUCTS ||
      path.join(process.cwd(), 'public', 'database', 'products.json');

    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    let products = data.products || data;

    // ✅ فیلتر دسته‌بندی
    if (cat) {
      products = products.filter((item) => item.cat === cat);
    }

    // ✅ فیلتر title (جستجوی شامل شدن متن)
    if (title) {
      products = products.filter((item) =>
        item.title.indexOf(`${title}`) > -1
      );
    }


    // ✅ محاسبه pagination درست
    const totalItems = products.length;
    const totalPages = Math.ceil(totalItems / per_page);

    const start = (page - 1) * per_page;
    const end = start + per_page;

    const paginatedProducts = products.slice(start, end);

    return NextResponse.json({
      data: paginatedProducts,
      page,
      per_page,
      items: totalItems,
      first: 1,
      last: totalPages,
      pages: totalPages,
      next: page < totalPages ? page + 1 : null,
      prev: page > 1 ? page - 1 : null,
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'خطا در خواندن فایل' },
      { status: 500 }
    );
  }
}

