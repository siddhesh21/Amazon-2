import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className="relative">
      <div
        className="absolute w-full h-44 bg-gradient-to-t
      from-black to-transparent bottom-0 z-20"
      />
      <Carousel
        autoplay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
        </div>

        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
//  https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1315&q=80
//  https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1315&q=80
//  https://images.unsplash.com/photo-1595943623251-cb926c618a4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80
