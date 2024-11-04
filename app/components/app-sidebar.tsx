import { type LucideIcon, Moon, Spade, Sword } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";

interface ISidebarMenu {
  groupName: string;
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
  }[];
}

const items: ISidebarMenu[] = [
  {
    groupName: "Common",
    items: [
      {
        title: "Servants",
        url: "/servants",
        icon: Sword,
      },
      {
        title: "Craft Essences",
        url: "/craft-essences",
        icon: Spade,
      },
      {
        title: "Mystic Codes",
        url: "/mystic-codes",
        icon: Moon,
      },
      {
        title: "Skills",
        url: "/skills",
        icon: Sword,
      },
      {
        title: "Noble Phantasms",
        url: "/noble-phantasms",
        icon: Sword,
      },
      {
        title: "Items",
        url: "/items",
        icon: Spade,
      },
    ],
  },
  {
    groupName: "Constants",
    items: [
      {
        title: "Card Details",
        url: "/card-details",
        icon: Spade,
      },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();
  return (
    <Sidebar>
      <SidebarContent>
        {items.map((group) => (
          <SidebarGroup key={group.groupName}>
            <SidebarGroupLabel>{group.groupName}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={location.pathname === item.url}
                      asChild
                    >
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
