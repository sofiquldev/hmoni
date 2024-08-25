import Image from "next/image";

import styles from "./styles/parallax-bg.module.scss";

const ParallaxBG = () => {
  return (
    <div className={styles.comingSoon}>
      <Image src="/shapes/01.svg" alt="bg-elements" />
      <Image src="/shapes/02.svg" alt="bg-elements" />
      <Image src="/shapes/03.svg" alt="bg-elements" />
      <Image src="/shapes/04.svg" alt="bg-elements" />
      <Image src="/shapes/05.svg" alt="bg-elements" />
      <Image src="/shapes/06.svg" alt="bg-elements" />
      <Image src="/shapes/07.svg" alt="bg-elements" />
      <Image src="/shapes/08.svg" alt="bg-elements" />
      <Image src="/shapes/09.svg" alt="bg-elements" />
      <Image src="/shapes/10.svg" alt="bg-elements" />
    </div>
  );
};

export default ParallaxBG;
