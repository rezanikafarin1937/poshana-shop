"use client";
import { createContext, useContext, useState } from "react";

type ShoppingCartContextProviderProps = {
  children: React.ReactNode;
};

type CartItems = {
  id: number;
  qty: number;
};

type TShoppingCartContext = {
  cartItems: CartItems[];
  handleIncreseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  cartTotalQty: number;
  handleDecreaseProductQty: (id: number) => void;
  handleRemoveProduct: (id: number) => void;
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  // const handleIncreseProductQty = (id : number) => {
  //     setCartItems(currentItems  => {
  //         const isNotProductExist = currentItems.find(item => item.id == id) == null;

  //         if(isNotProductExist){
  //             return [...currentItems,{id : id,qty : 1}]
  //         }
  //         else{
  //            return currentItems.map(item => {
  //                 if(item.id == id) {
  //                     return {...item , qty : item.qty + 1};
  //                 }
  //                 else{
  //                     return item;
  //                 }
  //             })
  //         }
  //     })
  // }

  // const handleDecreaseProductQty = (id : number) => {
  //   setCartItems(currentItems => {
  //     const isLastOne = currentItems.find(item => item.id == id)?.qty == 1;
  //     if(isLastOne){
  //       return currentItems.filter(item => item.id != id);
  //     }
  //     else {
  //       return currentItems.map(item =>{
  //         if(item.id == id){
  //           return {...item,qty : item.qty - 1}
  //         }
  //         else{
  //           return item
  //         }
  //       })
  //     }
  //   })
  // }

  // کدهای زیر بهینه تر هست چون یک بار روی آرایه مپ زده میشه
  const handleIncreseProductQty = (id: number) => {
    setCartItems((items) => {
      let found = false;

      const updated = items.map((item) => {
        if (item.id === id) {
          found = true;
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });

      // اگر محصول پیدا نشد، اضافه کن
      if (!found) {
        return [...updated, { id, qty: 1 }];
      }

      return updated;
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((items) => {
      const updated: CartItems[] = [];

      for (const item of items) {
        if (item.id === id) {
          // اگر مقدار 1 بود → حذف شود (اضافه نمی‌کنیم)
          if (item.qty === 1) continue;

          // در غیر این صورت مقدار کم می‌شود
          updated.push({ ...item, qty: item.qty - 1 });
        } else {
          // بقیه آیتم‌ها بدون تغییر فقط اضافه می‌شوند
          updated.push(item);
        }
      }

      return updated;
    });
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id != id);
    });
  };

  const cartTotalQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0);

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreseProductQty,
        getProductQty,
        cartTotalQty,
        handleDecreaseProductQty,
        handleRemoveProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
