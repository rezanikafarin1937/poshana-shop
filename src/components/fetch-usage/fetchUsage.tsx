import { BaseUrl } from "@/Global/BaseUrl";

export interface IUsagesProps{
  id : string,
  title : string,
  image : string
}

export async function fetchUsage() {
  console.log("BaseUrl of fetchUsage = ",BaseUrl);
  const response = await fetch(`${BaseUrl}/usage`,{cache : 'no-store'});
  console.log('response = ',response);
  if (!response.ok) throw new Error("خطا در بارگذاری داده‌ها");
  return await response.json();
}
