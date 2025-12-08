// import ArrowDirection from '@/components/arrow-direction/ArrowDirection';

const ArrowButtom = ({ left = false}) => {
  return (
    <>
      <span className="w-[50px] h-[50px] bg-[blue] rounded-full absolute top-[50%] left-0 flex justify-center items-center">
        <div
          style={left ? { transform: `rotate(180deg)` } : {}}
          className="w-[15px] h-[15px] text-white border-t-4 border-r-4 rounded  rotate-45"
        ></div>{" "}
      </span>
    </>
  );
};

export default ArrowButtom;
