import s from './FeedBackStyles.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
	<div className={s.section__group}>
		{options.map((option, index) => (
			<button
				key={index}
				index={index}
				onClick={() => {
					onLeaveFeedback(index, option);
				}}
			>
				{option}
			</button>
		))}
	</div>
);

export default FeedbackOptions;
