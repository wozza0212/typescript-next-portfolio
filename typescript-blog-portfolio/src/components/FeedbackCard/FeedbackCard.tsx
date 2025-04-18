import styles from "./FeedbackCard.module.css";
import { FaTimes } from "react-icons/fa";
import { Feedback } from "../../../feedback/base-feedbaack";

interface FeedbackCardProps {
  feedbackItem: Feedback;
  handleClick: () => void;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  feedbackItem,
  handleClick,
}: FeedbackCardProps) => {
  return (
    <div className="max-w-lg mx-auto min-h-32 border m-6 px-8 py-4 rounded-lg bg-slate-200 text-black">
      <button className={styles.close} onClick={() => handleClick()}>
        <FaTimes color="red" />
      </button>
      <p className="px-4">{feedbackItem.text}</p>
      <p className={styles.numDisplay}>{feedbackItem.rating}</p>
    </div>
  );
};

export default FeedbackCard;
