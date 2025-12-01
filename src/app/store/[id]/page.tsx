import React from "react";
import Container from "@/components/container/Container";
import CartButton from "@/components/CartButton";
import { BaseUrl } from "@/Global/BaseUrl";

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
  const result = await fetch(`${BaseUrl}/products/${id}`);
  const product = (await result.json()) as IGetProduct;
  return (
    <Container>
      <div dir="rtl">
        <h1>Product {id}</h1>
        <h2>{product.title}</h2>
        <div className="w-60 h-60 bg-gray-200 shadow-md">
          <img src={product.image} className="w-full h-full object-cover" />
        </div>
        <div className="font-bold text-xl">
          قیمت : {product.price.toLocaleString("fa")}
        </div>
        <CartButton id={id} />
        <h3>توضیحات</h3>
        <p>{product.description}</p>
      </div>
    </Container>
  );
}

export default page;
