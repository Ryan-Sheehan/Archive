import React, { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'

import { motion } from 'framer-motion';

import imageUrlFor from "../../utils/imageUrlFor";
import checkFile from "../../utils/checkFile";
 
import Layout from "../../components/Layout";
import sanity from "../../lib/sanity";

import projectStyles from "../../styles/projects";


const projectsQuery = `*[_type == "projects"] { _id,slug }`;


const singleProjectQuery = `*[_type == "projects" && slug.current == $slug] {
  _id,
  name,
  writeup,
  slug,
  ryan[]->{
    _id,
    name, 
    image, 
    "imageAspect": image.asset->.metadata.dimensions.aspectRatio,
    summary
  }
}[0]`;



const SIZE = 1000;

class Project extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
    }
 


    this.elements = [];
    this.props.project.ryan.forEach((item) => {
      console.log(item.image)
      this.elements.push(<li key={item._id}>
        <Image src={checkFile(item.image, SIZE)} height={ SIZE / item.imageAspect} width={SIZE} alt={item.name}/>
        </li>)
    })
    

  }

  componentDidMount() {

    
  }

  componentWillUnmount() {
    
    
  }

  render() {
  
  return (
    <Layout>
    <div className={"project-container"}>
    <h1>{this.props.project.name}</h1>
    {this.props.project.writeup}
    <ul className={"project-list"}>
    {this.elements}
    </ul>
    </div>
    <style jsx>{projectStyles}</style>
    </Layout>
  );
}
};

export const getStaticPaths = async () => {
  // Get the paths we want to pre-render based on persons
  const projects = await sanity.fetch(projectsQuery);

  const paths = projects.map(project => ({
    params: { slug: project.slug.current }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {

  const project = await sanity.fetch(singleProjectQuery, { slug: params.slug });
  return { props: { project } };
};


export default Project;