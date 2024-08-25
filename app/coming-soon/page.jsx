import Link from "next/link";

import Image from "next/image";
import SubscriberForm from "@/app/components/SubscriberForm";
import SocialLinks from "@/app/components/SocialLinks";
import Copyright from "@/app/components/Copyright";
import ParallaxBG from "@/app/components/ParallaxBG";

import styles from "./styles.module.scss";

export default function ComingSoon() {
  return (
    <>
      <ParallaxBG page="coming-soon" />
      <div className={`container mx-auto text-center max-w-screen-md pt-6 md:py-12 md:pb-8 px-4 ${styles.page_wrapper}`}>
        <header>
          <Link href="#" className={styles.brand}>
            <Image src="/logo.svg" alt="h-moni-logo" />
          </Link>
        </header>

        <main className={ styles.mainContent }>
          <h1 className={styles.title}>We are Coming Soon!!</h1>
          <p className={styles.desc}>Stay tuned for something amazing</p>

          <Image className={styles.mainImage} src="/coming-soon.svg" alt="coming-soon" />
        </main>

        <footer>
          <SubscriberForm />
          <SocialLinks />
          <Copyright />
        </footer>
      </div>
    </>
  );
}
