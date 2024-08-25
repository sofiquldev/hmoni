import Image from "next/image";

import styles from "./styles/parallax-bg.module.scss";

const ParallaxBG = () => {
  return (
    <div className={styles.comingSoon}>
      <Image src="/shapes/01.svg" alt="bg-elements" width={42} height={37} />
      <Image src="/shapes/02.svg" alt="bg-elements" width={24} height={24} />
      <Image src="/shapes/03.svg" alt="bg-elements" width={56} height={56} />
      <Image src="/shapes/04.svg" alt="bg-elements" width={22} height={22} />
      <Image src="/shapes/05.svg" alt="bg-elements" width={40} height={40} />
      <Image src="/shapes/06.svg" alt="bg-elements" width={71} height={24} />
      <Image src="/shapes/07.svg" alt="bg-elements" width={83} height={24} />
      <Image src="/shapes/08.svg" alt="bg-elements" width={56} height={56} />
      <Image src="/shapes/09.svg" alt="bg-elements" width={51} height={59} />
      <Image src="/shapes/10.svg" alt="bg-elements" width={56} height={56} />
    </div>
  );
};

export default ParallaxBG;
