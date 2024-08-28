import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fran Colpitt - Do You Really Believe That - Archive</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Fran Colpitt - Do You Really Believe That - Archive" />
      
      <main>
        <div className="hero">
          <img src="https://via.assets.so/img.jpg?w=400&h=400&tc=black&bg=#cecece&t=Placeholder" alt="Fran Colpitt" />
          <div className="links">

            <p className="description">
              An Online Archive of the work of Fran Colpitt.
            </p>
            <a href='/lajolla.html'>La Jolla 1983</a>
            <a href='/mccracken.html'>McCracken</a>
            <a href='/novros.html'>Novros</a>
            <a href='/truitt.html'>Truitt</a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
