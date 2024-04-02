import "./App.scss";
import Layout from "./components/Layout";
import { DarkThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <DarkThemeProvider>
      <Layout />
    </DarkThemeProvider>
  );
}

export default App;
