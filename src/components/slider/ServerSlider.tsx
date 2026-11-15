
import { readFile } from "fs/promises";
import path from "path";
import SwiperSlider from "@/components/slider/swiper-slider/SwiperSlider";

interface Product {
  id: number | string;
  discount?: number | string;
  [key: string]: any;
}

interface ServerSliderProps {
  borderColor?: string | null;
  search?: string | null;
}

async function ServerSlider({
  borderColor = null,
  search = null,
}: ServerSliderProps) {
  let data: Product[] = [];

  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "database",
      "products.json"
    );

    const jsonData = await readFile(filePath, "utf-8");
    const result = JSON.parse(jsonData);

    const products: Product[] = result.products || result;

    if (search === "discount") {
      data = products.filter(
        (item) => Number(item.discount) > 0
      );
    } else if (search === "new") {
      data = products.filter(
        (item) => Number(item.id) > 160
      );
    } else {
      data = products.filter(
        (item) => Number(item.id) <= 160
      );
    }
  } catch (error) {
    console.error("خطا در خواندن محصولات اسلایدر:", error);
  }

  return data.length > 0 ? (
    <SwiperSlider data={data} />
  ) : null;
}

export default ServerSlider;
