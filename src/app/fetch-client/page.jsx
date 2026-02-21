"use client";

import axios from "axios";
import { useEffect,useState } from "react";
import { BaseUrl } from "@/Global/BaseUrl";

// interface IProductItem{
//   id : string,
//   title : string,
//   price : number,
//   images : [],
//   description : string
// }

function fetchClient(){
  const [products, setProducts] = useState;

  useEffect(()=>{
    axios(`${BaseUrl}/products`).then(res => {
      setProducts(res.data)
      console.log(res)
    })
  },[])

  return <div className="flex flex-row">
    <h1 className="font-bold text-3xl">fetch client</h1>
    {products.map((p,index) => (
      <div key={index}  className="m-2 border">
        <p>{p.title}</p>
        <p>{p.price}</p>
        <p>{p.id}</p>
        <p>{p.description}</p>
        <div className="w-[200px] h-[200px]">
           <img className="w-full h-full object-cover" src={`/uploads/${p.images[0]}`}  alt="" />
        </div>
      </div>
    ))}
  </div>;
};

export default fetchClient;
