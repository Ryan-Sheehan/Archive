import Head from "next/head";
import Link from "next/link";


export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ryan's stuff</title>
      </Head>
      
      <div id="main" className="container">

      {props.children}
      </div>
      
      <style jsx>{``}</style>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Avenir", Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #fff;
          color: #000;
        }
        .container {
          height: 100vh;
          width: 100vw;
          display: grid;
          grid-template-columns: 40vw 60vw;
          grid-template-rows: 100vh;
          margin: 0rem;
          position: relative;
          overflow:hidden;
        }
        .green {
          background-color: #006944;
        }
        .blue {
          background-color: #004789;
        }
        .yellow {
          background-color: #FFD54C;
        }
        .orange {
          background-color: #F37121;
        }
        .red {
          background-color: #D51A3C;
        }
        .pink {
          background-color: #F494BE;
        }
        .purple {
          background-color: #85439A;
        }
        .white {
          background-color: #FFFDEB;
        }
        .black {
          background-color: #231F20;
        }
      `}</style>
    </div>
  );
}
