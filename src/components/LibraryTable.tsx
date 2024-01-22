"use client";

import { BiDotsHorizontalRounded, BiFile, BiMessageAdd } from "react-icons/bi";
import styles from "./styles/library-table.module.css";
import { useStore } from "@/app/store/sidePanel";

export default function LibraryTable() {
  const data = [
    {
      name: "Código civil",
    },
    {
      name: "Código penal",
    },
    {
      name: "Aduanero De Embargue Civil Familiar",
    },
    {
      name: "Aduanero De Embargue Civil Familiar",
    },
    {
      name: "Aduanero De Embargue Civil Familiar",
    },
    {
      name: "Aduanero De Embargue Civil Familiar",
    },
    {
      name: "Aduanero De Embargue Civil Familiar",
    },
    {
      name: "Aduanero De Embargue Civil Familiar",
    },
    {
      name: "Aduanero De Embargue Civil Familiar",
    },
    {
      name: "Aduanero De Embargue Civil Familiar",
    },
    {
      name: "Aduanero De Embargue Civil Familiar",
    },
    {
      name: "Aduanero De Embargue Civil Familiar",
    },
    {
      name: "Aduanero De Embargue Civil Familiar",
    },
    {
      name: "Aduanero De Embargue Civil Familiar",
    },
    {
      name: "Aduanero De Embargue Civil Familiar",
    },
  ];
  const openSidePanel = useStore((state: any) => state.open);

  return (
    <table>
      <thead>
        <tr className={styles.tableHeader}>
          <td className={styles.headerTitleNumber}>#</td>
          <td className={styles.headerTitleNFile}>nombre</td>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {data.map((item, index) => (
          <tr
            className={styles.tableRow}
            key={item.name}
            onClick={openSidePanel}
          >
            <td className={styles.tableNumberCell}>{index + 1}</td>
            <td className={styles.tableFileCell}>
              <BiFile size={20} className={styles.fileIcon} />
              <p>{item.name}</p>
            </td>
            <td className={styles.tableActionsCell}>
              <button className={`${styles.action} ${styles.appearAction}`}>
                <BiMessageAdd size={20} />
              </button>
              <button className={styles.action}>
                <BiDotsHorizontalRounded size={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
