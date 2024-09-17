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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mpP9daUwkFc?si=-t1s4dp5FoIRGHaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" referrerpolicy="strict-origin-when-cross-origin" ></iframe>


          <div className="info">
            <h3>Anne Truitt  #6975  11.21.81</h3>
            <p>Interview with the artist Anne Truitt for her dissertation Critical Issues of Minimal Art (University of Southern California, 1982), which later became the seminal publication: Minimal Art: The Critical Perspective (UMI Research Press, 1990). Courtesy Frances Colpitt papers, 1932-2022, Archives of American Art, Smithsonian Institution and Mary Colpitt, Executor Frances Jean Colpitt Estate.</p>
            <h5>Tape 1, Side 1: 5:30 – 30:26</h5>
            <p>On catalysts, influences (Ad Rheinhart and Barnett Newman), the development of her process from handmade to fabrication, and the evolution of her work in color and form.
            <br></br>
            On her independent nature and her association and disassociation with Minimalism.
            <br></br>
            On Minimalist characteristics, theory and Colpitt’s thesis.</p>

            <h5>Tape 1, Side 1: 35:14 – 36:14</h5>
            <p>From Colpitt sharing her start as a painter wanting to make a perfect painting to Truitt discussing her distillation process and the importance of what an artist does.</p>
            <h5>Tape 1, Side 1: 42:48 – 45:43</h5>
            <p>On color (with reference to John McCracken)</p>
            
            <h5>Tape 1, Side 2: 14:00 – 45:00</h5>
            <p>Further discussion on color, absorption, and setting free the work and the color, and in relation to other minimalist’s use of color and aspects of gravity. 
            <br></br>
            On floating sculptures and gravity in her show at the André Emmerich Gallery (1980), with references to her landmark 1963 gallery show.
            <br></br>
            Comments on the art world and art stars, quality and value, and formalist criticism, moving into intention and the mysterious nature of it.
            <br></br>
            Bits on the abstract expressionist Ilya Bolatofsky including the amusing ancedotal story about the artist’s encounter with wild pigs!</p>
            
            <h5>Tape 2, Side 1: </h5>
            <p>On Clement Greenberg and the bold gesture.</p>

          </div>
        </div>
      </mainaudio>

      <Footer />
    </div>
  )
}
