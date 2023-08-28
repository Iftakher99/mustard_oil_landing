const features = [
  {
    title: 'Premium Quality',
    description:
      'Our mustard oil is made from the finest quality mustard seeds to ensure rich flavor and maximum health benefits.',
  },
  {
    title: 'Cold-Pressed',
    description:
      'We use cold-press extraction to retain the natural nutrients and distinct taste of mustard oil.',
  },
  {
    title: 'Rich in Antioxidants',
    description:
      'Mustard oil is known for its high antioxidant content, contributing to a healthy lifestyle.',
  },
  {
    title: 'Versatile Culinary Use',
    description:
      'Enhance your dishes with the unique and authentic flavor of our mustard oil.',
  },
];
const Features = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
