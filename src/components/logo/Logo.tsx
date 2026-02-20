import './logostyle.scss';
const Logo = () => {
  return (
    <h2 className="parent">
      <img
        src="./logo/logo.jpg"
        alt="فروشگاه لباس و کفش"
        className="w-full h-full object-cover"
      />
     {/* <h1 className="font-bold text-xl text-[var(--active-text)]">پوشانا</h1> */}
    </h2>
  );
};

export default Logo;
