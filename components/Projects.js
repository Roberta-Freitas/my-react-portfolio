import Image from "next/legacy/image";
import pambagif from "../public/PambaW.gif";
import primadonnapt from "../public/PrimaDonnaNew.gif";
import alphababies from "../public/Alpha-Babies.gif";
import dkeeper from "../public/Dkeeper.gif";
import weatherapp from "../public/WeatherApp.gif";
import teamapp from "../public/TeamApp.gif";
import chatapp from "../public/ChatApp.gif";
import gymapp from "../public/GymApp.gif";
import beautystudio from "../public/BeautyStudio.gif";

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
          <Image src={teamapp} alt="Team App" className="rounded-xl" unoptimized />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Team App - Webflow Website</h2>
          <p className="py-2">
            Complete website design in Figma and development using Webflow for a conceptual team collaboration platform.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">Implemented Webflow&apos;s CMS for managing the dinamic content of the blog posts, ensuring easy updates and scalability.</li>
            </ul>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">Responsive Design providing a seamless user experience across all platforms.</li>
            </ul>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">Hover effects, animations, and transitions to enhance user engagement and create a dynamic browsing experience.</li>
            </ul>
            <a href="https://team-app-2abd85.webflow.io/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
        </div>

      {/* Second Card */}
      <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-100">
          <Image src={beautystudio} alt="HA Beauty Studio" className="rounded-xl" unoptimized />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">HA Beauty Studio - Webflow Website</h2>
          <p className="py-2">
            Website designed in Figma and developed using Webflow, showcasing the services and ethos of HA Beauty Studio located in Portugal.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">Responsive Design ensuring the website is fully optimized for desktops, tablets, and mobile devices.</li>
            </ul>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">SEO Optimization, including proper use of meta tags, alt text for images to improve search engine visibility and drive organic traffic to the site.</li>
            </ul>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">Google Maps API Integration to display an interactive map on the website, allowing users to easily locate the studio and navigate to the premises.</li>
            </ul>
            <a href="https://www.habeautystudio.com/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
        </div>

      {/* Third Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-100">
          <Image src={chatapp} alt="Chat App" className="rounded-xl" unoptimized />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Chat App - Webflow Website</h2>
          <p className="py-2">
            This is the homepage design and build for a concept project - a chat application.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">I first designed the page in Figma and then developed a responsive website using Webflow.</li>
            </ul>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">Utilized Webflow&apos;s responsive design tools to create a fluid layout that adapts to different screen sizes.</li>
            </ul>
            <a href="https://roberta-freitas-chat-app.webflow.io/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
        </div>

      {/* Fourth Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-100">
          <Image src={gymapp} alt="Gym App" className="rounded-xl" unoptimized />
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

      {/* Fifth Card */}
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-100">
          <Image src={primadonnapt} alt="Prima Donna Extensões PT" className="rounded-xl mr-4" unoptimized />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Shopify Store</h2>
          <p className="py-2">
            This is a Shopify store I designed for a Portuguese hair extensions brand.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">Customized Shopify themes to create unique and visually appealing online stores that align with the client&apos;s brand.</li>
              <li className="text-gray-800  py-1">Integrated third-party apps and tools to extend Shopify&apos;s capabilities, such as payment gateways and marketing automation tools.</li>
              <li className="text-gray-800 py-1">Utilized the Translate and Adapt app to translate the store from Portuguese to English, expanding its market reach to a broader, international audience.</li>
            </ul>
            <a href="https://primadonna-extensoes.pt/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 mr-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
        </div>

      {/* Sixth Card */}
         <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-100">
          <Image src={alphababies} alt="Alpha Babies Store" className="rounded-xl" unoptimized />
          <h2 className=" text-lg font-medium pt-8 pb-2  text-teal-600">Shopify Store</h2>
          <p className="py-2">
           This is a Shopify store I crafted for a worldwide baby products brand.
          </p>
          <h3 className="py-4 text-teal-600 text-lg">Main features:</h3>
            <ul className="list-disc list-inside ml-0">
              <li className="text-gray-800  py-1">Successfully transitioned the store from an outdated theme to a modern, more functional one, ensuring a seamless upgrade without loss of any custom-coded features.</li>
              <li className="text-gray-800  py-1">Developed a scrolling text banner with an intuitive pause-on-hover feature, without the need for additional apps and enhancing the storefront&apos;s visual appeal.</li>
              <li className="text-gray-800 py-1">Executed extensive customization of the new theme, tailoring it to meet the store&apos;s specific needs while maintaining its original functionality and aesthetics.</li>
            </ul>
            <a href="https://alphababiesstore.com/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
          </div>

      {/* Seventh Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100">
          <Image src={pambagif} alt="Pamba Project" className="rounded-xl" unoptimized />
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

      {/* Eighth Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100">
          <Image src={dkeeper} alt="Dkeeper" className="rounded-xl" unoptimized />
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

      {/* Nineth Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100">
          <Image src={weatherapp} alt="Weather App" className="rounded-xl" unoptimized />
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
