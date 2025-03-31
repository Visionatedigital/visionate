import Faq from "./faq";
import Footer from "./footer";
import Founders from "./founders";
import Hero from "./hero";
import Navbar from "./navbar";
import ProjectsSection from "./projects";
import Statistics from "./stats";

import Trusted from "./trusted";

const Home = () => {
  return ( <div>
 <Navbar />
 <Hero />
 <Trusted />
 <ProjectsSection />
 <Founders />
 <Statistics />
 <Faq />
 <Footer />
  </div> );
}
 
export default Home;