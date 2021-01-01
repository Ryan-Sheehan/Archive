import React, { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'

import { motion } from 'framer-motion';


 
import Layout from "../components/Layout";
import sanity from "../lib/sanity";

import getEmoji from "../utils/getEmoji";
import Favicon from "../components/Favicon";



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
        emoji: getEmoji()
    }
 
    this.titles = [];
    this.props.projects.forEach((project, i) => {
      
      this.titles.push(<li key={project._id}>
        <Link href="/projects/[slug]" as={`/projects/${project.slug.current}`}>
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
  const {emoji}=this.state;
  return (
    <Layout>
    <Favicon emoji={emoji}/>
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