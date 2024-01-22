import Link from "next/link";
import styles from "./page.module.css";
import { BiLibrary, BiSearch, BiUpload } from "react-icons/bi";
import ColumnTab from "@/components/ColumnTab";
import LibraryTable from "@/components/LibraryTable";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerIcon}>
            <BiLibrary size={20} />
          </div>
          <div className={styles.searchbarContainer}>
            <BiSearch size={20} className={styles.searchbarIcon} />
            <input
              className={styles.searchbarTextField}
              placeholder="Buscar..."
            />
          </div>
          <Link href="/subir-biblioteca" className={styles.headerUploadBtn}>
            <BiUpload size={20} />
            Subir
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Biblioteca</h1>
          <div className={styles.columns}>
            <div className={styles.leftColumn}>
              <ColumnTab />
            </div>
            <div className={styles.rightColumn}>
              <h2 className={styles.categoryTitle}>Infralegal (981)</h2>
              <LibraryTable />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
