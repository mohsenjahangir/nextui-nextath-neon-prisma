import { getMemberPhotosByUserId } from '@/app/actions/membersActions'
import { CardBody, CardHeader, Divider } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'

export default async function page({ params }: { params: { userId: string } }) {
    const photos = await getMemberPhotosByUserId(params.userId);
    return (
        <>
            <CardHeader className=' text-2xl text-secondary font-semibold'>
                Photos
            </CardHeader>
            <Divider />
            <CardBody>
                <div className=' grid grid-cols-5 gap-3'>
                    {photos && photos.map(photo => (
                        <div key={photo.id}>
                            <Image
                                width={300}
                                height={300}
                                src={photo.url}
                                alt='image of member'
                                className='object-cover aspect-square rounded-xl'
                            />
                        </div>
                    ))}
                </div>
            </CardBody>
        </>
    )
}
