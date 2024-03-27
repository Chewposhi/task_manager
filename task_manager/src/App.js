import { styles } from "./styles";
import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import Priority from "./components/Priority";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <SearchBox />
      <Priority />
      <div className={styles.padding}>task lists</div>
    </div>
  );
}

export default App;
