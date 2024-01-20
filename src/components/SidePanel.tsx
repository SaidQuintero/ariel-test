"use client";

import { useState } from "react";
import styles from "./styles/sidepanel.module.css";

export default function SidePanel() {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.body}>
      <div className={styles.bodyContainer}>
        <div className={styles.header}>
          <div className={styles.headerContainer}>Header</div>
        </div>
        <div className={styles.content}>SidePanel</div>
      </div>
    </div>
  );
}
