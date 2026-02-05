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
    handleRemoveProduct,
  } = useShoppingCartContext();
  return (
    <>
      <div className="w-[100%] max-[425px]:w-full flex justify-start gap-3.5 items-center  my-[1rem]">
        <button
          onClick={() => handleIncreseProductQty(parseInt(id))}
          className="bg-[var(--active-text)]  py-[.25rem] px-[.75rem]  rounded-[.5rem]  flex justify-between items-center"
        >
          <span className="text-amber-50 cursor-pointer">+</span>
        </button>
        <span className="w-[25px] h-full text-center flex justify-center items-center">{getProductQty(parseInt(id)).toLocaleString("fa")}</span>
        <button
          onClick={() => handleDecreaseProductQty(parseInt(id))}
          className="bg-[var(--active-text)]   py-[.25rem] px-[.75rem]  rounded-[.5rem]  flex justify-between items-center"
        >
          <span className="text-amber-50 cursor-pointer">-</span>
        </button>
        <button
          onClick={() => handleRemoveProduct(parseInt(id))}
          className="py-[.25rem] px-[.75rem]  rounded-[.5rem]  bg-[var(--active-text)] text-white hover:cursor-pointer"
        >    کنسل
        </button>
      </div>
    </>
  );
};

export default CartButton;
