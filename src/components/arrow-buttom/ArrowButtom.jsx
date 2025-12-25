const ArrowButtom = ({ left = false }) => {
  return (
    <>
      <div style={{boxShadow : '1px 1px 5px 5px #999'}} className="z-100 max-[426px]:hidden absolute top-[50%] left-0  bg-[var(--bg-communication)]  rounded-full">
        <div className="w-[40px] h-[40px] bg-[#fff] rounded-full  flex justify-center items-center">
          <div
            style={left ? { transform: `rotate(180deg)`, left: `2px` } : {}}
            className="w-[12px] h-[12px] text-[--global-text] border-t-3 border-r-3 border-[#999] rounded  rotate-45 relative right-[3px]"
          ></div>
        </div>
      </div>
    </>
  );
};

export default ArrowButtom;
