import { useSession } from "next-auth/client";
import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // Call the Backend to create a CHECKOUT Session...
    const checkoutSession = await await axios.post(
      "/api/create-checkout-session",
      {
        items: items,
        email: session.user.email,
      }
    );

    // Redirect Customer to STRIPE CHECKOUT
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };

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
              rating={item.rating}
              description={item.description}
              price={item.price}
              category={item.category}
              image={item.image}
            />
          ))}
        </div>

        {/** RIGHT */}
        <div className="flex flex-col p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :
                <span className="font-bold">
                  <Currency quantity={total} currency="EUR" />
                </span>
              </h2>

              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
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
