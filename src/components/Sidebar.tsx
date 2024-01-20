import Image from "next/image";
import arielLogo from "../../public/ariel-logotype.svg";
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

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <Image
        src={arielLogo}
        alt="Logo de Ariel"
        width={104}
        height={40}
        className="sidebar-logo"
      />
      <div className="sidebar-items">
        <SidebarItem label="Inicio" linkTo="/" Icon={BiHome} />
        <SidebarItem label="Biblioteca" linkTo="/biblioteca" Icon={BiLibrary} />
        <SidebarItem
          label="Mis documentos"
          linkTo="/mis-documentos"
          Icon={BiFolderOpen}
        />
      </div>
      <div className="sidebar-conversations">
        <b className="sidebar-category-title">Conversaciones</b>
        <SidebarItem
          label="Mis documentos"
          linkTo="/mis-documentos"
          Icon={BiMessage}
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
          <div className="user-info">
            <p className="user-name">Said Quintero</p>
            <p className="user-role">Miembro</p>
          </div>
          <BiDotsHorizontalRounded size={20} color={"var(--gray-400)"} />
        </div>
        <div className="sidebar-collapse">
          <BiChevronLeft size={20} color="grey" />
        </div>
      </div>
    </nav>
  );
}
