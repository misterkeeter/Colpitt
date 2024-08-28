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

      <Header title="Fran Colpitt Archive - McCracken Audio" />
      
      <mainaudio>
        <div className="tube">
                <iframe src="https://www.youtube.com/embed/70WZjqO8aLE?si=PfeN9HX9AbORUpDq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


            <div className="links">

                <p>Context Information</p>
                <p>another link maybe?</p>
            </div>
        </div>
      </mainaudio>

      <Footer />
    </div>
  )
}
