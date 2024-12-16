import Header from "./components/Header";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <h1>Hello World</h1>
    </GlobalContextProvider>
  );
}

export default App;
