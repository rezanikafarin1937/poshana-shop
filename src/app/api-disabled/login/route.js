import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "Username and password required" },
        { status: 400 },
      );
    }

    // مسیر فایل users
    const filePath =
      process.env.FILE_PATH_USERS ||
      path.join(process.cwd(), "public", "database", "users.json");

    const jsonData = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(jsonData);

    // پیدا کردن کاربر
    const user = users.find((u) => u.username === username);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (user.password !== password) {
      return NextResponse.json({ message: "Wrong password" }, { status: 401 });
    }

    // ساخت token ساده
    const token = Buffer.from(`${user.id}-${Date.now()}`).toString("base64");

    return NextResponse.json({
      message: "Login successful",
      token,
      expire: Date.now() + 60 * 60 * 1000, // 1 ساعت
      user: {
        id: user.id,
        username: user.username,
      },
    });
  } catch (error) {
    console.log("LOGIN ERROR:", error);
    return NextResponse.json(
      { message: "Server error", error: String(error) },
      { status: 500 },
    );
  }
}

