import { getMemberByUerId } from '@/app/actions/membersActions'
import { notFound } from 'next/navigation';
import React, { ReactNode } from 'react'

import { Card } from '@nextui-org/react';
import MemberSideBar from '../MemberSidebar';

export default async function Layout({ children, params }: { children: ReactNode, params: { userId: string } }) {
    const member = await getMemberByUerId(params.userId);
    if (!member) return notFound();
    return (
        <div
            className=' grid grid-cols-12 gap-5 h-[80vh]'
        >
            <div className=' col-span-3'><MemberSideBar member={member} /></div>
            <div className=' col-span-9'><Card className=' w-full mt-10 h-[80vh]'>{children} </Card></div>
        </div>
    )
}
