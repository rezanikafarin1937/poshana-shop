"use client";
import Container from "@/components/Container";

const Dashboard = () => {
  return (
    <Container>
      <div dir="rtl">
        <h1>داشبورد</h1>
        <div className="bg-sky-200 p-8 rounded mb-8">
            <input className="bg-gray-100 mr-8  px-8 py-2 rounded" type="text" name="title" placeholder="عنوان" />
            <input className="bg-gray-100 mr-8  px-8 py-2 rounded" type="text" name="price" placeholder="عنوان" />
            <input className="bg-gray-100 mr-8  px-8 py-2 rounded" type="text" name="image" placeholder="عنوان" />
        </div>
        <textarea className="bg-gray-100 p-8 mb-8" name="description" placeholder="توضیحات"></textarea>
        <br/>
      <button className="bg-sky-500 text-white px-8 py-2 rounded hover:cursor-pointer">ساخت محصول جدید</button>
      </div>
    </Container>
  );
};

export default Dashboard;
