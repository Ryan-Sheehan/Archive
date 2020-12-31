
import Head from "next/head";
import Link from "next/link";
import Div100vh from 'react-div-100vh'


export default function Layout(props) {
  return (
    
    <div style={{overflow: "hidden"}}>
    
      <Head>

        <title>Ryan's stuff</title>
        
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Ryan's stuff"/>
        <meta name="description" content="They said I needed to put stuff here for search enginer optimization."/>
        

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://archive-ten.vercel.app/"/>
        <meta property="og:title" content="Ryan's stuff"/>
        <meta property="og:description" content="They said I needed to put stuff here for search enginer optimization."/>
        <meta property="og:image" content={"/epicenter.png"}/>
        
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://archive-ten.vercel.app/"/>
        <meta property="twitter:title" content="Ryan's stuff"/>
        <meta property="twitter:description" content="They said I needed to put stuff here for search enginer optimization."/>
        <meta property="twitter:image" content={"/epicenter.png"}/>

      </Head>
      

      
      <Div100vh>
      {props.children}
      </Div100vh>
      
      
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
