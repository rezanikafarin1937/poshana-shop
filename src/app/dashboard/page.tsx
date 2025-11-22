"use client";
import Container from "@/components/Container";
import { ChangeEvent, ReactNode, useState } from "react";
import { getId } from "../../utils/GetLastItem";
import axios from "axios";
import UploadImage from "../../utils/upload-image/UploadImage";
const Dashboard = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  //   const [newProduct, setNewProduct] = useState({
  //     title: "",
  //     price: "",
  //     description: "",
  //   });

  //   const handleChangeProduct = (
  //     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     const { name, value } = e.target;
  //     setNewProduct({
  //       ...newProduct,
  //       [name]: value,
  //     });

  //   };
//   const handleCreateProduct = () => {
//     axios({
//       method: "POST",
//       url: "http://localhost:8000/products",
//       data: {
//         id: getId().toString(),
//         title: newProduct.title,
//         price: newProduct.price,
//         image: newProduct.image,
//         description: newProduct.description,
//       },
//     });
//   };

  const handleCreateProduct = async () => {
    const formData = new FormData();
    formData.append("id",getId().toString());
    formData.append("title", title);
    formData.append("price", price);
    formData.append("description", desc);
    console.log('My Files = ',files);
    // files.map((file) => {
    //   formData.append("images", file);
    // });

    for(const file in files){
        formData.append("images", file);
    }

    console.log('formData = ',formData);

    // await fetch("/api/products", {
    //   method: "POST",
    //   body: formData,
    // });

    axios({
        method : "POST",
        data : formData,
        url : 'http://localhost:8000/products',
    })
  };

  const handleFilesFromChild = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    console.log("selectedFiles = ", selectedFiles);
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
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="bg-gray-100 mr-8  px-8 py-2 rounded"
            type="text"
            name="price"
            placeholder="قیمت"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <textarea
          className="bg-gray-100 p-8 mb-8"
          name="description"
          placeholder="توضیحات"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <br />
        <UploadImage dir="rtl" onFilesChange={handleFilesFromChild} />
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
