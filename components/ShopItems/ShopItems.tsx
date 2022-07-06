import { NextPage } from "next/types";
import { ShopItemsContainer } from "./styles";
import ShopItem from "./ShopItem";

const ShopItems: NextPage<any> = ({ shopItems }) => {
  return (
    <ShopItemsContainer>
      {shopItems.map((item: any, index: number) => (
        <ShopItem item={item} key={index} />
      ))}
    </ShopItemsContainer>
  );
};

export default ShopItems;
