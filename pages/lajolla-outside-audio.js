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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3woHZ-ZjYjA?si=Y9cIA4Zl0qdBGmkj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div className="info">  
            <h3>Dr. Frances Colpitt  #6978 01.83</h3>
            <br></br>
            <h5>“An Outsider's Perspective on the Permanent Collection.” La Jolla Museum of Contemporary Art [now: MCASD], January 1983.</h5><p> Courtesy Frances Colpitt papers, 1932-2022, Archives of American Art, Smithsonian Institution and Mary Colpitt, Executor Frances Jean Colpitt Estate.</p>
            <p>Frances Colpitt delivered two lectures at the La Jolla Museum of Contemporary Art, now the Museum of Contemporary Art San Diego. Delivered six months apart, Colpitt responds to the museum’s esteemed collection of art from 1950 beginning with a modernist historical overview situating the collection in her introductory lecture “An Outsider's Perspective on the Permanent Collection,” (January 1983), commencing with a more nuanced critical reflection six months later in “Toward an Understanding of Issues in 20th Century Art: A New Viewpoint on the Permanent Collection,” (June 1983). Both lectures are now archived at the Archives of American Art, Smithsonian Institution, Washington D.C.</p>
          </div>
        </div>
      </mainaudio>

      <Footer />
    </div>
  )
}
