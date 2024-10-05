import React from "react";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, Link, Button } from "@nextui-org/react";
import { GiHamShank, GiMatchTip } from "react-icons/gi";
import NavLink from "./NavLink";
import { auth } from "@/auth";
import UserMenu from "./UserMenu";

export default async function TopNav() {
  const session = await auth();
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar disableAnimation isBordered maxWidth="2xl" className=" px-3.5  bg-gradient-to-r from-pink-500 to-purple-800" classNames={{
      item: [
        "text-white",
        "text-xl",
        'data-[active=true]:text-yellow-200'
      ]
    }} >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent as={Link} href="/" className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <GiMatchTip size={40} className="text-neutral-950" />
          <p className="font-bold text-inherit text-white text-xl ">Next</p>
          <p className="font-bold text-inherit text-neutral-950 text-xl ">Practice</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as={Link} href="/" className="hidden sm:flex  gap-4" justify="start">
        <NavbarBrand>
          <GiMatchTip size={40} className="text-neutral-950" />
          <p className="font-bold text-inherit text-white text-2xl">Next</p>
          <p className="font-bold text-inherit text-neutral-950 text-2xl">Practice</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="uppercase   hidden sm:flex  ">
        <NavLink href="/messages" label="messages" />
        <NavLink href="/lists" label="lists" />
        <NavLink href="/members" label="members" />
      </NavbarContent>

      <NavbarContent justify="end" >
        {session?.user ? (
          <UserMenu user={session.user} />
        ) : (
          <>
            <Button as={Link} href="/login" variant="bordered" className="flex text-white">
              Login
            </Button>
            <Button as={Link} href="/register" variant="bordered" className="text-white hidden lg:flex"  >

              Sign Up

            </Button>
          </>
        )}

      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="/#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
