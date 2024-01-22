"use client";

import { useState } from "react";
import styles from "./styles/sidepanel.module.css";
import {
  BiCaptions,
  BiDownload,
  BiLinkExternal,
  BiMessageAdd,
  BiX,
} from "react-icons/bi";
import { useStore } from "../app/store/sidePanel";

export default function SidePanel() {
  const isOpen = useStore((state: any) => state.isOpen);
  const close = useStore((state: any) => state.close);

  if (isOpen === false) {
    return null;
  }

  return (
    <div className={styles.body}>
      <div className={styles.bodyContainer}>
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            <b className={styles.headerTitle}>Detalles del documento</b>
            <button className={styles.headerActionBtn} onClick={close}>
              <BiX size={20} />
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.pdfPreviwer} />
          <div>
            <h3 className={styles.documentTitle}>
              Contrato de compraventa de empresas
            </h3>
            <p className={styles.documentDescription}>Audio MP3 - 4.03 MB</p>
          </div>
          <div className={styles.documentActions}>
            <button className={styles.documentBtn}>
              <BiMessageAdd size={20} />
              Conversar
            </button>
            <button className={styles.documentBtn}>
              <BiCaptions size={20} />
              Ver transcripción
            </button>
            <button className={styles.documentBtn}>
              <BiLinkExternal size={20} />
              Abrir
            </button>
            <button className={styles.documentBtn}>
              <BiDownload size={20} />
              Descargar
            </button>
          </div>
          <div>
            <b className={styles.documentSectionTitle}>
              Clasificación de Ariel
            </b>
            <div className={styles.documentItem}>
              <b className={styles.documentItemTitle}>Tipo</b>
              <p className={styles.documentItemValue}>Código</p>
            </div>
            <div className={styles.documentItem}>
              <b className={styles.documentItemTitle}>Temas</b>
              <p className={styles.documentItemValue}>Penal General</p>
            </div>
            <div className={styles.documentItem}>
              <b className={styles.documentItemTitle}>Subido por</b>
              <p className={styles.documentItemValue}>Ariel</p>
            </div>
            <div className={styles.documentItem}>
              <b className={styles.documentItemTitle}>Código ID</b>
              <p className={styles.documentItemValue}>
                jn56-flhu-58fn-3mb6-08dk-009e-98lo-s7n3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
