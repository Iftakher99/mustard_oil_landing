function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-gradient-to-br from-yellow-400 to-red-500"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1605039982749-c2fe1dd2a588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")',
      }}
    >
      <div className="flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-shadow-lg">
          Premium Mustard Oil
        </h1>
        <p className="text-lg md:text-xl mb-8 text-shadow-lg">
          Experience the Authentic Taste and Health Benefits
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-full text-lg md:text-xl font-semibold transition duration-300 shadow-lg">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
