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
      
      
     
    </div>
  );
}
