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
              <h5>Side 1: 33:33</h5>
              <p>Colpitt working thru ideas, crisis of criticism minimalism/conceptual, 
              dialogue thru: Pollock, Newman, Rothko, and minimalism, Primary Structures Show </p>
              
              <h5>Side 2: 22:43 – 34:00 </h5>
              <p>McCracken psychically grounded (Egyptian pyramid example with a soft Colpitt "you don’t really think that")
              nice discussion of McCracken process: psychic, visualizes sculptures before, into process of planks
              other works: crystal like pieces and paintings/process
              </p>
 
            </div>
        </div>
      </mainaudio>

      <Footer />
    </div>
  )
}
