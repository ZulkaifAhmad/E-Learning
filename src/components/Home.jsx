import "../App.css";
import Main from "./comps/main.jsx";
import Sections from "./comps/Sections.jsx";
import Success from "./comps/Success.jsx";
import Tools from "./comps/tools.jsx";
import Features from "./comps/Features.jsx";
import Related from "./comps/related.jsx";

function Home() {
  return (
    <>
      <div className="Home">
        <Main />
        <Success />
        <Tools />
        <Sections />
        <Features />
        <Related />
      </div>
    </>
  );
}

export default Home;
