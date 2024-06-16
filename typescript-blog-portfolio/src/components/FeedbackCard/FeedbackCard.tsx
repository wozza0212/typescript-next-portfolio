import styles from './FeedbackCard.module.css';

type Feedback = {
    commentNumber: number;
    text: string;
    rating: number;
  };

const FeedbackCard = ({ feedback } : {feedback : Feedback}) => { 
    return (
        <div className={styles.feedbackCard}>
            <p>{feedback.text}</p>
            <p className={styles.numDisplay}>{feedback.rating}</p>
        </div>
    )
}

export default FeedbackCard;