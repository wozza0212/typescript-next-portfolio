import styles from './FeedbackCard.module.css';

type Feedback = {
    commentNumber: number;
    text: string;
    rating: number;
  };

const FeedbackCard = ({ feedback } : {feedback : Feedback}) => { 
    return (
        <div className='max-w-lg mx-auto min-h-32 border m-2 px-6 py-4 rounded-lg bg-slate-200 text-black'>
            <p>{feedback.text}</p>
            <p className={styles.numDisplay}>{feedback.rating}</p>
        </div>
    )
}

export default FeedbackCard;