
"use client";

import { useState } from "react";
import Cookie from "js-cookie";
import Container from "@/components/container/Container";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password) {
      setError("لطفاً نام کاربری و رمز عبور را وارد کنید.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password,
        }),
      });

      const data = await res.json();

      // کاربر در سیستم وجود ندارد
      if (res.status === 404) {
        router.push(
          `/register?username=${encodeURIComponent(username.trim())}`
        );
        return;
      }

      // ورود ناموفق
      if (!res.ok) {
        setError(data.message || "نام کاربری یا رمز عبور اشتباه است.");
        return;
      }

      // بررسی دریافت توکن
      if (!data.token) {
        setError("توکن ورود از سرور دریافت نشد.");
        return;
      }

      // ذخیره توکن
      Cookie.set("token", data.token, {
        expires: 1,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });

      // انتقال به فروشگاه
      router.replace("/store");

    } catch (error) {
      console.error("Login Error:", error);
      setError("ارتباط با سرور برقرار نشد. دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <div
        dir="rtl"
        className="flex min-h-[75vh] items-center justify-center py-10"
      >
        <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

          {/* سربرگ فرم */}
          <div className="border-b border-slate-100 bg-slate-50 px-6 py-8 text-center">

            <h1 className="text-3xl font-black tracking-wide text-slate-800">
              پوشانا
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              استایل خاص خودت را انتخاب کن
            </p>

            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-amber-600" />
          </div>

          {/* فرم ورود */}
          <form onSubmit={handleLogin} className="space-y-5 p-6 sm:p-8">

            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-800">
                ورود به حساب کاربری
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                برای ادامه خرید وارد حساب خود شوید.
              </p>
            </div>

            {/* نام کاربری */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                نام کاربری
              </label>

              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="نام کاربری خود را وارد کنید"
                autoComplete="username"
                required
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-amber-600 focus:bg-white focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {/* رمز عبور */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                رمز عبور
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="رمز عبور خود را وارد کنید"
                autoComplete="current-password"
                required
                className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-amber-600 focus:bg-white focus:ring-2 focus:ring-amber-100"
              />
            </div>

            {/* پیام خطا */}
            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
              >
                {error}
              </div>
            )}

            {/* دکمه ورود */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-slate-800 py-3 font-bold text-white transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "در حال ورود..." : "ورود به حساب کاربری"}
            </button>

            {/* ثبت نام */}
            <div className="border-t border-slate-100 pt-5 text-center">
              <p className="text-sm text-slate-500">
                هنوز در پوشانا ثبت‌نام نکرده‌اید؟
              </p>

              <button
                type="button"
                onClick={() => router.push("/register")}
                className="mt-2 font-bold text-amber-700 transition hover:text-amber-800"
              >
                ایجاد حساب کاربری
              </button>
            </div>

          </form>
        </div>
      </div>
    </Container>
  );
}







// "use client";

// import { useState } from "react";
// import { redirect } from "next/navigation";
// import Cookie from "js-cookie";
// import Container from "@/components/container/Container";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const res = await fetch("/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username, password }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       console.log("data = ", data);
//       // localStorage.setItem("token", data.token); // ذخیره توکن لوکال
//       Cookie.set("token", data.token, { expires: data.expire });
//       redirect("/store");
//     }
//     if (res.status === 404) {
//       router.push(`/register?username=${username}`);
//       return;
//     } else {
//       console.log(data.message);
//     }
//   };

//   return (
//     <Container>
//       <div className="flex justify-center">
//         <form
//           onSubmit={handleLogin}
//           className="flex-col mt-8 text-center w-1/4 shadow-2xl p-4"
//           dir="rtl"
//         >
//           <input
//             placeholder="username"
//             value={username}
//             className="p-2 rounded bg-gray-100 w-full mb-4"
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <br />

//           <input
//             placeholder="password"
//             type="password"
//             value={password}
//             className="p-2 rounded bg-gray-100 w-full mb-4"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />

//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-green-600 text-white font-bold rounded hover:cursor-pointer"
//           >
//             ورود
//           </button>
//         </form>
//       </div>
//     </Container>
//   );
// }
