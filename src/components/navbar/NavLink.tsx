"use client"
import { NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type props = {
    href: any,
    label: String,

}

export default function NavLink({ href, label }: props) {
    const pathname = usePathname()
    return (
        <NavbarItem isActive={pathname === href} as={Link} href={href} >

            {label}

        </NavbarItem>
    )
}
