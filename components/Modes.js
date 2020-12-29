import GalleryIcon from "../pages/svg/gallery.svg"
import ListIcon from "../pages/svg/list.svg"
import modeStyles from "../styles/mode";
import {Fragment, useEffect, useState} from "react";

const Modes = ({mode, setMode, popup, setPopup}) => {
	

	
	const handleChange = (event) => {
    	setPopup(!popup);
  	}

  	useEffect(() => console.log(), [mode, popup]);


	return(
		<Fragment>
		<label className={mode === "gallery" ? "checkbox-open":"checkbox-closed"}>
            <input
              type="checkbox"
              
              checked={popup}
              onChange={handleChange}
            /> Info on hover
            
        </label> 
	<div className="mode-menu">
	<div className={mode === "gallery" ? "mode mode-selected" : "mode mode-not-selected"} onClick={() => setMode("gallery")}>
      <GalleryIcon height={40} width={40}/>
      </div>
      <div className={mode === "list" ? "mode mode-selected" : "mode mode-not-selected"} onClick={() => setMode("list")}>
      <ListIcon height={40} width={40}/>
      </div>
      
      </div>
      <style jsx>{modeStyles}</style>
      </Fragment>
	);
};

export default Modes;