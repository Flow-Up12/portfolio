import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import ProfessionalProfile from "./components/ProfessionalProfile";

function App() {
  return (
    <div className="App">
      {/* Hero and Profile Section */}
      <div className="grid lg:grid-cols-3 gap-8 px-8 py-10">
        <div className="lg:col-span-1">
          <Hero />
        </div>

        {/* Professional Profile & Stats */}
        <div className="lg:col-span-2 space-y-6">
          <ProfessionalProfile />

          {/* Skills & Achievements */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Skills />
            <Achievements />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <Projects />
    </div>
  );
}

export default App;