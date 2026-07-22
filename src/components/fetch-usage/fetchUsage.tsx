import { BaseUrl } from "@/Global/BaseUrl";

export interface IUsagesProps {
  id: string;
  title: string;
  image: string;
}

export async function fetchUsage() {
  console.log("SSSSSSS = ",`${BaseUrl}/usage`)
  const response = await fetch(`${BaseUrl}/usage`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("خطا در بارگذاری داده‌ها");
  } else {
    const usages = await response.json();
    return usages.data;
  }
}
