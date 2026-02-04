import { BaseUrl } from "@/Global/BaseUrl";
const Usage = async ({ params,searchParams }) => {
  const { title } = await searchParams;
  console.log("title = ", title);
    const result = await fetch(
      `${BaseUrl}/products?_page=1&_per_page=10&usage=${title}`
    ,{cache : 'no-store'});
    const items = await result.json();
    console.log('DDDD = ',items)
  
  return (
    <div style={{ marginTop: "200px" }}>
      <h1>Usage</h1>
      <div>title = {title}</div>
    </div>
  );
};

export default Usage;
