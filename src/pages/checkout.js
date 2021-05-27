import Image from "next/image";
import Header from "../components/Header";

function Checkout() {
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
            Your Shopping Basket
          </h1>
        </div>

        {/** RIGHT */}
        <div></div>
      </main>
    </div>
  );
}

export default Checkout;
