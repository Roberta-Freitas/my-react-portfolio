import Image from "next/legacy/image";
import pambagif from "../public/PambaW.gif";
import primadonnapt from "../public/PrimaDonnaNew.gif";
import alphababies from "../public/AlphaBabiesS.gif";
import dkeeper from "../public/Dkeeper.gif";
import weatherapp from "../public/WeatherApp.gif";
import teamapp from "../public/TeamApp.gif";
import chatapp from "../public/ChatApp.gif";
import gymapp from "../public/GymApp.gif";

function Projects() {
  return (
      <section id="projects">
        <div>
          <h2 className="mt-20 text-3xl py-1 inline border-b-4 border-teal-500 dark:text-white">Projects</h2>
        </div>
      {/* Card section starts here */}
      <div>

      {/* First Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-100">
          <Image src={gymapp} alt="Gym App" className="rounded-xl" />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Gym App Website</h2>
          <p className="py-2">
            This is a conceptual Typescript React Gym Application.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">React is used to create interactive interfaces that respond seamlessly to user interactions.</li>
              <li className="text-gray-800  py-1">TypeScript enhances the codebase, elevating quality, readability, and scalability.</li>
              <li className="text-gray-800  py-1">Tailwind CSS is responsible for crafting a visually contemporary design, ensuring a responsive user interface.</li>
            </ul>
            <a href="https://gym-typescript-13o.pages.dev/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mr-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
            <a href="https://github.com/Roberta-Freitas/gym-typescript" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Code
            </a>
        </div>

      {/* Second Card */}
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-100">
          <Image src={primadonnapt} alt="Prima Donna Extensões PT" className="rounded-xl mr-4" />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Shopify Store</h2>
          <p className="py-2">
            This is a Shopify store I designed for a Portuguese hair extensions brand.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">Customized Shopify themes to create unique and visually appealing online stores that align with the client&apos;s brand.</li>
              <li className="text-gray-800  py-1">Integrated third-party apps and tools to extend Shopify&apos;s capabilities, such as payment gateways and marketing automation tools.</li>
              <li className="text-gray-800 py-1">Created Shopify product catalogs, including product descriptions, images, and pricing information.</li>
            </ul>
            <a href="https://primadonna-extensoes.pt/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 mr-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
        </div>

      {/* Third Card */}
         <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-100">
          <Image src={alphababies} alt="Alpha Babies Store" className="rounded-xl" />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Shopify Store</h2>
          <p className="py-2">
           This is a Shopify store I crafted for a worldwide baby products brand.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">Customized Shopify themes to create unique and visually appealing online stores that align with the client&apos;s brand.</li>
              <li className="text-gray-800  py-1">Integrated third-party apps and tools to extend Shopify&apos;s capabilities, such as payment gateways and marketing automation tools.</li>
              <li className="text-gray-800 py-1">Created Shopify product catalogs, including product descriptions, images, and pricing information.</li>
            </ul>
            <a href="https://alphababiesstore.com/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
          </div>

      {/* Forth Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-100">
          <Image src={teamapp} alt="Team App" className="rounded-xl" />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Team App Website</h2>
          <p className="py-2">
            Complete website design and development for a conceptual team collaboration platform.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">Both the website and the blog were built using Webflow, renowned for its exceptional CMS capabilities for blog hosting.</li>
            </ul>
            <a href="https://team-app-2abd85.webflow.io/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
        </div>

      {/* Fifth Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-100">
          <Image src={chatapp} alt="Chat App" className="rounded-xl" />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Chat App Website</h2>
          <p className="py-2">
            This is the homepage design and build for a concept project - a chat application.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">I first designed the page in Figma and then developed a responsive website using Webflow.</li>
            </ul>
            <a href="https://roberta-freitas-chat-app.webflow.io/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
        </div>

      {/* Sixth Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100">
          <Image src={pambagif} alt="Pamba Project" className="rounded-xl" />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Pamba - Your home Away from Home</h2>
          <p className="py-2">
            As the final project of Le Wagon Web Development Bootcamp, 3 team mates and I built Pamba,</p>
          <p className="py-2">
            a Rails web-app that helps future Le Wagon students to find accommodation based on previous students reviews.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800 py-1">
                WebSocket used to implement the chat functionality, enabling instantaneous communication.
              </li>
              <li className="text-gray-800 py-1">
                Integrated the NS.nl API to empower users with real-time access to train schedules, routes, and travel times.
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

      {/* Seventh Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100">
          <Image src={dkeeper} alt="Dkeeper" className="rounded-xl" />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">DKeeper</h2>
          <p className="py-2">
           A blockchain web3 application built using DFINITY&apos;s Internet Computer, Motoko, and React. With Dkeeper, you can manage your notes through CRUD operations.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800 py-1">Built with React on the frontend and Motoko on the backend. Users can create, read, and delete notes. </li>
              <li className="text-gray-800 py-1">This Dapp ensures secure and decentralized storage of notes, utilizing Motoko and the Internet Computer (IC) database.</li>
              <li className="text-gray-800 py-1">Manages state using React hooks and communicates with the Motoko backend canister via the DFINITY Internet Computer platform. This architecture streamlines development and deployment.</li>
            </ul>
            <a href="https://dpb4u-2aaaa-aaaal-ac33a-cai.icp0.io/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 mr-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
            <a href="https://github.com/Roberta-Freitas/dkeeper" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Code
            </a>
        </div>

      {/* Eigth Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100">
          <Image src={weatherapp} alt="Weather App" className="rounded-xl" />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Weather App</h2>
          <p className="py-2">
            A weather app that retrieves and displays the current weather forecast by making an API call based on a user&apos;s input. It was built with Node.js and Express.js on the backend.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800 py-1">The app fetches weather data from OpenWeatherMap API via an HTTP GET request, then extracts and displays key information like temperature, weather description, and icons.</li>
              <li className="text-gray-800 py-1">It uses HTML, CSS, and the Tailwind CSS framework to create the layout that presents the weather details. </li>
              <li className="text-gray-800 py-1">It combines backend API integration, user input processing, and responsive design to deliver accurate weather forecasts to users based on their city selections.</li>
            </ul>
            <a href="https://weather-forecast-express-3f85034eada2.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 mr-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
            <a href="https://github.com/Roberta-Freitas/Weather-Forecast-Express" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Code
            </a>
        </div>

      </div>
      </section>

  );
}

export default Projects;
