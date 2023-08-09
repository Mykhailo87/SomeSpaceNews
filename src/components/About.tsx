import classes from './About.module.scss';
import myPhoto from '../images/myPhoto.jpg';

function About() {
	return (
		<div className={classes.about_section}>
			<h1>About</h1>
			<div className={classes.about_main_part}>
				<img src={myPhoto} alt="it is me" />
				<div className={classes.about_text_information}>
					<div className={classes.about_me}>
						<h3>About Me</h3>
						<p>
							It is About section amd this is Me who moving through all this modern web technologies
							trying to learn something new and get useful information to improve my code and do high
							quality web application. And I hope all this efforts once give me an opportunity to be a
							part of developers team in real life project.
						</p>
					</div>
					<hr />
					<div className={classes.about_project}>
						<h3>About this project</h3>
						<p>
							This web application is built only for studying purpose with using Spaceflight News API as
							source of information.The main idea of this web application is to get list of 100 latest
							news about space and enable to user to read more detailed information about current news.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
