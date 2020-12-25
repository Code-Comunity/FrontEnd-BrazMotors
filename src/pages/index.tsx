import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Index() {

  const Router = useRouter()

  useEffect(()=> {
    function Redirecionar(){
      let video = document.getElementById('video')
     

      video.addEventListener('ended', () => {
       Router.push('/home')
      })
    }

    Redirecionar()
  },[])

  return (
    <div>
      <Head>
        <title>Brazmotors</title>
      </Head>

      <main>
        <video id="video" width="100%" height="100%" autoPlay>
          <source src="https://video.wixstatic.com/video/ff6b3b_88fd5adc91544b28a0d0807a3c5d1060/480p/mp4/file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
      </main>
    </div>
  )
}
