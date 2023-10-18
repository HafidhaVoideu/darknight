import Footer from "./scenes/global/Footer";
import Header from "./scenes/global/Header";
import About from "./scenes/sections/About";
import Home from "./scenes/sections/Home";
import Members from "./scenes/sections/Members";
import Partners from "./scenes/sections/Partners";
import Services from "./scenes/sections/Services";

function App() {
  return (
    <div className="main">
      <Header />
      <Home />
      <Services />

      <Members />

      <Partners />
      <About />

      <Footer />
    </div>
  );
}

export default App;
