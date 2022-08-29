import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutMeContainer from "./containers/AboutMeContainer/AboutMeContainer";
import ContactContainer from "./containers/ContactContainer/ContactContainer";
import HomeContainer from "./containers/HomeContainer/HomeContainer";
import ProjectsContainer from "./containers/ProjectsContainer/ProjectsContainer";
import { LangProvider } from "./context/langContext";
import { ProjectProvider } from "./context/projectContext";

function App(): JSX.Element {
  return (
    <LangProvider>
      <ProjectProvider>
        <div className="App">
          <Navbar />
          <main>
            <HomeContainer />
            <AboutMeContainer />
            <ProjectsContainer />
            <ContactContainer />
          </main>
        </div>
      </ProjectProvider>
    </LangProvider>
  );
}

export default App;
