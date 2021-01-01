import infoStyles from "../styles/info";
import ReactMarkdown from 'react-markdown'
import imageUrlFor from "../utils/imageUrlFor";
import Link from "next/link";

export default function Description({info, mode}) {
  
  return mode === "gallery" ? 
  	
  	<div key={info._id} className="gallery-info">
  	<img className="gallery-info-image"
        src={imageUrlFor(info.image).width(800)}
        width="400"
        height={400 / info.imageAspect}
    />
   	<div className="gallery-info-text">
   	<div className="info-name">{info.name}</div>
   	<div className="info-desc">{info.summary}</div>
   	<div className="info-date">{info.date.split("-")[0]}</div>
   	</div>
   	<style jsx>{infoStyles}</style>
   	</div>

  	:

   	<div key={info._id}>
   	<div className="info-name">{info.name}</div>
   	<div className="info-desc">{info.summary}</div>
   	

    <Link href="/projects/[slug]" as={`/projects/${info.projects.slug.current}`}>
        <a className="info-link">
        <span className="info-link-hover">
        go to project →
        </span>
        </a>
    </Link>
    <div className="info-date">{info.date.split("-")[0]}</div>
   	<style jsx>{infoStyles}</style>
   	</div>
   	;
}
