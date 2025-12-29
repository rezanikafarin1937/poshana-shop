import { BaseUrl } from "@/Global/BaseUrl";
import Slider from "./Slider";
import ItemCard, { IProductItemProps } from "../item-card/ItemCard";
import LinkWrapper from "../link-wrapper/LinkWrapper";
async function ServerSlider({borderColor = null,search = null} : {borderColor : string | null,search : string | null}) {
  let url = `${BaseUrl}/products`;
  if(search){
    url = url + search;
  }
  console.log("URL = ",url)
  const response = await fetch(url);
  const data = await response.json();
  console.log("Data ServerSlider = ", data);
  return (
    <>
      <Slider>
        {data.map((d : IProductItemProps) => (
            <LinkWrapper key={d.id} href={`/store/${d.id}`}>
                <ItemCard borderColor={borderColor} {...d} width="250px" height="100%" />
            </LinkWrapper>
        ))}
      </Slider>
    </>
  );
}

export default ServerSlider;


