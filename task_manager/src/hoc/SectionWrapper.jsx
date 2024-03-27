import { styles } from "../styles";

const SectionWrapper = (Component) =>
  function HOC() {
    return (
      <div
        className={`${styles.padding} max-w-7xl mx-auto z-0`}
      >
        <Component />
      </div>
    );
  };

export default SectionWrapper;