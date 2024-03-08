import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/home-fun-banner-mobile.png"
        alt="Vercel Logo"
        className="dark:invert"
        width={300}
        priority
            />
    </main>
  );
}
