import Head from "next/head";
import Link from "next/link";


export default function Layout(props) {
  return (
    <div style={{overflow: "hidden"}}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ryan's stuff</title>
      </Head>
      
      
      {props.children}
      
      
     <style jsx global>{`
        body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transition-duration: 1s;
          color: #000;
          position: relative;
        }
      `}</style>
    </div>
  );
}
