"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Container from "@/components/container/Container";

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // گرفتن username از query string
  useEffect(() => {
    const queryUsername = searchParams.get("username");
    if (queryUsername) {
      setUsername(queryUsername);
    }
  }, [searchParams]);

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage("ثبت‌نام با موفقیت انجام شد ✅");
      setTimeout(() => {
        router.push("/store");
      }, 1500);
    } else {
      setMessage(data.message);
    }
  };

  return (
    <Container>
      <div className="flex justify-center">
        <form
          onSubmit={handleRegister}
          className="flex-col mt-8 text-center w-1/4 shadow-2xl p-4"
          dir="rtl"
        >
          <h2 className="mb-4 font-bold text-lg">ثبت نام</h2>

          <input
            placeholder="username"
            value={username}
            className="p-2 rounded bg-gray-100 w-full mb-4"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            placeholder="password"
            type="password"
            value={password}
            className="p-2 rounded bg-gray-100 w-full mb-4"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded hover:cursor-pointer"
          >
            ثبت نام
          </button>

          {message && (
            <p className="mt-4 text-sm text-red-500">{message}</p>
          )}
        </form>
      </div>
    </Container>
  );
}
