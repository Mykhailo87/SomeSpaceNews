import React, { useState, useEffect, useContext } from 'react';
import { CardContext } from '../store/card-context';
import CardComponent from './CardComponent';
import InputField from './InputField';
import classes from './ListOfCards.module.scss';

//Component that renders list of elements.

const ListOfCards: React.FC = () => {
	const { data, setData } = useContext<any>(CardContext);
	const [ keywords, setKeywords ] = useState<string>('');

	//Getting information from server

	useEffect(
		() => {
			fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=100&')
				.then((response) => response.json())
				.then((res) => {
					setData(res);
				})
				.catch((err) => console.log(err));
		},
		[ setData ]
	);

	//function that provides filtering by keywords

	function filterByKeywords(text: string, checkingText: string) {
		const checkingTextArr: Array<string> = checkingText.toLowerCase().split(' ');
		const textArr: Array<string> = text.toLowerCase().split(' ');
		let sameWordsArray: Array<string> = [];
		for (let i = 0; i < textArr.length; i++) {
			for (let j = 0; j < checkingTextArr.length; j++) {
				if (checkingTextArr[j] === textArr[i]) {
					sameWordsArray.push(checkingTextArr[j]);
				}
			}
		}

		if (sameWordsArray.length > 0) return true;
	}

	//Function that executes rendering information getting from server

	function renderCardElements(text: string): any {
		let cardList: any;
		if (text.length > 0) {
			const title =
				data &&
				data.filter((dat: any) => filterByKeywords(keywords, dat.title)).map((dat: any) => {
					return (
						<div key={dat.id} className={classes.card__box}>
							<CardComponent
								title={coloredText(dat.title, keywords)}
								imageUrl={dat.imageUrl}
								publishedAt={dat.publishedAt}
								summary={dat.summary}
								id={dat.id}
							/>
						</div>
					);
				});

			cardList = title;
		} else {
			cardList =
				data &&
				data.map((dat: any) => {
					return (
						<div key={dat.id} className={classes.card__box}>
							<CardComponent
								title={dat.title}
								imageUrl={dat.imageUrl}
								publishedAt={dat.publishedAt}
								summary={dat.summary}
								id={dat.id}
							/>
						</div>
					);
				});
		}
		return cardList;
	}

	//Function that paints words which are coincided

	function coloredText(text: string, words: string) {
		const textArr = text.split(' ');
		const wordsArr = [ ...new Set(words.toLowerCase().split(' ')) ];
		console.log(textArr, wordsArr);
		const newTextArr = textArr.map((textItem) => {
			return wordsArr.includes(textItem.toLowerCase()) ? (
				<span style={{ backgroundColor: 'yellow' }}> {textItem}</span>
			) : (
				<span> {textItem} </span>
			);
		});
		return newTextArr;
	}

	//Shows result in case keywords are exist

	const amountOfFOundedResults: any = keywords ? `Results Found: ${renderCardElements(keywords).length}` : '';

	return (
		<div className={classes.main_page}>
			<InputField keywords={keywords} setKeywords={setKeywords} />
			<p>{amountOfFOundedResults}</p>
			<div className={classes.list_of_cards}>{renderCardElements(keywords)}</div>
		</div>
	);
};

export default ListOfCards;
