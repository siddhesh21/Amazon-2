import { useSession } from "next-auth/client";
import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems } from "../slices/basketSlice";

function Checkout() {
  const items = useSelector(selectItems);
  const [session] = useSession();
  return (
    <div className="">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/** LEFT */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
        </div>

        <div className="flex flex-col p-5 space-y-10">
          <h1 className="text-3xl border-gray-500 pb-4">
            {items.length === 0
              ? "Your Amazon Basket is empty."
              : "Shopping Basket"}
          </h1>

          {items.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              category={item.category}
              image={item.image}
            />
          ))}
        </div>

        {/** RIGHT */}
        <div>
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :
                <span className="font-bold">
                  <Currency quantity={total} currency="EUR" />
                </span>
              </h2>

              <button
                className={`button mt-2 ${
                  !session &&
                  "from-yellow-300 to-yellow-500 border-yellow-200 text-black cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to Checkout" : "Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
