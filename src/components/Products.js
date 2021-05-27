import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDespatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Products({ id, title, description, price, category, image }) {
  const dispatch = useDespatch();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  // const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      description,
      price,
      category,
      image,
    };

    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-black z-30 p-10">
      <p className="absolute top-2 right-2 text-xs text-yellow-300">
        {category}
      </p>

      <Image
        className=""
        src={image}
        height={200}
        width={200}
        objectFit="contain"
      />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2"> {description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="EUR" />
      </div>
      {/** 
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-300">FREE Next-day Delivery</p>
        </div>
      )}
      */}

      <button
        onClick={addItemToBasket}
        className="button mt-auto md:text-sm text-black"
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Products;
