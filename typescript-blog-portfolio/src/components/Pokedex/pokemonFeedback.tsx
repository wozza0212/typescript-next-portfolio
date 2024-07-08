import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { baseFeedback, Feedback } from "../../../feedback/base-feedbaack";
import RatingSelect from "../Rating/rating-select";
import { FormButton, FeedbackCard} from "@/components";
import { motion, AnimatePresence } from "framer-motion";

const PokemonFeedback = () => {
  const [feedback, setFeedback] = useState<Feedback[]>(baseFeedback);
  const [feedbackText, setFeedbackText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState<number>(10);
  const [message, setMessage] = useState<string | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (feedbackText === "") {
      setBtnDisabled(true);

      setMessage("Please enter more than 10 letters.");
    } else if (feedbackText !== "" && feedbackText.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Please enter more than 10 letters.");
    } else if (feedbackText !== "" && feedbackText.trim().length >= 10) {
      setBtnDisabled(false);
      setMessage(null);
    }

    setFeedbackText(e.target.value);
  };

  const addFeedback = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
    if (feedbackText.trim().length > 10) {
      const newFeedback = {
        text: feedbackText,
        rating: rating,
        commentNumber: feedback.length + 1,
        id: uuidv4(),
      };
      console.log(newFeedback.id);
      setFeedback([...feedback, newFeedback]);
    }
  };

  const deleteFeedbackItem =
    ({
      feedback,
      feedbackItem,
    }: {
      feedback: Feedback[];
      feedbackItem: Feedback;
    }) =>
    () => {
      setFeedback(
        feedback.filter((item: Feedback) => item.id !== feedbackItem.id)
      );
    };

  return (
    <div>
      <h1>Pokemon Feedback</h1>
      <div>
        <h1>Form Page</h1>
        <form onSubmit={addFeedback}>
          <div>
            <input
              className="text-black"
              type="text"
              onChange={handleTextChange}
              placeholder="Write a review..."
              value={feedbackText}
            ></input>
            <div style={{ paddingTop: "4px" }}>
              {message && <p>{message}</p>}
              {btnDisabled ? (
                <FormButton
                  version={`disabledButton`}
                  type={"submit"}
                  isDisabled={btnDisabled}
                >
                  Submit
                </FormButton>
              ) : (
                <FormButton
                  version={`primaryButton`}
                  type={"submit"}
                  isDisabled={btnDisabled}
                >
                  Submit
                </FormButton>
              )}
            </div>
          </div>

          <RatingSelect select={(rating: number) => setRating(rating)} />
        </form>
        <div>
          <h2>Feedback</h2>
          <h4>Comments: {feedback.length}</h4>
          <ul>
            {/* {feedback.map((feedbackItem) => {
              return (
                <li key={`feedbackNum${feedbackItem.commentNumber}`}>
                  <FeedbackCard feedbackItem={feedbackItem} handleClick={deleteFeedbackItem({feedback, feedbackItem})}/>
                </li>
              );
            })} */}
            {feedback.map((feedbackItem) => {
              return (
                <AnimatePresence>
                  <motion.li
                    key={`feedbackId${feedbackItem.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <FeedbackCard
                      feedbackItem={feedbackItem}
                      handleClick={deleteFeedbackItem({
                        feedback,
                        feedbackItem,
                      })}
                    />
                  </motion.li>
                </AnimatePresence>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonFeedback;
