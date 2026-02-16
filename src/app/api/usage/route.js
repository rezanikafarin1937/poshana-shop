import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath =
      process.env.FILE_PATH_USAGES ||
      path.join(process.cwd(), 'public', 'database', 'usage.json');

    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(jsonData);

    let usage = data.usage || data;
    return NextResponse.json({
      data: usage,
    });

  } catch (error) {
    return NextResponse.json(
      { error: 'خطا در خواندن فایل' },
      { status: 500 }
    );
  }
}


