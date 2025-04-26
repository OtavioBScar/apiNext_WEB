import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <p className="text-bold text-2xl">Olá mundo!</p>
      <nav className="flex flex-col">
        <Link href='/contact'>Contato</Link>
        <Link href='/todo'>To do list</Link>
      </nav>
    </div>
  );
}
