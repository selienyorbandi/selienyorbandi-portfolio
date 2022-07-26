import "./App.css";
import Navbar from "./components/Navbar/Navbar";
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
          <ProjectsContainer/>
        </main>
      </div>
    </LangProvider>
  );
}

export default App;
