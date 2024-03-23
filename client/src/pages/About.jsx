import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

export default function About() {
  return (
    <>
      <section className="overflow-hidden py-10 pb-2">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full pl-10 pr-10 lg:pl-20 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      // src="/Pritam.png"
                      src="https://res.cloudinary.com/pritam1622/image/upload/v1709987894/Pritam_1_afbpi4.jpg"
                      alt="Pritam"
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full pl-10 pr-10 lg:pr-0  lg:w-1/2 xl:w-5/12 py-5">
              <div className="mt-8 lg:mt-0">
                <span className="block mb-4 text-5xl font-bold">About Us</span>
                <p className="mb-5 text-base text-body-color dark:text-dark-6 text-justify font-medium">
                  Welcome to Magdum Blog, where words weave wonders and thoughts
                  take flight. Enter a realm where the ordinary finds its
                  extraordinary, and every post is a journey waiting to be
                  embarked upon. From exploring the uncharted territories of
                  technology to delving into the depths of the human spirit,
                  each piece is a testament to the boundless realms of human
                  creativity.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6 text-justify font-medium">
                  Join our vibrant community of thinkers, dreamers, and doers as
                  we navigate the ever-changing landscape of ideas and
                  inspiration. Here, curiosity is our compass, and each click
                  opens a door to a world of endless possibilities. Get ready to
                  be captivated, enlightened, and inspired. Welcome to Magdum
                  Blog, where the extraordinary awaits.{" "}
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6 text-justify font-medium">
                  Thank you for choosing Magdum Blog. We're excited to embark on
                  this journey with you.
                </p>
                <Link to="/">
                  <Button className="" gradientDuoTone="pinkToOrange">
                    Explore Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
