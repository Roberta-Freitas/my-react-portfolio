import Image from "next/legacy/image";
import pambagif from "../public/Pamba.gif";
import airbnbclone from "../public/Airbnb-Clone.gif";

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
          <Image src={pambagif} alt="Pamba Project" />
          <h3 className=" text-lg font-medium pt-8 pb-2">Pamba - Your home Away from Home</h3>
          <p className="py-2">
            As the final project of the Web Development Bootcamp,
            my 3 team mates and I built Pamba, a web-app that helps future
            Le Wagon students to find accommodation based on previous students reviews.
          </p>
          <h4 className="py-4 text-teal-600">Main features:</h4>
            <ul>
              <li className="text-gray-800 py-1">API from ns.nl to search for commute options</li>
              <li className="text-gray-800 py-1">Geocoder</li>
              <li className="text-gray-800 py-1">Mapbox</li>
            </ul>
            <a href="http://www.pamba.me/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 mr-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
            <a href="http://www.pamba.me/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Code
            </a>
        </div>

      {/* Second Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100">
          <Image src={airbnbclone} alt="Airbnb Clone Project" />
          <h3 className=" text-lg font-medium pt-8 pb-2">Airbnb Clone</h3>
          <p className="py-2">
            {/* I have to write the description */}
          </p>
          <h4 className="py-4 text-teal-600">Main features:</h4>
            <ul>
              <li className="text-gray-800 py-1">Feature 1</li>
              <li className="text-gray-800 py-1">Feature 2</li>
              <li className="text-gray-800 py-1">Feature 3</li>
            </ul>
            <a href="https://airbnb-roberta-freitas.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 mr-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
            <a href="https://airbnb-roberta-freitas.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Code
            </a>
        </div>

        {/* Third Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100">
          <Image src={airbnbclone} alt="Airbnb Clone Project" />
          <h3 className=" text-lg font-medium pt-8 pb-2">Airbnb Clone</h3>
          <p className="py-2">
          {/* I have to write the description */}
          </p>
          <h4 className="py-4 text-teal-600">Main features:</h4>
            <ul>
              <li className="text-gray-800 py-1">API from ns.nl to search for commute options</li>
              <li className="text-gray-800 py-1">Geocoder</li>
              <li className="text-gray-800 py-1">Mapbox</li>
            </ul>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 mr-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Code
            </a>
        </div>

         {/* Forth Card */}
        <div className=" text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100">
          <Image src={airbnbclone} alt="Airbnb Clone Project" />
          <h3 className=" text-lg font-medium pt-8 pb-2">Shopify Store</h3>
          <p className="py-2">
          {/* I have to write the description */}
          </p>
          <h4 className="py-4 text-teal-600">Main features:</h4>
            <ul>
              <li className="text-gray-800 py-1">API from ns.nl to search for commute options</li>
              <li className="text-gray-800 py-1">Geocoder</li>
              <li className="text-gray-800 py-1">Mapbox</li>
            </ul>
            <a href="https://primadonna-extensoes.pt/" target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-teal-600 transition-colors">
              Demo
            </a>
         </div>

         {/* Fifth Card */}
         <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-100">
          <Image src={airbnbclone} alt="Airbnb Clone Project" />
          <h3 className=" text-lg font-medium pt-8 pb-2">Shopify Store</h3>
          <p className="py-2">
          {/* I have to write the description */}
          </p>
          <h4 className="py-4 text-teal-600">Main features:</h4>
            <ul>
              <li className="text-gray-800 py-1">API from ns.nl to search for commute options</li>
              <li className="text-gray-800 py-1">Geocoder</li>
              <li className="text-gray-800 py-1">Mapbox</li>
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
