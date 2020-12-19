import Head from "next/head";
import Link from "next/link";


export default function Layout(props) {
  return (
    <div style={{overflowY: "hidden"}}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ryan's stuff</title>
      </Head>
      
      

      {props.children}
      
      
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
        

      `}</style>
    </div>
  );
}
