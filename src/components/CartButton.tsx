"use client";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

interface ICartButtonProps {
  id: string;
}

const CartButton = ({ id }: ICartButtonProps) => {
  const {
    cartItems,
    handleIncreseProductQty,
    getProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct
  } = useShoppingCartContext();
  console.log("cartItems = ", cartItems);
  return (
    <div>
      <div className="w-1/7 flex justify-between items-center mt-6">
        <button
          onClick={() => handleIncreseProductQty(parseInt(id))}
          className="bg-blue-400  py-2 px-4 rounded  flex justify-between items-center"
        >
          <span className="font-bold text-2xl text-amber-50">+</span>
        </button>
        <span>{getProductQty(parseInt(id))}</span>
        <button
          onClick={() => handleDecreaseProductQty(parseInt(id))}
          className="bg-blue-400  py-2 px-4 rounded  flex justify-between items-center"
        >
          <span className="font-bold text-2xl text-amber-50">-</span>
        </button>
      </div>
      <button onClick={() => handleRemoveProduct(parseInt(id))} className="px-8 py-2 bg-red-500 text-white mt-4 font-bold rounded-xl hover:cursor-pointer">حذف از سبد</button>
    </div>
  );
};

export default CartButton;
