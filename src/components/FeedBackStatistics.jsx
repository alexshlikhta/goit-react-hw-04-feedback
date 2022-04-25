import s from './FeedBackStyles.module.scss';
import FeedBackNotification from './FeedBackNotification';

const FeedBackStatistics = ({ good, neutral, bad, total, positivePercentage }) =>
	total > 0 ? (
		<>
			<ul className={s.section__list}>
				<li>Good: {good}</li>
				<li>Neutral: {neutral}</li>
				<li>Bad: {bad}</li>
			</ul>

			<div className={s.section__subtitle}>
				Total: <span className={s.section__subtitle__value}>{total}</span>
			</div>

			<div className={s.section__subtitle}>
				Positive feedback: <span className={s.section__subtitle__value}>{positivePercentage}</span>
			</div>
		</>
	) : (
		<FeedBackNotification message='There is no feedback' />
	);

export default FeedBackStatistics;
