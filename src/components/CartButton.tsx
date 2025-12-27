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
      <div className="w-[120px] flex justify-between items-center">
        <button
          onClick={() => handleIncreseProductQty(parseInt(id))}
          className="bg-[var(--active-text)]  py-[.25rem] px-[.75rem]  rounded-[.5rem]  flex justify-between items-center"
        >
          <span className="text-amber-50">+</span>
        </button>
        <span>{getProductQty(parseInt(id)).toLocaleString('fa')}</span>
        <button
          onClick={() => handleDecreaseProductQty(parseInt(id))}
          className="bg-[var(--active-text)]   py-[.25rem] px-[.75rem]  rounded-[.5rem]  flex justify-between items-center"
        >
          <span className="text-amber-50">-</span>
        </button>
      </div>
      {/* <button onClick={() => handleRemoveProduct(parseInt(id))} className="px-8 py-2 bg-red-500 text-white mt-4 font-bold rounded-xl hover:cursor-pointer">حذف از سبد</button> */}
    </div>
  );
};

export default CartButton;
