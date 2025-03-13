import Hero from '../components/Hero';
import About from '../components/About';
import Platform from '../components/Platform';
import Resources from '../components/Resources/Resources';
import Testimonials from '../components/Testimonials/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Platform />
      <Resources />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;