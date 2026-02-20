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

// import {BaseUrl} from '../../../Global/BaseUrl';
// export async function POST(req) {
//   try {
//     const { username, password } = await req.json();

//     // درخواست به json-server
//     const res = await fetch(`${BaseUrl}/users?username=${username}`);
//     const users = await res.json();

//     // اگر کاربری با این نام نبود
//     if (users.length === 0) {
//       return Response.json(
//         { message: "User not found" },
//         { status: 404 }
//       );
//     }

//     const user = users[0];

//     // چک پسورد
//     if (user.password !== password) {
//       return Response.json(
//         { message: "Wrong password" },
//         { status: 401 }
//       );
//     }

//     // ساخت توکن ساده (fake token)
//     const token = Buffer.from(`${user.id}-${Date.now()}`).toString("base64");

//     // خروجی موفق
//     return Response.json({
//       message: "Login successful",
//       token,
//       expire : 1,
//       user: { id: user.id, username: user.username }
//     });
//   } catch (err) {
//     return Response.json(
//       { message: "Server error", err },
//       { status: 500 }
//     );
//   }
// }
