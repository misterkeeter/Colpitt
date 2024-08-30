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
            <h5>Tape 1, Side 1: 5:30 – 30:26</h5>
            <p>Catalysts, wooden constructions, Rheinhart, and Newman, that pivoted her work. Discusses how she developed process from handmade to fabrication. Evolved into counterpointing color and form. Discussions of other artists yet her independent way of life and work into role of the artist and formalist perspectives and relevancy.
            Minimalist characteristics and theory; referential and non-referential and perspectives; Truitt’s disassociation yet Luminists; more intuitive and personal into theory of many minimalists and FC’s argument.</p>

            <h5>Tape 1, Side 1: 35:14 – 36:14</h5>
            <p>FC talks about starting off as a painter and wanting to make perfect painting Truitt on distillation process and importance of what artist does</p>
            <h5>Tape 1, Side 1: 42:48 – 45:43</h5>
            <p>John McCracken vs. Truitt, Truitt on color (turns out similar to McCracken in terms of ‘pure color’ as well as visualising;)</p>
            
            <h5>Tape 1, Side 2: 14:00 – 45:00</h5>
            <p>On color, absorption, setting free the work & color, in relation to other minimalist’s use of color, further into aspects of gravity, her latest show and use of color, onto art world and art stars, quality and value, onto formalist criticism into whether intention comes through and mysterious nature of it … goes on and think worth letting run bc fun ancedotal bits mentioning AbEx Bolatofsky, seeing one at LaJolla, Fran's mentor Susan Larson, Black Mountain, and a story about almost being eaten by wild pigs.</p>
            
            <h5>Tape 2, Side 1: </h5>
            <p>Begins with Clem and the bold gesture</p>

          </div>
        </div>
      </mainaudio>

      <Footer />
    </div>
  )
}
