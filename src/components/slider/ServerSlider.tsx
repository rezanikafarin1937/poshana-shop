import { BaseUrl } from "@/Global/BaseUrl";
import SwiperSlider from "@/components/slider/swiper-slider/SwiperSlider";

async function ServerSlider({
  borderColor = null,
  search = null,
}: {
  borderColor: string | null;
  search: string | null;
}) {
  // let response = null;
  // if (search == "discount") {
  //   response = fetch(`${BaseUrl}/discount`);
  //   let dd =  (await response).json();
  //   console.log("is discount and dd = ",dd)
  // } else {
  //   let url = `${BaseUrl}/discount`;
  //   if (search) {
  //     url = url + search;
  //   }
  //   response = await fetch(url);
  //   console.log('response = ', response);
  // }
  let data = null;
  if (search === "discount") {
    const response = await fetch(`${BaseUrl}/discount`);
    data = await response.json();
    console.log("Data is = ", data);
  }
  else if(search === 'new'){
    const response = await fetch(`${BaseUrl}/new`);
    data = await response.json();
    console.log("Data is = ", data);

  }
  else {
    const response = await fetch(`${BaseUrl}/old`);
    data = await response.json();
    console.log("Data is = ", data);

  }
  return ( 
    <>
     {data ? <SwiperSlider data={data} /> : "" }
    </>
  );
}

export default ServerSlider;
