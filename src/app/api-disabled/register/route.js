import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { message: "اطلاعات ناقص است" },
        { status: 400 }
      );
    }

    const filePath =
      process.env.FILE_PATH_USERS ||
      path.join(process.cwd(), "public", "database", "users.json");

    const jsonData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonData);

    const users = data.users || [];

    const userExists = users.find((u) => u.username === username);

    if (userExists) {
      return NextResponse.json(
        { message: "این نام کاربری قبلاً ثبت شده است" },
        { status: 409 }
      );
    }

    const newUser = {
      id: String(users.length + 1),
      username,
      password,
    };

    users.push(newUser);

    fs.writeFileSync(
      filePath,
      JSON.stringify( users , null, 2)
    );

    return NextResponse.json({
      message: "ثبت نام موفق",
    });

  } catch (error) {
    console.log("REGISTER ERROR:", error);
    return NextResponse.json(
      { message: "خطای سرور" },
      { status: 500 }
    );
  }
}
