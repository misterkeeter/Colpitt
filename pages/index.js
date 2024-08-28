import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fran Colpitt - Do You Really Believe That - Archive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Fran Colpitt Archive - Do You Really Believe That" />
      
      <main>
        <div className="hero">
          <img src="https://via.assets.so/img.jpg?w=600&h=800&tc=black&bg=#cecece&t=Placeholder" alt="Fran Colpitt" />
          <div className="links">

            <p className="description">
              An Online Archive of the work of Fran Colpitt.
            </p>
            <Link  href='/lajolla-audio'>La Jolla 1983</Link>

            <Link href="/mccracken-audio">McCracken</Link>
            {/* <a href='/mccracken-audio.js'>McCracken</a> */}
            <Link  href='/novros-audio'>Novros</Link>
            <Link href='/truitt-audio'>Truitt</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
