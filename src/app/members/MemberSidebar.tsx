"use client"

import calculateAge from '@/lib/util'
import { Button, Card, CardBody, CardFooter, Divider, Image } from '@nextui-org/react'
import { Member } from '@prisma/client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
    member: Member
}

export default function MemberSideBar({ member }: Props) {
    const pathname = usePathname();
    const basePath = `/members/${member.userId}`
    const navLinks = [
        { name: 'profile', href: `${basePath}` },
        { name: 'photos', href: `${basePath}/photos` },
        { name: 'chat', href: `${basePath}/chat` },
    ]
    return (
        <Card className='w-full items-center  mt-10 h-[80vh]'>
            <Image
                src={member.image || '/images/user1.jpg'}
                width={200} height={200} alt='profile main image' className=' rounded-full mt-6 aspect-square object-cover' />
            <CardBody >
                <div className=' flex flex-col items-center'>
                    <div className=' text-2xl'>{member.name}, {calculateAge(member.dateOfBrith)}</div>
                    <div className=' text-sm text-neutral-500'>
                        {member.city}, {member.country}
                    </div>
                </div>
                <Divider className=' my-3' />
                <nav className=' flex flex-col p-4 ml-4 text-2xl gap-4'>
                    {navLinks.map(link => (
                        <Link href={link.href} key={link.name}
                            className={` rounded block ${pathname === link.href ? ' text-secondary' : ' hover:text-secondary/50'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </CardBody>
            <CardFooter>
                <Button as={Link} href='/members' fullWidth variant='bordered' color='secondary'>Go back</Button>
            </CardFooter>

        </Card>
    )
}
