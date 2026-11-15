
import { readFile } from "fs/promises";
import path from "path";

export interface IUsagesProps {
  id: string;
  title: string;
  image: string;
}

export async function fetchUsage(): Promise<IUsagesProps[]> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "database",
    "usage.json"
  );

  const file = await readFile(filePath, "utf8");

  const result = JSON.parse(file);

  return result.usage || result;
}








// import { BASE_PATH } from "@/lib/products";

// // داخل تابع:
// export interface IUsagesProps {
//   id: string;
//   title: string;
//   image: string;
// }

// export async function fetchUsage(): Promise<IUsagesProps[]> {
//   // const response = await fetch("/database/usage.json");
//   const response = await fetch(`${BASE_PATH}/database/usage.json`);


//   if (!response.ok) {
//     throw new Error("خطا در بارگذاری داده‌ها");
//   }

//   const result = await response.json();

//   return result.usage || result;
// }












// // import { BaseUrl } from "@/Global/BaseUrl";

// // export interface IUsagesProps {
// //   id: string;
// //   title: string;
// //   image: string;
// // }

// // export async function fetchUsage() {
// //   console.log("SSSSSSS = ",`${BaseUrl}/usage`)
// //   const response = await fetch(`${BaseUrl}/usage`, { cache: "no-store" });
// //   if (!response.ok) {
// //     throw new Error("خطا در بارگذاری داده‌ها");
// //   } else {
// //     const usages = await response.json();
// //     return usages.data;
// //   }
// // }
