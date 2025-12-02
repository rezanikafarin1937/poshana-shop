import { BaseUrl } from "@/Global/BaseUrl";

export interface IUsagesProps{
  id : string,
  title : string,
  image : string
}

export async function fetchUsage() {
  const response = await fetch(`${BaseUrl}/usage`);
  if (!response.ok) throw new Error("خطا در بارگذاری داده‌ها");
  return await response.json();
}
