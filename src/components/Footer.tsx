import classes from './Footer.module.scss';

function Footer() {
	return (
		<footer>
			<hr />
			<div className={classes.footer_container}>
				<p>© 2023 Copyright: Mykhailo Ovcharenko</p>
				<p>Made in Ukraine</p>
			</div>
		</footer>
	);
}

export default Footer;
