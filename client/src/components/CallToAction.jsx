import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-gray-300 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center ">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl font-medium">
          Want to learn More about JavaScript?
        </h2>
        <p className=" py-2">
          Join Magdum Class for gain practical knowledge about JavaScript
        </p>
        <Button
          target="_blank"
          href="https://www.coursera.org"
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl  "
        >
          <a
            href="https://www.coursera.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Now
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://blog.talent500.co/wp-content/uploads/2023/01/Skills-you-need-to-get-a-job-as-a-JavaScript-developer-1.png"
          alt="JavaScript"
        />
      </div>
    </div>
  );
}
