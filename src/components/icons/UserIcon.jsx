// import "./icons.scss";
const UserIcon = ({ width = "24px", height = "24px", color = "#fff" }) => {
  return (
    <span className="flex justify-between items-center">
      <svg
        width={width}
        height={height}
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M5 20V19C5 16.2386 7.23858 14 10 14H14C16.7614 14 19 16.2386 19 19V20M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};
export default UserIcon;
