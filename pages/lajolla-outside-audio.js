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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/K6RsE4ScPlM?si=GU-PrYQjl93IaVac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <div className="info">  
            <h3>Dr. Frances Colpitt  #6987 06.83</h3>
            <h5>New Viewpoints Lecture atLa Jolla Museum, now Museum of Contemporary Art San Diego</h5>
            <p>“Do You Really Believe That?” highlights the role of ephemera in understanding Dr. Frances Colpitt’s study of contemporary art. The inclusion of these archival materials provides context to her work, illustrating her interactions with the art community and her influence on emerging artists. The Art Galleries at TCU are thankful to partner with wonderful institutions like the Judd Foundation and the Archives of American Art at the Smithsonian Institution to bring glimpses of Dr. Colpitt’s history into conversation with the art of the show.</p>
          </div>
        </div>
      </mainaudio>

      <Footer />
    </div>
  )
}
