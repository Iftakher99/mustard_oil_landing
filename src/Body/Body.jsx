import Features from './Features';
import Hero from './Hero';
import Modal from './Modal';
import Newsletter from './Newsletter';
import Profile from './Profile';
import Testimonial from './Testimonial';
function Body() {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <Hero />
      {/* Modal */}
      <Modal />
      {/* Profile */}
      <Profile />
      <Features />
      <Testimonial />
      {/* Features Showcase */}

      {/* Subscription Form */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          {/* Add footer content here */}
        </div>
      </footer>
    </main>
  );
}

export default Body;
