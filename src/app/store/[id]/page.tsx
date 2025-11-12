import React from "react";
import Container from "@/components/Container";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

interface IGetProduct {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

async function page({ params }: ProductPageProps) {
  const { id } = await params;
  const result = await fetch(`http://localhost:8000/products/${id}`);
  const product = (await result.json()) as IGetProduct;
  return (
    <Container>
      <div dir="rtl">
        <h1>Product {id}</h1>
        <h2>{product.title}</h2>
        <img src={product.image} />
        <div>قیمت : {product.price}</div>
        <h3>توضیحات</h3>
        <p>{product.description}</p>
      </div>
    </Container>
  );
}

export default page;
