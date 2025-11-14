"use client";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

const CartButton = () => {
  const {cartItems} = useShoppingCartContext();
  return (
    <div className="w-1/7 flex justify-between items-center mt-6">
      <button className="bg-blue-400  py-2 px-4 rounded  flex justify-between items-center">
        <span className="font-bold text-2xl text-amber-50">+</span>
      </button>
      <span>3</span>
      <button className="bg-blue-400  py-2 px-4 rounded  flex justify-between items-center">
        <span className="font-bold text-2xl text-amber-50">-</span>
      </button>
    </div>
  );
};

export default CartButton;
