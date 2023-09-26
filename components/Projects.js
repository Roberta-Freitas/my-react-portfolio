import Image from "next/legacy/image";
import pambagif from "../public/PambaW.gif";
import airbnbclone from "../public/AirbnbCloneNew.gif";
import primadonnapt from "../public/PrimaDonnaNew.gif";
import alphababies from "../public/AlphaBabiesS.gif";

function Projects() {
  return (
      <section id="projects">
        <div>
          <h2 className="mt-20 text-3xl py-1 inline border-b-4 border-teal-500 dark:text-white">Projects</h2>
        </div>
      {/* Card section starts here */}
      <div>
      {/* First Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100">
          <Image src={pambagif} alt="Pamba Project" className="rounded-xl" />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Pamba - Your home Away from Home</h2>
          <p className="py-2">
            As the final project of the Web Development Bootcamp,
            3 team mates and I built Pamba, a Rails web-app that helps future
            Le Wagon students to find accommodation based on previous students reviews.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800 py-1">
                WebSocket used to implement the chat functionality, enabling real-time communication;
              </li>
              <li className="text-gray-800 py-1">
                Integrated the NS.nl API to empower users with real-time access to train schedules, routes, and travel times;
              </li>
              <li className="text-gray-800 py-1">
                Mapbox and Geocoder were used to provide users with an interactive mapping feature.
              </li>
            </ul>
            <a href="http://www.pamba.me/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 mr-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
            <a href="https://github.com/codeWithFungai/Pamba" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Code
            </a>
        </div>

      {/* Second Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100">
          <Image src={airbnbclone} alt="Airbnb Clone Project" className="rounded-xl" />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Airbnb Clone</h2>
          <p className="py-2">
            3 team mates and I designed, implemented and shipped to production a clone of AirBnb.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800 py-1">Feature 1</li>
              <li className="text-gray-800 py-1">Feature 2</li>
              <li className="text-gray-800 py-1">Feature 3</li>
            </ul>
            <a href="https://airbnb-roberta-freitas.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 mr-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
            <a href="https://github.com/EvoRye/AirBNB-Clone" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Code
            </a>
        </div>

        {/* Third Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100">
          <Image src={airbnbclone} alt="Dkeeper" className="rounded-xl" />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">DKeeper</h2>
          <p className="py-2">
           A feature-rich blockchain web3 application built using DFINITY&apos;s Internet Computer, Motoko, and React. With Dkeeper, you can manage your notes through CRUD operations.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800 py-1">Feature 1</li>
              <li className="text-gray-800 py-1">Feature 2</li>
              <li className="text-gray-800 py-1">Feature 3</li>
            </ul>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 mr-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
            <a href="https://github.com/Roberta-Freitas/dkeeper" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Code
            </a>
        </div>

         {/* Forth Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100">
          <Image src={airbnbclone} alt="Weather App" className="rounded-xl" />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Weather App</h2>
          <p className="py-2">
            This project is a weather app that retrieves and displays the current weather forecast by making an API call based on a user&apos;s input.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800 py-1">Feature 1</li>
              <li className="text-gray-800 py-1">Feature 2</li>
              <li className="text-gray-800 py-1">Feature 3</li>
            </ul>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 mr-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
            <a href="https://github.com/Roberta-Freitas/Weather-Forecast-Express" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Code
            </a>
         </div>

         {/* Fifth Card */}
         <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-100">
            <Image src={primadonnapt} alt="Prima Donna Extensões PT" className="rounded-xl mr-4" />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Shopify Stores</h2>
          <p className="py-2">
            These are some Shopify stores I built.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">Customized Shopify themes to create unique and visually appealing online stores that align with the client&apos;s brand;</li>
              <li className="text-gray-800  py-1">Integrated third-party apps and tools to extend Shopify&apos;s capabilities, such as payment gateways and marketing automation tools;</li>
              <li className="text-gray-800 py-1">Created Shopify product catalogs, including product descriptions, images, and pricing information.</li>
            </ul>
            <a href="https://primadonna-extensoes.pt/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 mr-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
          </div>
           {/* Sixth Card */}
         <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-100">
          {/* <Image src={alphababies} alt="Prima Donna Extensões PT" className="rounded-xl" /> */}
          <Image src={alphababies} alt="Alpha Babies Store" className="rounded-xl" />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Shopify Stores</h2>
          <p className="py-2">
            These are some Shopify stores I built.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">Customized Shopify themes to create unique and visually appealing online stores that align with the client&apos;s brand;</li>
              <li className="text-gray-800  py-1">Integrated third-party apps and tools to extend Shopify&apos;s capabilities, such as payment gateways and marketing automation tools;</li>
              <li className="text-gray-800 py-1">Created Shopify product catalogs, including product descriptions, images, and pricing information.</li>
            </ul>
            <a href="https://alphababiesstore.com/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
          </div>
      </div>
      </section>

  );
}

export default Projects;
