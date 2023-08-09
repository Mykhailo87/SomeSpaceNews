import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CardComponent.module.scss';
import akar from '../images/akar.png';
import ArrowRight from '../images/Arrow - Right.png';

//Single card component

interface CardProps {
	imageUrl: string;
	publishedAt: string;
	title: string | JSX.Element[];
	summary: string;
	id: any;
}

const CardComponent: React.FC<CardProps> = ({ title, publishedAt, summary, imageUrl, id }) => {
	//Describing(converting it from numbers to words) month

	const months: Array<string> = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const dateString: string = publishedAt.substring(0, publishedAt.indexOf('T'));
	const dateArr: Array<string> = dateString.split('-');
	const date: string = ` ${months[+dateArr[1] - 1]} ${dateArr[2]}th, ${dateArr[0]}`;

	//Rendering only part of full text,depends on the length

	const shortSummary: string =
		summary.split(' ').length > 20 ? `${summary.split(' ').slice(0, 20).join(' ')}...` : summary;

	return (
		<div className={classes.card__container}>
			<div className={classes.img__container}>
				<img src={imageUrl} alt="somePicture" className={classes.card__img} />
			</div>
			<div className={classes.card__text}>
				<p>
					<img src={akar} alt="akar" />
					{date}
				</p>
				<h3>{title}</h3>
				<p style={{ font: '3vw' }}>{shortSummary}</p>

				<Link to={`/${id}`} className={classes.card__link}>
					<h5>Read more</h5>
				</Link>
			</div>
		</div>
	);
};

export default CardComponent;
