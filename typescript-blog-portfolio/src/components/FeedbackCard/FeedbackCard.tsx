import styles from './FeedbackCard.module.css';
import { FaTimes } from 'react-icons/fa';
import { Feedback } from '../../../feedback/base-feedbaack';


const FeedbackCard = ({ feedback } : {feedback : Feedback}) => { 
    return (
        <div className='max-w-lg mx-auto min-h-32 border m-6 px-8 py-4 rounded-lg bg-slate-200 text-black'>
            <button className={styles.close} onClick={() => {console.log(feedback.id)}}>
                <FaTimes color='red'/>
            </button>
            <p className='px-4'>{feedback.text}</p>
            <p className={styles.numDisplay}>{feedback.rating}</p>

        </div>
    )
}

export default FeedbackCard;