
export default function UserIcon({
  width = "40px",
  height = "40px",
  color = "#000000",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60.671 50"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      aria-hidden="true"
    >
      <ellipse
        cx="30.336"
        cy="11"
        rx="10"
        ry="10.5"
      />

      <path
        d="M40 25H20C11.5 25 5 31 5 39V48H55V39C55 31 48.5 25 40 25Z"
      />
    </svg>
  );
}
