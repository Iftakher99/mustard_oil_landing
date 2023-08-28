import oil_img from '../img/20230602_155413.jpg';
const Modal = () => {
  const products = [
    {
      title: 'Premium Mustard Oil',
      description:
        'Our premium mustard oil is extracted from the finest mustard seeds, offering a rich and authentic flavor to enhance your culinary creations.',
      img: oil_img,
    },
    {
      title: 'Organic Mustard Oil',
      description:
        'Experience the goodness of nature with our organic mustard oil, cold-pressed and unrefined to retain its natural nutrients and health benefits.',
      img: oil_img,
    },
    {
      title: 'Spiced Mustard Oil Blend',
      description:
        'Infused with aromatic spices, our spiced mustard oil blend adds a burst of flavor to your dishes while providing the traditional benefits of mustard oil.',
      img: oil_img,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  mt-20 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">
        Explore Our Mustard Oil Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <img className="mb-4" src={product.img} alt="" />
            <p className="text-gray-700">{product.description}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              LEARN MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
