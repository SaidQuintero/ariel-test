import Link from "next/link";
import styles from "./styles/column-tab.module.css";
// import { IconType } from "react-icons";

interface ColumnTabItemProps {
  //   handleOpen: () => void;
  //   isOpen: boolean;
  //   isAnyOpen: boolean;
  label: string;
  linkTo: string;
  // Icon: IconType;
}

export default function ColumnTabItem({ label, linkTo }: ColumnTabItemProps) {
  return (
    <li>
      <Link href={linkTo} className={styles.item}>
        {label}
      </Link>
    </li>
  );
}
