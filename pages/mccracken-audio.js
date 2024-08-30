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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/TFcoAsqbPD0?si=i1ng4S_0NJa_z4GR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="info">

              <h3>John McCracken  #6969  5.28.80</h3>
              <h5>Side 1: 33:33</h5>
              <p>FC working thru ideas, crisis of criticism minimalism/conceptual, 
              dialogue thru: Pollock, Newman, Rothko, and minimalism, Primary Structures Show </p>
              
              <h5>Side 2: 22:43 – 34:00 (will have to fade out)</h5>
              <p>McC psychically grounded (Egyptian pyramid example with a soft FC "you don’t really think that")
              nice discussion of McC process: psychic, visualises sculptures before, into process of planks
              other works: crystal like pieces and paintings/process
              [from gets sound quality 31:30 – 31:44 walking; 33:00–34:00 gets too distant, distorted]</p>
 
            </div>
        </div>
      </mainaudio>

      <Footer />
    </div>
  )
}
