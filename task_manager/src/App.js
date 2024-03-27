import { styles } from "./styles";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import Piority from "./components/Piority";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <SearchBox />
      <Piority />
      <div className={styles.padding}>task lists</div>
    </div>
  );
}

export default App;
