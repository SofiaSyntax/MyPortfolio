function Hero() {
  return (
    <div className="w-full">
      <section className="py-20 px-8 ">
        <div className="flex items-center justify-center space-x-8">
          {/* Profile Picture */}
          <div className="flex-shrink-0 w-44 h-44 rounded-full  shadow-xl overflow-hidden">
            <img
              src="/assets/IMG_5602.jpg" // Add profile image here
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* About Section */}
          <div className="text-center md:text-left">
            <h1 className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent text-4xl font-bold">
              Sofia Backeholt
            </h1>{" "}
            <p className="text-lg font-semibold text-[#374151] mt-2">
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
