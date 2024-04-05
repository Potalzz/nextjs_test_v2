"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link prefetch href="/">
              Home
            </Link>{" "}
            {path === "/" ? "👍" : ""}
          </li>
          <li>
            <Link prefetch href="/items">
              items
            </Link>{" "}
            {path === "/items" ? "👍" : ""}
          </li>
        </ul>
      </nav>
    </div>
  );
}
