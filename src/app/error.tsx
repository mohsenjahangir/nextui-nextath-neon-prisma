'use client'
import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { BiError } from "react-icons/bi";



export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {


    return (
        <div className=" flex items-center justify-center vertical-center">
            <Card className=" w-2/5 mx-auto">
                <CardHeader className=" flex flex-col justify-center items-center" >
                    <div className=" flex flex-row gap-2 items-center  text-secondary">
                        <BiError size={30} />
                        <h1 className=" text-3xl font-semibold">Error</h1>
                    </div>

                </CardHeader>
                <CardBody>
                    <div className=" flex text-danger justify-center">{error.message}</div>

                </CardBody>
                <CardFooter className=" flex justify-center "><Button onClick={() => reset()} variant="bordered" color="secondary" >Try again</Button></CardFooter>
            </Card>
        </div>
    )
}