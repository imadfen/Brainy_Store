import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="w-full h-full mt-10 flex flex-col justify-center items-center gap-4">
      <Image src="/icons/brainyError.png" alt="" width={350} height={350} />
      <div>
        <h2 className="text-center text-3xl font-extrabold text-brainy-color">Not Found</h2>
        <p className="font-bold">Could not find requested page!</p>
      </div>
      <Link href="/" className="text-lg font-bold text-blue-500 underline">Return Home</Link>
    </div>
  )
}