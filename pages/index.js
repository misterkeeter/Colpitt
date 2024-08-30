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

      <Header title="Do you Really Believe That?" desc="Dr. Frances Colpitt Audio Archive" />
      
      <main>
        <div className="hero">
          <img src="fran.jpg" alt="Fran Colpitt" />
          <div className="links">

            <p className="description">
            Do you really believe that? is conceived in honor and celebration of Dr. Frances Colpitt, her renowned scholarship, critical pedagogy and unyielding commitment to teaching along with her profound respect for artists, their work, and critics alike. The exhibition is guided by themes coalesced from Colpitt’s work over the course of her career with a focus on abstraction, Minimalism and Conceptual art. They illuminate her scholarship and curatorial practice, and also emphasize the significant impact and enduring legacy of her mentorship of artists in Texas. 
            </p>
            <div className="toAudio"> 
              <Link href="/mccracken-audio">McCracken Interview 1980</Link>
              <Link  href='/novros-audio'>Novros Interview 1981</Link>
              <Link href='/truitt-audio'>Truitt Interview 1981</Link>
              <Link  href='/lajolla-audio'>New Viewpoints @ La Jolla 1983</Link>
              <Link  href='/lajolla-outside-audio'>Outside Views @ La Jolla 1983</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
