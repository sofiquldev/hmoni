"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
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
            <img src={`/socials/${item.name}.svg`} alt={item.name} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
