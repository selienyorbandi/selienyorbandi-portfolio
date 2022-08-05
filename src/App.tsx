import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ContactContainer from "./containers/ContactContainer/ContactContainer";
import HomeContainer from "./containers/HomeContainer/HomeContainer";
import ProjectsContainer from "./containers/ProjectsContainer/ProjectsContainer";
import { LangProvider } from "./context/langContext";

function App(): JSX.Element {
  return (
    <LangProvider>
      <div className="App">
        <Navbar />
        <main>
          <HomeContainer />
          <ProjectsContainer />
          <ContactContainer />
        </main>
      </div>
    </LangProvider>
  );
}

export default App;
