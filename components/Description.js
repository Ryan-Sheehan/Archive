import infoStyles from "../styles/info";
import ReactMarkdown from 'react-markdown'
import imageUrlFor from "../utils/imageUrlFor";

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
   	<div className="info-desc">{<ReactMarkdown>{info.summary}</ReactMarkdown>}</div>
   	<div className="info-date">{info.date.split("-")[0]}</div>
   	</div>
   	<style jsx>{infoStyles}</style>
   	</div>

  	:

   	<div key={info._id}>
   	<div className="info-name">{info.name}</div>
   	<div className="info-desc">{<ReactMarkdown>{info.summary}</ReactMarkdown>}</div>
   	<div className="info-date">{info.date.split("-")[0]}</div>
   	<style jsx>{infoStyles}</style>
   	</div>
   	;
}
