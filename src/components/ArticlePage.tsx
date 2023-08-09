import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CardContext } from '../store/card-context';
import classes from './ArticlePage.module.scss';

//Component the show more detailed information about current element

interface currentCard {
	imageUrl: string;
	publishedAt: string;
	title: string;
	summary: string;
	id: any;
}

const ArticlePage: React.FC = () => {
	const { id } = useParams();
	const { data } = useContext<any>(CardContext);

	const elementDetail = data.filter((element: any) => element.id == id)[0];

	const imgSource: string = elementDetail.imageUrl;

	return (
		<div
			className={classes.article_container}
			style={{
				backgroundImage: `url(${imgSource})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center'
			}}
		>
			<div className={classes.article_text_container}>
				<h4 className={classes.article_header}>{elementDetail.title}</h4>
				<p className={classes.article_summary}>{elementDetail.summary}</p>
				<Link to="/" className={classes.back__home__link}>
					<h5>Back to homepage</h5>
				</Link>
			</div>
		</div>
	);
};

export default ArticlePage;
