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
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </Head>

      <Header title="Do you Really Believe That?" desc="Dr. Frances Colpitt Audio Archive" />
      
      <main>
        <div className="hero">
          <img src="fran.jpg" alt="Fran Colpitt" />
          <div className="links">

            <div className="toAudio"> 
              <Link href="/mccracken-audio">McCracken Interview 1980</Link>
              <Link  href='/novros-audio'>Novros Interview 1981</Link>
              <Link href='/truitt-audio'>Truitt Interview 1981</Link>
              <Link  href='/lajolla-outside-audio'>Outside Views @ La Jolla</Link>
              <Link  href='/lajolla-audio'>New Viewpoints @ La Jolla</Link>
            </div>
          
          </div>
        </div>
        <p className="description">
            <i>Do you really believe that?</i> is conceived in honor and celebration of Dr. Frances Colpitt, her renowned scholarship, critical pedagogy and unyielding commitment to teaching along with her profound respect for artists, their work, and critics alike. The exhibition is guided by themes coalesced from Colpitt’s work over the course of her career with a focus on abstraction, Minimalism and Conceptual art. They artworks and ephemera illuminate her scholarship and curatorial practice, and also emphasize the significant impact of her mentorship has had onf artists and the arts community in Texas.<br></br>
            <br></br>
            Highlighting the role of ephemera,  <i>Do you really believe that?</i> offers a composite understanding to Dr. Frances Colpitt’s study of contemporary art. The inclusion of these archival materials provides context to her work, illustrating her contributions and interactions within the art community, her influence on emerging artists, and her critical and nurturing support of artists over the course of their careers. The Art Galleries at TCU are thankful to partner with wonderful institutions like the Judd Foundation, Archives of American Art at the Smithsonian Institution, Artpace San Antonio, Los Angeles County Museum of Art, Art, Design & Architecture Museum at UCSB, and Mary Colpitt, Executor of the Frances Jean Colpitt Estate, to bring glimpses of Dr. Colpitt’s history into conversation with the artworks in show.
            </p>
      </main>

      <Footer />
    </div>
  )
}
