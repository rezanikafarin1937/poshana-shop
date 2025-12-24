import HorizontalScroll from "@/components/horizontal-scroll/HorizontalScroll";
import PhtoFrame from '@/components/accessories/PhtoFrame';
import styles from "./accessories.module.scss";

const Accessories = () => {
  const data = [
    {title : "ساعت مچی", image : "/accessories/1.webp"},
    {title : "کروات", image : "/accessories/2.webp"},
    {title : "پاپیون", image : "/accessories/3.webp"},
    {title : "شال گردن", image : "/accessories/4.webp"},
    {title : "عطر و ادوکلن", image : "/accessories/10.webp"},
    {title : "کمربند", image : "/accessories/5.webp"},
    {title : "کلاه", image : "/accessories/6.webp"},
    {title : "کیف", image : "/accessories/7.webp"},
    {title : "کفش", image : "/accessories/8.webp"},
    {title : "جوراب", image : "/accessories/9.webp"},
  ];
  return (
    <>
      <HorizontalScroll>
        {data.map((d,index) => (
          <PhtoFrame key={index} title={d.title} image={d.image}/>
        ))}
      </HorizontalScroll>
    </>
  );
};

export default Accessories;
