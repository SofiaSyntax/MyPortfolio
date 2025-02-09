function Hero() {
  return (
    <div className="w-full">
      <section className="bg-purple-300 py-16 ">
        <div className="flex items-center justify-center space-x-8 px-4">
          {/* Profile Picture */}
          <div className="flex-shrink-0 w-32 h-32 rounded-full border-4 shadow-lg">
            <img
              src="" // Add profile image here
              alt=""
              className=""
            />
          </div>

          {/* About Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800">Your Name</h1>{" "}
            {/* Replace with your name */}
            <p className="text-lg text-gray-600 mt-2">
              Full Stack Developer | Passionate about building beautiful and
              functional web applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
