"use client";

import Link from "next/link";
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface SidebarItemProps {
  //   handleOpen: () => void;
  //   isOpen: boolean;
  //   isAnyOpen: boolean;
  label: string;
  linkTo: string;
  Icon: IconType;
  collapsed: boolean;
}

export default function SidebarItem({
  label,
  linkTo,
  Icon,
  collapsed,
}: SidebarItemProps) {
  const pathname = usePathname();
  return (
    <Link
      href={linkTo}
      className={clsx("sidebar-item body-m", {
        "sidebar-active-item": pathname === linkTo,
      })}
    >
      <Icon size={20} />
      {collapsed ? null : label}
    </Link>
  );
}
