import { auth, signOut } from "@/auth";
import authConfig from "@/auth.config";
import { Button } from "@nextui-org/button";


export default async function Home() {

  const session = await auth();
  return (
    <div className=" flex justify-center flex-col gap-10 m-20">
      {session ? (

        <div>
          <pre>
            {JSON.stringify(session, null, 2)}
          </pre>
          <form action={async () => {
            'use server';
            await signOut();
          }}><Button color="primary" variant="bordered" type="submit">Sign Out</Button></form>
        </div>
      ) : (

        <div>not signed in </div>
      )}
      <h1 className=" text-3xl"> this is the Home page</h1>
    </div>
  );
}
