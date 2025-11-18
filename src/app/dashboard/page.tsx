"use client";
import Container from "@/components/Container";
import { ChangeEvent, useState } from "react";
import { getId } from "../../utils/GetLastItem";
import axios from "axios";

const Dashboard = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });
  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };
  const handleCreateProduct = () => {
    axios({
      method: "POST",
      url: "http://localhost:8000/products",
      data: {
        id: getId().toString(),
        title: newProduct.title,
        price: newProduct.price,
        image: newProduct.image,
        description: newProduct.description,
      },
    });
  };
  return (
    <Container>
      <div dir="rtl">
        <h1>داشبورد</h1>
        <div className="bg-sky-200 p-8 rounded mb-8">
          <input
            className="bg-gray-100 mr-8  px-8 py-2 rounded"
            type="text"
            name="title"
            placeholder="عنوان"
            onChange={handleChangeProduct}
          />
          <input
            className="bg-gray-100 mr-8  px-8 py-2 rounded"
            type="text"
            name="price"
            placeholder="قیمت"
            onChange={handleChangeProduct}
          />
          <input
            className="bg-gray-100 mr-8  px-8 py-2 rounded"
            type="text"
            name="image"
            placeholder="عکس"
            onChange={handleChangeProduct}
          />
        </div>
        <textarea
          className="bg-gray-100 p-8 mb-8"
          name="description"
          placeholder="توضیحات"
          onChange={handleChangeProduct}
        ></textarea>
        <br />
        <button
          onClick={handleCreateProduct}
          className="bg-sky-500 text-white px-8 py-2 rounded hover:cursor-pointer"
        >
          ساخت محصول جدید
        </button>
      </div>
    </Container>
  );
};

export default Dashboard;
