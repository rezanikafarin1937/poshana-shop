import React from "react";
import Container from "@/components/Container";
import ProductItem from "@/components/ProductItem";
import Link from "next/link";

export interface IProductItemProps {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

async function Store() {
  const result = await fetch("http://localhost:8000/products");
  const items = await result.json();
  return (
    <Container>
      <h1>Store</h1>
      <div dir="rtl" className="grid grid-cols-4 gap-8">
        {items.map((item: IProductItemProps) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Store;
