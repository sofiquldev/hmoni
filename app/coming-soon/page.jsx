import Link from "next/link";

import styles from "./styles.module.scss";
import SubscriberForm from "../components/SubscriberForm";
import SocialLinks from "../components/SocialLinks";
import Copyright from "@/app/components/Copyright";
import ParallaxBG from "../components/ParallaxBG";

export default function ComingSoon() {
  return (
    <>
      <ParallaxBG page="coming-soon" />
      <div className={`container mx-auto text-center max-w-screen-md pt-6 md:py-12 md:pb-8 px-4 ${styles.page_wrapper}`}>
        <header>
          <Link href="#" className={styles.brand}>
            <img src="/logo.svg" alt="h-moni-logo" />
          </Link>
        </header>

        <main className={ styles.mainContent }>
          <h1 className={styles.title}>We are Coming Soon!!</h1>
          <p className={styles.desc}>Stay tuned for something amazing</p>

          <img className={styles.mainImage} src="/coming-soon.svg" alt="coming-soon" />
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
