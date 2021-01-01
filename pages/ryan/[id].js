import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import sanity from "../../lib/sanity";
import listStyles from "../../styles/list";
import imageUrlFor from "../../utils/imageUrlFor";
import { motion } from 'framer-motion';

const ryansQuery = `*[_type == "ryan"] { _id }`;

const singleRyanQuery = `*[_type == "ryan" && _id == $id] {
  _id,
  name,
  image,
}[0]
`;



const Ryan = ({ ryan }) => {
  
  return (
    <Layout>
      <div className="ryan">
        <div>
       
        <motion.div initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .4
    }
  },
}}>
         <img src={imageUrlFor(ryan.image).height(500)} />
          </motion.div>
        </div>
        <div>
          <h1 className="title">{ryan.name}</h1>
          <h2>Related movies</h2>

        </div>
      </div>
      <style jsx>{`
        .ryan {
          margin: 1rem;
          display: grid;
          grid-gap: 1rem;
          grid-template-columns: 1fr 4fr;
        }

        .ryan .title {
          font-size: 10vw;
          line-height: 1em;
          margin: 0;
        }

        .ryan__header {
          clear: both;
          overflow: hidden;
          padding: 0.5rem;
        }

        .ryan__header > h1 {
          font-size: 3rem;
          line-height: 1em;
          margin: 1rem 0 0 0;
          padding: 0;
        }

        .ryan__header > img {
          display: block;
          width: 20vw;
          max-width: 20rem;
          height: auto;
          float: left;
          margin-right: 0.5rem;
        }

        .link {
          cursor: pointer;
        }

        .ryan .list {
          grid-template-columns: repeat(auto-fit, minmax(100px, 180px));
        }
      `}</style>
      <style jsx>{listStyles}</style>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on ryans
  const ryans = await sanity.fetch(ryansQuery);
  const paths = ryans.map(ryan => ({

    params: { id: ryan._id }
  }));
  //console.log(paths)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
export const getStaticProps = async ({ params }) => {
  const ryan = await sanity.fetch(singleRyanQuery, { id: params.id });
  //console.log(params)
  //console.log(ryan)
  return { props: { ryan } };
};

export default Ryan;
