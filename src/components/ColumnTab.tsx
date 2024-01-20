import Image from "next/image";
import arielLogo from "../../public/ariel-logotype.svg";
import SidebarItem from "./SidebarItem";
import { BiFolderOpen, BiHome, BiLibrary } from "react-icons/bi";
import styles from "./styles/column-tab.module.css";
import ColumnTabItem from "./ColumnTabItem";

export default function ColumnTab() {
  return (
    <div className={styles.container}>
      <b className={styles.title}>Categorías</b>
      <ul className={styles.items}>
        <ColumnTabItem label="Todos" linkTo="/biblioteca/todos" />
        <ColumnTabItem label="Constitucional" linkTo="/biblioteca/todos" />
        <ColumnTabItem label="Legal" linkTo="/biblioteca/todos" />
        <ColumnTabItem label="Ingralegal" linkTo="/biblioteca/todos" />
      </ul>
    </div>
  );
}
