import Link from "next/link";
import { IconType } from "react-icons";

interface SidebarItemProps {
  //   handleOpen: () => void;
  //   isOpen: boolean;
  //   isAnyOpen: boolean;
  label: string;
  linkTo: string;
  Icon: IconType;
}

export default function SidebarItem({ label, linkTo, Icon }: SidebarItemProps) {
  return (
    <Link href={linkTo} className="sidebar-item body-m">
      <Icon size={20} />
      {label}
    </Link>
  );
}
