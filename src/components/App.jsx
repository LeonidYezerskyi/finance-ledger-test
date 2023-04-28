import About from "./About/About";
import Blog from "./Blog/Blog";
import Cases from "./Cases/Cases";
import Contact from "./Contact/Contact";
import Foter from "./Footer/Foter";
import Home from "./Home/Home";
import Team from "./Team/Team";

export const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Cases />
      <Blog />
      <Team />
      <Contact />
      <Foter />
    </div>
  );
};
