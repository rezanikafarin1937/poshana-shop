"use client";
import Container from "@/components/Container";
import axios from "axios";
import { redirect } from "next/navigation";
import  Cookie  from "js-cookie";
import { useState } from "react";
function login() {
  const [userName, setUserName] = useState("");
  const [password,setPassword] = useState("");
  const handleLogin = () => {
    // axios("http://localhost:8000/products",{
    //     method : "POST",
    //     url : "/login",
    //     data : {
    //         username : userName,
    //         password : password,
    //     }
    // })

    const response = {
        token : 'aaabbbcccddd',
        expire : 7
    }

    Cookie.set("token",response.token,{expires : response.expire});
    redirect("/dashboard");
  }
  return (
    <Container>
      <div className="flex justify-center mt-8 text-center w-full" dir="rtl">
        <div className="p-8 bg-sky-200 rounded w-1/4">
          <p className="font-bold">لاگین</p>
          <input
            placeholder="نام کاربری"
            className="p-2 rounded bg-gray-100 w-full mb-4"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            placeholder="رمز عبور"
            className="p-2 rounded bg-gray-100 w-full mb-4"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} className="w-full px-4 py-2 bg-green-600 text-white font-bold rounded hover:cursor-pointer">
            ورود
          </button>
        </div>
      </div>
    </Container>
  );
}

export default login;
