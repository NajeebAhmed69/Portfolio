import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right pt-19"> 
            Hi, I'm Najeeb Ahmed
          </h1>

          <p className="  tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Hi, I’m Najeeb Ahmed, student of Computer Science at the University of Sindh,
currently focused on web development. I’ve been learning and working on both
frontend and backend technologies, using frontend tools like HTML, CSS,
JavaScript, React, and Tailwind, and working with backend technologies like
Express.js. Along the way, I’ve also learned how to use Git and GitHub for version
control, and Postman for testing APIs. Alongside web development, I have a solid
understanding of computer networking, which helps me work more effectively
with server-side logic and API communication. I’m currently looking for a web
development internship where I can apply my knowledge, work on real projects,
and grow as a developer in a professional environment. 
          {/* My goal is to build solutions that offer both
          exceptional performance and a delightful user experience. */}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
