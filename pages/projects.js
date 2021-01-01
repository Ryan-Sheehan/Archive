import React, { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'

import { motion } from 'framer-motion';


 
import Layout from "../components/Layout";
import sanity from "../lib/sanity";




const query = `*[_type == "projects"] {
  _id,
  name,
  slug,
  ryan[]->{name, image, summary}
}`;




class Projects extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
    }
 
    this.titles = [];
    this.props.projects.forEach((project, i) => {
      
      this.titles.push(<li key={project._id}>
        <Link href="/projects/[id]" as={`/projects/${project.slug.current}`}>
        <a>
        {project.name}
        </a>
        </Link>
        </li>)
      console.log(project.name)
      project.ryan.forEach((ryan, i) => {
        //console.log(ryan.name)
      })

    });

  }

  componentDidMount() {

    
  }

  componentWillUnmount() {
    
    
  }

  render() {
  
  return (
    <Layout>
    <ul>
    {this.titles}
    </ul>
    </Layout>
  );
}
};

export const getStaticProps = async () => {
  
  const projects = await sanity.fetch(query);

  return {
    props: { projects } // will be passed to the page component as props
  };
}

export default Projects;