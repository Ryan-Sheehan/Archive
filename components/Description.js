import infoStyles from "../styles/info";
import ReactMarkdown from 'react-markdown'

export default function Description({info}) {
  return (
   <div key={info._id}>
   <div className="info-name">{info.name}</div>
   <div className="info-desc">{<ReactMarkdown>{info.summary}</ReactMarkdown>}</div>
   <div className="info-date">{info.date.split("-")[0]}</div>
   <style jsx>{infoStyles}</style>
   </div> 
  );
}
