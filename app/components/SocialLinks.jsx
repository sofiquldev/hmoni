"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./styles/social-links.module.scss";

const SocialLinks = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch("/api/author");
      const data = await response.json();

      setItems(data.socialLinks);
    };

    fetchComments();
  }, []);

  return (
    <ul className={styles.social__wrapper}>
      {items.map((item, index) => (
        <li key={ index }>
          <Link href={item.href} target="_blank">
            <Image src={`/socials/${item.name}.svg`} alt={item.name} width={20} height={20} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
