import {BaseUrl} from '../../../Global/BaseUrl';
export async function POST(req) {
  try {
    const { username, password } = await req.json();

    // درخواست به json-server
    const res = await fetch(`${BaseUrl}/users?username=${username}`);
    const users = await res.json();
    
    // اگر کاربری با این نام نبود
    if (users.length === 0) {
      return Response.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const user = users[0];

    // چک پسورد
    if (user.password !== password) {
      return Response.json(
        { message: "Wrong password" },
        { status: 401 }
      );
    }

    // ساخت توکن ساده (fake token)
    const token = Buffer.from(`${user.id}-${Date.now()}`).toString("base64");

    // خروجی موفق
    return Response.json({
      message: "Login successful",
      token,
      expire : 1,
      user: { id: user.id, username: user.username }
    });
  } catch (err) {
    return Response.json(
      { message: "Server error", err },
      { status: 500 }
    );
  }
}
