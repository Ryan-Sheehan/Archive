
import sidebarStyles from "../styles/sidebar";

const SidebarHeader = () => {
	return(
		
      <div>
        <div className="sidebar-name">Ryan Sheehan</div>
        <div className="sidebar-bio">An archive of some of the work Ryan has made in no particular order. Click on any piece for more information. Click on the email to copy it. Reach out for anything, I'm currently available to work.</div>
      	<style jsx>{sidebarStyles}</style>
      </div>
      
    );
}

export default SidebarHeader;