import { useEffect, useMemo, useState } from "react";
import HeroImage from "../../assets/images/hero.png";

const heroModes = {
  developer: {
    label: "Developer",
    title: "Building Code, Community, and Creative Solutions",
    text: "Full-stack developer creating modern, responsive websites and applications with React, JavaScript, and purpose-driven design.",
  },
  church: {
    label: "Church Tech",
    title: "Improving Systems That Support Ministry",
    text: "Rock RMS systems administrator focused on clean processes, better workflows, and technology that helps people stay connected.",
  },
  creative: {
    label: "Creative",
    title: "Designing Digital Experiences With Personality",
    text: "From websites and branding to music, ministry, and personal projects, I enjoy building things that are useful and memorable.",
  },
  leader: {
    label: "Leader",
    title: "Serving People Through Leadership and Technology",
    text: "I bring together technical skill, operations experience, and community leadership to solve problems and support meaningful work.",
  },
};

const Hero = () => {
  const [activeMode, setActiveMode] = useState("developer");
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const activeContent = useMemo(() => heroModes[activeMode], [activeMode]);

  useEffect(() => {
    const rotateModes = ["developer", "church", "creative", "leader"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % rotateModes.length;
      setActiveMode((prev) => {
        if (prev !== rotateModes[currentIndex]) {
          return rotateModes[currentIndex];
        }
        return prev;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setGlow({ x, y });

    const centerX = rect.left + rect.width * 0.75;
    const centerY = rect.top + rect.height * 0.5;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const rotateY = Math.max(Math.min(deltaX / 25, 10), -10);
    const rotateX = Math.max(Math.min(deltaY / -25, 10), -10);

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setGlow({ x: 50, y: 50 });
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <section
      className="hero-section position-relative overflow-hidden py-6 d-flex align-items-center"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--glow-x": `${glow.x}%`,
        "--glow-y": `${glow.y}%`,
      }}
    >
      <div className="hero-grid"></div>

      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="hero-copy">
              <p className="hero-kicker mb-2">Phillip Harden</p>

              <div className="hero-mode-pill mb-3">
                <span>{activeContent.label}</span>
              </div>

              <div className="hero-content-shell mb-4">
                <h1 className="hero-title fw-bold mb-3">{activeContent.title}</h1>
                <p className="hero-text fs-5 mb-0">{activeContent.text}</p>
              </div>

              <div className="d-flex flex-wrap gap-2 mb-4">
                {Object.entries(heroModes).map(([key, value]) => (
                  <button
                    key={key}
                    type="button"
                    className={`hero-chip transition ${
                      activeMode === key ? "is-active" : ""
                    }`}
                    onClick={() => setActiveMode(key)}
                  >
                    {value.label}
                  </button>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-3">
                <a href="#projects" className="hero-btn hero-btn-primary transition">
                  View My Work
                </a>

                <a href="#about" className="hero-btn hero-btn-secondary transition">
                  Explore My World
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="hero-visual-wrap d-flex justify-content-center mt-5 mt-lg-0">
              <div
                className="hero-image-card transition"
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateY(-4px)`,
                }}
              >
                <div className="hero-image-glow"></div>

                <img
                  src={HeroImage}
                  alt="Illustration of Phillip Harden holding a skateboard and laptop"
                  className="hero-image img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;