import Header from "./components/Header";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Header />
    </GlobalContextProvider>
  );
}

export default App;
