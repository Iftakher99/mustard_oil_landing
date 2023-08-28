const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400">Email: info@example.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-gray-400">
          &copy; 2023 Your Mustard Oil Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
