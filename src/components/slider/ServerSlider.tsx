import { BaseUrl } from "@/Global/BaseUrl";
import Slider from "./Slider";
import ItemCard, { IProductItemProps } from "../item-card/ItemCard";
import LinkWrapper from "../link-wrapper/LinkWrapper";
async function ServerSlider() {
  const response = await fetch(`${BaseUrl}/products`);
  const data = await response.json();
  console.log("Data ServerSlider = ", data);
  return (
    <>
      <Slider>
        {data.map((d : IProductItemProps) => (
            <LinkWrapper key={d.id} href={`/store/${d.id}`}>
                <ItemCard {...d} width="250px" height="100%" />
            </LinkWrapper>
        ))}
      </Slider>
    </>
  );
}

export default ServerSlider;


