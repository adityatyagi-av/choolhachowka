"use client"
import React from "react";

import { Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem, Button} from "@nextui-org/react";

import Image from "next/image.js";
import Link from "next/link";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    
    {
      "id":1,
      "link":"/",
      "name":"Home"
    },
    {
      "id":2,
      "link":"/about",
      "name":"About"
    },
    {
      "id":4,
      "link":"/services",
      "name":"Services"
    },
    {
      "id":3,
      "link":"/contact",
      "name":"Contact Us"
    },
    {
      "id":4,
      "link":"/login",
      "name":"Login"
    },
    {
      "id":5,
      "link":"/register",
      "name":"Register"
    },

  ];

  return (
    <Navbar 
    maxWidth="xl"
    onMenuOpenChange={setIsMenuOpen} 
    className="shadow-md pb-1.5"
    >
    
      <NavbarContent className="flex ">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="mb-1.5">
          <Image src="/choolhachowka.png" width={130} height={90} alt="image"/>
          
        </NavbarBrand>
      </NavbarContent>
    

      <NavbarContent className="hidden sm:flex mt-3 gap-9 mb-2" justify="center">
        
      <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive className="text-yellow-800">
          <Link href="/services" aria-current="page">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground"  href="/contact">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden h-[18px] lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="/register" variant="flat">
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={item.id}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
