import React from 'react';
import { styles } from "../styles";;
import { SectionWrapper } from "../hoc";

const Hero = () => {
    return (
      <div>
        <p className={styles.heroHeadText}>
            Task Managment Dashboard
        </p>
      </div>
    );
  };
  
export default SectionWrapper(Hero);