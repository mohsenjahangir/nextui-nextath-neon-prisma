import { getMemberByUerId } from '@/app/actions/membersActions'
import { CardBody, CardHeader, Divider } from '@nextui-org/react';
import { notFound } from 'next/navigation'
import React from 'react'

export default async function MemberDetailedPage({ params }: { params: { userId: string } }) {
    const member = await getMemberByUerId(params.userId)
    if (!member) return notFound();
    return (
        <>
            <CardHeader className=' text-2xl text-secondary font-semibold'>
                Profile
            </CardHeader>
            <Divider />
            <CardBody>{member.description}</CardBody>
        </>
    )
}
