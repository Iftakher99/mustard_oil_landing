const Newsletter = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <div className="md:w-1/2">
            <img
              className="rounded-md shadow-md w-full"
              src="https://via.placeholder.com/400x300"
              alt="Newsletter"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-3xl font-semibold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Stay updated with the latest news and promotions related to our
              premium mustard oil products. Subscribe now and never miss out!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-l-md px-4 py-2 w-full focus:outline-none"
              />
              <button className="bg-blue-500 text-white rounded-r-md px-6 py-2 hover:bg-blue-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
