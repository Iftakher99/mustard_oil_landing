const testimonials = [
  {
    name: 'Alice Johnson',
    title: 'Home Chef',
    photoUrl: 'https://via.placeholder.com/150',
    comment:
      "I've been using your mustard oil in my recipes for years. The rich flavor it adds to my dishes is unmatched. Thank you for this wonderful product!",
  },
  {
    name: 'Michael Smith',
    title: 'Food Blogger',
    photoUrl: 'https://via.placeholder.com/150',
    comment:
      'Your mustard oil is a staple ingredient in my kitchen. It brings authenticity to traditional recipes and elevates the overall taste. Highly recommended!',
  },
  {
    name: 'Emily Davis',
    title: 'Culinary Enthusiast',
    photoUrl: 'https://via.placeholder.com/150',
    comment:
      "The quality of your mustard oil is exceptional. It's become a key ingredient in my kitchen, and I love how it enhances the depth of flavor in every dish.",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg">
              <div className="flex items-center mb-4">
                <img
                  className="w-12 h-12 rounded-full mr-3"
                  src={testimonial.photoUrl}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
