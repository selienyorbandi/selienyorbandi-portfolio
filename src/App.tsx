import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import AboutMeContainer from "./containers/AboutMeContainer/AboutMeContainer";
import { LangProvider } from "./context/langContext";

function App(): JSX.Element {
  return (
    <LangProvider>
      <div className="App">
        <Navbar />
        <Header />
        <main>
          <AboutMeContainer />
        </main>
      </div>
    </LangProvider>
  );
}

export default App;
