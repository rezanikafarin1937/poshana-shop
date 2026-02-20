import { BaseUrl } from "@/Global/BaseUrl";
import SwiperSlider from "@/components/slider/swiper-slider/SwiperSlider";

async function ServerSlider({
  borderColor = null,
  search = null,
}: {
  borderColor: string | null;
  search: string | null;
}) {
  let data = null;
  if (search === "discount") {
    const response = await fetch(`${BaseUrl}/discount`,{cache : 'no-cache'});
    data = await response.json();
  }
  else if(search === 'new'){
    const response = await fetch(`${BaseUrl}/new`,{cache : 'no-cache'});
    data = await response.json();

  }
  else {
    const response = await fetch(`${BaseUrl}/old`,{cache : 'no-cache'});
    data = await response.json();

  }
  return ( 
    <>
     {data ? <SwiperSlider data={data} /> : "" }
    </>
  );
}

export default ServerSlider;
