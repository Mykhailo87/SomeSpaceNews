import React from 'react';
import classes from './InputField.module.scss';

//Component that take keywords

interface Props {
	keywords: string;
	setKeywords: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ keywords, setKeywords }) => {
	return (
		<form className={classes.input} id="input">
			<h3>Filter by Keywords</h3>
			<input
				type="input"
				value={keywords}
				onChange={(e) => setKeywords(e.target.value)}
				placeholder="Enter keywords"
			/>
		</form>
	);
};

export default InputField;
