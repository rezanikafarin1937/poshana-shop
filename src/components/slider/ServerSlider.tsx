import { BaseUrl } from "@/Global/BaseUrl";
import SwiperSlider from '@/components/slider/swiper-slider/SwiperSlider';


async function ServerSlider({
  borderColor = null,
  search = null,
}: {
  borderColor: string | null;
  search: string | null;
}) {
  let url = `${BaseUrl}/products`;
  if (search) {
    url = url + search;
  }
  const response = await fetch(url);
  const data = await response.json();
  return (
    <>
      <SwiperSlider data={data}/>
    </>
  );
}

export default ServerSlider;