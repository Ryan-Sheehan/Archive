import React, { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'

import { motion } from 'framer-motion';


 
import Layout from "../../components/Layout";
import sanity from "../../lib/sanity";



const projectsQuery = `*[_type == "projects"] { _id,slug }`;


const singleProjectQuery = `*[_type == "projects" && slug.current == $slug] {
  _id,
  name,
  slug,
  ryan[]->{
    _id,
    name, 
    image, 
    summary
  }
}[0]`;




class Project extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
    }
 


    this.elements = [];
    this.props.project.ryan.forEach((item) => {
      this.elements.push(<li key={item._id}>{item.name}</li>)
    })
    

  }

  componentDidMount() {

    
  }

  componentWillUnmount() {
    
    
  }

  render() {
  
  return (
    <Layout>
    <ul>
    {this.elements}
    </ul>
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