import "./App.css";
import ViewTitles from "./components/view-titles.js";
import { GraphqlClientProvider } from "./contexts/api";

function App() {
  return (
    <GraphqlClientProvider>
      <div className="App">
        <ViewTitles />
      </div>
    </GraphqlClientProvider>
  );
}

export default App;
