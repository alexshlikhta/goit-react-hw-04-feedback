import s from './FeedBackStyles.module.scss';

const FeedbackSection = ({ title, children }) => (
	<section className={s.section}>
		<h1>{title}</h1>

		{children}
	</section>
);

export default FeedbackSection;
