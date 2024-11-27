import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

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
      
      <mainaudio>
        <div className="tube">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pRNAAtsfy80?si=jctEMfh1BKd6R6mP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <div className="info">

          <h3>David Novros  #6973 12.14.81</h3>
          <p>Interviews with the artist David Novros for Colpitt's dissertation <i>Critical Issues of Minimal Art</i> (University of Southern California, 1982), which later became the seminal publication: <i>Minimal Art: The Critical Perspective</i> (UMI Research Press, 1990). Courtesy Frances Colpitt papers, 1932-2022, Archives of American Art, Smithsonian Institution and Mary Colpitt, Executor Frances Jean Colpitt Estate.</p>
          <h5>Side 2: 3:19 – 8:21</h5>
          <p>On seeing and reading Jackson Pollock and influences on Minimalists discussing, in particular, Donald Judd, Frank Stella, and Barnett Newman.
          <br></br>
          On the notion of line, design, light, contrast, planes, and “false” perceptions.</p>
          <h5>11:54 – 14:08</h5>
          <p>“And there we are at formalism”––on critics, art writing, and painting.</p>


          <h3>David Novros  #C6974  No Date</h3>
          <h5>Side 1: 6:00 –  43:00</h5>
          <p>Architecture, wall painting without walls, and the importance of right angles.
          <br></br>
          “Not a question of style but of perception”––on illusion, reality, and abstraction.</p>
 
          <h5>Side 2: 00:00 – 05:57</h5>
          <p>On post-modernism and the problem with “isms”  </p>
          <h5>10:10 – 14:24</h5>
          <p>On Minimalism being the least literary yet becoming the most literary giving birth to conceptual work and writing.</p>

        </div>
        </div>
      </mainaudio>

      <Footer />
    </div>
  )
}
