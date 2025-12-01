"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import Cookie from "js-cookie";
import Container from "@/components/container/Container";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("data = ", data);
      // // //localStorage.setItem("token", data.token); // ذخیره توکن لوکال
      Cookie.set("token", data.token, { expires: data.expire });
      redirect("/dashboard");
    } else {
      console.log(data.message);
    }
  };

  return (
    <Container>
      <div className="flex justify-center">
        <form
          onSubmit={handleLogin}
          className="flex-col mt-8 text-center w-1/4 shadow-2xl p-4"
          dir="rtl"
        >
          <input
            placeholder="username"
            value={username}
            className="p-2 rounded bg-gray-100 w-full mb-4"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />

          <input
            placeholder="password"
            type="password"
            value={password}
            className="p-2 rounded bg-gray-100 w-full mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-600 text-white font-bold rounded hover:cursor-pointer"
          >
            ورود
          </button>
        </form>
      </div>
    </Container>
  );
}
