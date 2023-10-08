//'use client'
//import { useRouter } from 'next/navigation'
 
export default function Page({ params }: { params: { slug: string } }) {
  //const router = useRouter()
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          The Url Parameter Is &nbsp;
          <code className="font-mono font-bold">{params.slug}</code>
      </p>
      </div>
      <div className="fixed top-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <h2 className="mb-3 text-2xl font-semibold"><center>Hello ;)</center><br/> This is "{params.slug}"</h2>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          
      </div>
</main>
);
}