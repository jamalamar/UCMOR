import React from 'react'
import { SocialIcon } from 'react-social-icons'


export default function Footer () {
	return(
		<footer>

			<section id="contact" class="map">
	          <iframe width="90%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=UCM%2F%20Universidad%20de%20la%20Cuenca%20de%20Morelos%2C%20Rep%C3%BAblica%20de%20Bolivia%2C%20Centro%2C%20Xochitepec%2C%20Morelos%2C%20Mexico+(UCM)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"></iframe>
	          <br />
	          <small>
	            <a href="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=UCM%2F%20Universidad%20de%20la%20Cuenca%20de%20Morelos%2C%20Rep%C3%BAblica%20de%20Bolivia%2C%20Centro%2C%20Xochitepec%2C%20Morelos%2C%20Mexico+(UCM)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"></a>
	          </small>
	        </section>

			<div className="Social-Icons">
				<SocialIcon className="Icon" url="https://www.youtube.com/channel/UCVrhHs-zjgAq5m_VbKhtVPg" target="_blank"/>
				<SocialIcon className="Icon" url="https://www.facebook.com/ucmoficial/" target="_blank"/>
				<SocialIcon className="Icon" url="https://www.instagram.com/ucmor/" target="_blank"/>
				<SocialIcon className="Icon" url="https://twitter.com/UCMcuenca" target="_blank"/>
	        	
	        	<p className="Copyright">Copyright &copy; UCM 2019</p>
			</div>
		   
        </footer>
	)
}
