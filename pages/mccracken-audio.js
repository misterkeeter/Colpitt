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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Pzy07jzjlQc?si=xihzfWXrfockKndW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="info">

              <h3>John McCracken  #6969  5.28.80</h3>
              <p>Interview with the artist John McCracken for Colpitt's dissertation <i>Critical Issues of Minimal Art</i>(University of Southern California, 1982), which later became the seminal publication: <i>Minimal Art: The Critical Perspective</i> (UMI Research Press, 1990). Courtesy Frances Colpitt papers, 1932-2022, Archives of American Art, Smithsonian Institution and Mary Colpitt, Executor Frances Jean Colpitt Estate.</p>
              <h5>Side 1: 33:33</h5>
              <p>Colpitt presents her working ideas on the crisis of criticism evidenced in Minimalism and Conceptual art weaving a brief background trajectory through dialogues on artists such as Jackson Pollock, Barnett Newman, and Mark Rothko. <br></br>On the seminal Primary Structures show and Minimalism</p>
              
              <h5>Side 2: 22:43 – 34:00 </h5>
              <p>On being psychically grounded and its relationship to his process         </p>
 
            </div>
        </div>
      </mainaudio>

      <Footer />
    </div>
  )
}
