"use client";

import Image from "next/image";
import arielLogotype from "../../public/ariel-logotype.svg";
import arielLogoicon from "../../public/ariel-logoicon.svg";
import arielType from "../../public/ariel-type.svg";
import profilePic from "../../public/ProfilePic2023.png";
import SidebarItem from "./SidebarItem";
import {
  BiChevronLeft,
  BiDotsHorizontalRounded,
  BiFolderOpen,
  BiHome,
  BiLibrary,
  BiMessage,
} from "react-icons/bi";
import { useState } from "react";
import clsx from "clsx";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <nav
      className={clsx(
        "transition-all",
        { "sidebar-collapsed": collapsed },
        { "sidebar-open": !collapsed }
      )}
    >
      <div
        className={clsx("sidebar-logo-section", {
          "sidebar-logo-section-collapsed": collapsed,
        })}
      >
        <Image src={arielLogoicon} alt="Logo de Ariel" width={32} height={32} />
        {collapsed ? null : (
          <Image
            src={arielType}
            alt="Logotipo de Ariel"
            width={46}
            height={32}
          />
        )}
      </div>
      <div className="sidebar-items">
        <SidebarItem
          label="Inicio"
          linkTo="/"
          Icon={BiHome}
          collapsed={collapsed}
        />
        <SidebarItem
          label="Biblioteca"
          linkTo="/biblioteca"
          Icon={BiLibrary}
          collapsed={collapsed}
        />
        <SidebarItem
          label="Mis documentos"
          linkTo="/mis-documentos"
          Icon={BiFolderOpen}
          collapsed={collapsed}
        />
      </div>
      <div className="sidebar-conversations">
        <b className="sidebar-category-title">
          {collapsed ? null : "Conversaciones"}
        </b>
        <SidebarItem
          label="Conversación"
          linkTo="/conversacion"
          Icon={BiMessage}
          collapsed={collapsed}
        />
      </div>
      <div className="sidebar-bottom-section">
        <div className="sidebar-user">
          <Image
            width={28}
            height={28}
            alt="Foto de perfil"
            className="profile-picture"
            src={profilePic}
          />
          {collapsed ? null : (
            <>
              <div className="user-info">
                <p className="user-name">Said Quintero</p>
                <p className="user-role">Miembro</p>
              </div>
              <BiDotsHorizontalRounded size={20} color={"var(--gray-400)"} />
            </>
          )}
        </div>
        <div
          className="sidebar-toggle-collapse"
          onClick={() => setCollapsed(!collapsed)}
        >
          <BiChevronLeft
            size={20}
            className={clsx("var(--gray-500)", {
              "sidebar-toggle-icon-collapsed": collapsed,
            })}
          />
        </div>
      </div>
    </nav>
  );
}
