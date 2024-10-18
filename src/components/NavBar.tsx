'use client';
import React, { useState } from "react";
import {  Menu, MenuItem,  } from "./ui/navbar-menu";
import { cn } from "@/lib/utilis";
import Link from "next/link";
import { useTheme } from "next-themes"
 


const NavBar = ({ className }: { className?: string }) => {
  const { setTheme } = useTheme();
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
       className={cn("top-1 inset-x-0 max-w-3xl mx-auto z-50", className)}
    >
        <Menu setActive={setActive}> 
          
          <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item ="Home">
          </MenuItem>
          </Link>
          <Link href={"/about"}>
          <MenuItem setActive={setActive} active={active} item = "About Me">
          </MenuItem></Link>
          <Link href={"/skills"}>
          <MenuItem setActive={setActive} active={active} item = "Skills">
          </MenuItem></Link>
          <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item = "Contact">
         
          </MenuItem></Link>
        </Menu>
    </div>
   
  )
}

export default NavBar

