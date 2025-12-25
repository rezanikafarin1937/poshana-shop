const ArrowButtom = ({ left = false }) => {
  return (
    <>
      <div style={{boxShadow : '1px 1px 5px 5px #999'}} className="z-100 max-[426px]:hidden absolute top-[50%] left-0  bg-[var(--bg-communication)]  rounded-full">
        <div className="w-[45px] h-[45px] bg-[#eee] rounded-full  flex justify-center items-center">
          <div
            style={left ? { transform: `rotate(180deg)`, left: `2px` } : {}}
            className="w-[15px] h-[15px] text-[--global-text] border-t-4 border-r-4 border-[#999] rounded  rotate-45 relative right-[3px]"
          ></div>
        </div>
      </div>
    </>
  );
};

export default ArrowButtom;
