function AboutMe() {
  return (
    <section id="about">
    {/* About Me starts here */}
    <div className="mt-20 text-3xl py-1 dark:text-white">
        <h2 className="text-3xl py-1 mt-10 inline border-b-4 border-teal-500 dark:text-white">About</h2>
      </div>
    <div className="shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100">

      <p className=" text-md py-2 leading-8">
        I wasn&apos;t always a web developer.
        Previously I worked in the Tourism industry as Guest Relations Manager, however in my free time, I pursued my passion for web development and built a few Shopify stores.
      </p>
      <p className=" text-md py-2 leading-8">
        In December 2022, I quit my job and decided to dive deeper in the world of web development. In January 2023, I joined the very intensive <span className="text-teal-500">  360 hours Le Wagon Bootcamp</span> in Amsterdam.
        The bootcamp grad me with a strong foundation. I&apos;ve built full-stack web applications from scratch and collaborated on group projects that challenged and expanded my knowledge.
      </p>
      <p className=" text-md py-2 leading-8">
        After completing Le Wagon bootcamp, I immediately embarked on another exciting learning journey by enrolling in <span className="text-teal-500"> The App Brewery Full Stack Web Development Online Bootcamp</span>.
          My skills in the field were complemented by this additional training.
      </p>
      <p className=" text-md py-2 leading-8">
        With a continuous learning mindset, I embrace challenges and proactively seek opportunities to expand my skill set.
      </p>
      <p className=" text-md py-2 leading-8">
        Having lived in various countries, such as Australia, US, Brazil, Portugal and currently The Netherlands, I embrace cultural diversity and have developed a global perspective.
      </p>
    </div>
    </section>
  );
}

export default AboutMe;
