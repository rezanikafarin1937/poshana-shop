"use client";
import Container from "@/components/container/Container";
import { useState } from "react";
import { getId } from "../../utils/GetLastItem";
import axios from "axios";
import UploadImage from "../../utils/upload-image/UploadImage";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  const pathName = usePathname();
  console.log("pathName = ", pathName);
  const [files, setFiles] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discount,setDiscount] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");

  const handleCreateProduct = async () => {
    const formData = new FormData();

    formData.append("id", getId().toString());
    formData.append("title", title);
    formData.append("price", price);
    formData.append("discount",discount)
    formData.append("description", desc);
    formData.append("cat", cat);

    const filesArray = Array.from(files); // convert files to array
    filesArray.forEach((file) => {
      formData.append("images", file);
    });

    const res = await axios.post("/api/upload", formData);

    console.log("UPLOAD RESULT", res.data);
  };

  const handleFilesFromChild = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    console.log("selectedFiles = ", selectedFiles);
  };

  return (
    <Container>
      <div dir="rtl" className={styles.dashboard}>
        <div className={styles.dashboard__box}>
          <input
            className={styles.dashboard__input}
            type="text"
            name="title"
            placeholder="عنوان"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input
            className={styles.dashboard__input}
            type="text"
            name="price"
            placeholder="قیمت"
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <input
            className={styles.dashboard__input}
            type="text"
            name="discount"
            placeholder="تخفیف"
            onChange={(e) => setDiscount(e.target.value)}
          />
          <br />
          <label htmlFor="category">دسته‌بندی:</label>
          <select
            name="cat"
            id="category"
            value={cat ?? ""}
            className={styles.dashboard__select}
            onChange={(e) => setCat(e.target.value)}
          >
            <option value="" disabled>
              انتخاب دسته‌بندی
            </option>
            <option value="0">زنانه</option>
            <option value="1">مردانه</option>
            <option value="2">بچگانه</option>
            <option value="3">دخترانه</option>
            <option value="4">پسرانه</option>
          </select>
          <br />
          <textarea
            className={styles.dashboard__textarea}
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
      </div>
    </Container>
  );
};

export default Dashboard;
