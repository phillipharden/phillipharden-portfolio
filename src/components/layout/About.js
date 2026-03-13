const About = () => {
  return (
    <section id="about" className="py-6">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">

            <h2 className="fs-2 mb-4 text-center">About Me</h2>

            <p className="fs-5 mb-4 text-center">
              I'm a Full-Stack Developer and Systems Administrator who enjoys building
              clean, modern web applications and improving digital systems that help
              people stay connected.
            </p>

          </div>
        </div>

        <div className="row mt-5">

          <div className="col-12 col-lg-6 mb-4">
            <h3 className="mb-3">What I Do</h3>

            <p>
              I hold a Bachelor's Degree in Web Design & Development from Full Sail
              University where I graduated as Valedictorian. My primary focus is
              building modern web applications using technologies like React,
              JavaScript, and Node.js.
            </p>

            <p>
              I enjoy working across the full stack—from designing responsive
              front-end experiences to building APIs and managing databases such as
              MongoDB and MySQL. I also enjoy creating custom CSS systems and tools
              that make development more efficient.
            </p>

            <p>
              In my current role as an Associate Systems Administrator, I work with
              Rock RMS to improve workflows, data systems, and digital experiences
              that support ministry and community.
            </p>
          </div>

          <div className="col-12 col-lg-6 mb-4">
            <h3 className="mb-3">Beyond the Code</h3>

            <p>
              Outside of development, I enjoy fitness and powerlifting, where I've
              reached personal milestones like a 500-pound deadlift and a
              450-pound squat.
            </p>

            <p>
              I've also been writing and creating music since childhood. My first
              poem was published in elementary school, and later I recorded music
              as a Christian Hip-Hop artist in the Atlanta scene.
            </p>

            <p>
              My biggest motivation is my family. Becoming a father pushed me to
              pursue development seriously and build a career centered around
              learning, creating, and solving problems.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;