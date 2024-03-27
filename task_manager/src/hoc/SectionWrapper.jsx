import { styles } from "../styles";

const SectionWrapper = (Component) =>
  function HOC() {
    return (
      <section
        className={`${styles.padding} max-w-7xl mx-auto z-0`}
      >
        <Component />
      </section>
    );
  };

export default SectionWrapper;