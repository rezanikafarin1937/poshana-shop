"use client";
import Container from "@/components/container/Container";
import { useState, useEffect } from "react";
import { getId } from "../../utils/GetLastItem";
import axios from "axios";
import UploadImage from "../../utils/upload-image/UploadImage";
import { usePathname } from "next/navigation";
import { BaseUrl } from "@/Global/BaseUrl";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  const pathName = usePathname();
  console.log("pathName = ", pathName);
  const [files, setFiles] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState(0);
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");
  const [usages, setUsages] = useState<string[]>([]);
  const [selectedUsage, setSelectedUsage] = useState("");
  const [model, setModel] = useState("");
  const [colors, setColors] = useState("");
  const [size, setSize] = useState("");
  const [material,setMaterial] = useState("");
  function getUsage() {
    axios.get(`${BaseUrl}/usage`).then((res) => {
      setUsages(() => res.data);
      console.log("UUUUUUsage:", res.data);
    });
  }

  useEffect(() => {
    getUsage();
  }, []);

  const handleCreateProduct = async () => {
    // const resultColors = colors.split("-").join(",");
    const formData = new FormData();
    formData.append("id", getId().toString());
    formData.append("title", title);
    formData.append("price", price);
    formData.append("discount", Number(discount));
    formData.append("description", desc);
    formData.append("cat", cat);
    formData.append("usage", selectedUsage);
    formData.append("model", model);
    formData.append("material",material);
    formData.append("size", size);
    formData.append("colors", colors);

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
          <input
            className={styles.dashboard__input}
            type="text"
            name="model"
            placeholder="مدل"
            onChange={(e) => setModel(e.target.value)}
          />
          <br />
          <input
            className={styles.dashboard__input}
            type="text"
            name="material"
            placeholder="جنس"
            onChange={(e) => setMaterial(e.target.value)}
          />
          <br />
          <input
            className={styles.dashboard__input}
            type="text"
            name="size"
            placeholder="سایز"
            onChange={(e) => setSize(e.target.value)}
          />
          <br />
          <input
            className={styles.dashboard__input}
            type="text"
            name="colors"
            placeholder="رنگها"
            onChange={(e) => setColors(e.target.value)}
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
            <option value="زنانه">زنانه</option>
            <option value="مردانه">مردانه</option>
            <option value="بچگانه">بچگانه</option>
            <option value="دخترانه">دخترانه</option>
            <option value="پسرانه">پسرانه</option>
          </select>
          <br />
          <select
            name="usage"
            id="usage"
            value={selectedUsage}
            className={styles.dashboard__select}
            onChange={(e) => setSelectedUsage(e.target.value)}
          >
            <option value="" disabled>
              استفاده برای{" "}
            </option>
            {usages.map((usage, index) => (
              <option key={index} value={usage.title}>
                {usage.title}
              </option>
            ))}
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
