import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Antonio Orozco 2k22</title>
        <meta name="description" content="Hello my name is Antonio, I am a simple programmer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid h-screen place-items-center">
        <div>
          <h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold
              bg-gradient-to-r bg-clip-text  text-transparent
              from-sky-500 via-purple-500 to-indigo-500
              animate-text"
          >
            Antonio Orozco
          </h1>
          <div className="flex gap-2">
            <a href="https://github.com/lk321" className="hover:scale-125">
              <Image src="/assets/github.svg" height={45} width={45} />
            </a>
            <a href="https://twitter.com/iantxd" className="hover:rotate-45">
              <Image src="/assets/twitter.svg" height={45} width={45} />
            </a>
            <a href="https://www.linkedin.com/in/iantonio" className="hover:translate-y-2">
              <Image src="/assets/linkedin.svg" height={45} width={45} />
            </a>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-5 right-10 blur-2xl hover:blur-none">
        <p className="font-mono text-4xl subpixel-antialiased font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">14/1021</p>
      </footer>
    </div>
  );
}
