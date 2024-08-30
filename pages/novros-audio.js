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

      <Header title="Do you Really Believe That?" desc="Dr. Frances Colpitt Audio Archive" />
      
      <mainaudio>
        <div className="tube">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/pRNAAtsfy80?si=jctEMfh1BKd6R6mP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <div className="info">

          <h3>David Novros  #6973 12.14.81</h3>
          <h5>Side 2: 3:19 – 8:21</h5>
          <p>FPollock readings and influences on Minimalists, (bit on Greenberg); Judd, Stella, Newman, and notion of line, disegno, “false” into perception, line is not a line, but light, contrast, when does it become a plane? Pollock had it all...</p>
          <h5>11:54 – 14:08</h5>
          <p>On Sheldon Noldelman and art writing, and on painting … "and there we are at formalism"</p>

          <h5>Side 2: 22:43 – 34:00 (will have to fade out)</h5>
          <p>McC psychically grounded (Egyptian pyramid example with a soft FC "you don’t really think that")
          nice discussion of McC process: psychic, visualises sculptures before, into process of planks
          other works: crystal like pieces and paintings/process
          [from gets sound quality 31:30 – 31:44 walking; 33:00–34:00 gets too distant, distorted]</p>

          <h3>David Novros  #C6974  No Date</h3>
          <h5>Side 1: 6:00 –  43:00 (very good for students)</h5>
          <p>Architecture and Novros painting, Park Place shows, how to make wall painting without wall, right angles, and not only formal, metaphors & geometry, 
          RIght angle in relation to Donald Judd’s work
          False issue to make issue between illusion and reality (mini trip through history/art history)
          Mondrian to Judd, DN big misunderstanding on illusion and reality into terminology in painting and sculpture vs. nature and reality
          Abstraction and Giotto everything is abstract, not a question of style but of perception
          Into “isms” and art history and education, etc. </p>
 
          <h5>Side 2: 00:00 – 05:57</h5>
          <p>On post-modernism, DN thinks bs and the “isms” problematic </p>
          <h5>10:10 – 14:24</h5>
          <p>On Minimalism; the least literary became the most literary, theoretical writing that develops out of minimalism and conceptualism in the absence of formalist elements, Judd’s work became most literary––ironic––gave birth to conceptual work and writing, so little to talk about, internally/externally; Specific works in Texas, onto scale and painting, DN scale </p>

        </div>
        </div>
      </mainaudio>

      <Footer />
    </div>
  )
}
