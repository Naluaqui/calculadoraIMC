import React from 'react'
import imgHome from '@/assets/imgHome.jpg' 

function Home() { 
  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center"
        }}
      ></div>

      <div>
        <div
          style={{
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h2>Seja bem vinda</h2>
          <p>Expresse aqui seus pensamentos e opiniões :D</p>
        </div>

        <div
          style={{
            width: "80vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <img
          src={imgHome}
          alt="filhote de cachorro"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover"
            }}
            />
        </div>
      </div>
    </>
  )
}

export default Home