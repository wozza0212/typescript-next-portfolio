"use client";
import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { baseFeedback, Feedback } from "../../../../feedback/base-feedback";
import { FormButton, BaseLayout, FeedbackCard } from "@/components";
import RatingSelect from "@/components/Rating/rating-select";
import { motion, AnimatePresence } from "framer-motion";
import { FeedbackProvider } from "@/context/FeedbackContext";
import FeedbackList from "@/components/Feedback/FeedbackList/FeedbackList";

const FormPage = () => {
  const [feedback, setFeedback] = useState<Feedback[]>(baseFeedback);
  const [text, setText] = useState<string>("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState<number>(10);
  const [message, setMessage] = useState<string | null>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((text !== "" && text.trim().length < 10) || text === "") {
      setBtnDisabled(true);
      setMessage("Please enter more than 10 letters.");
    } else if (text !== "" && text.trim().length >= 10) {
      setBtnDisabled(false);
      setMessage("");
    }

    setText(e.target.value);
  };

  const addFeedback = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
        commentNumber: feedback.length + 1,
        id: uuidv4(),
      };
      console.log(newFeedback.id);
      setText("");
      setBtnDisabled(true);
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
    <BaseLayout>
      <FeedbackProvider>
        <div>
          <h1>Form Page</h1>
          <form onSubmit={addFeedback}>
            <div>
              <input
                className="text-black"
                type="text"
                onChange={handleTextChange}
                placeholder="Write a review..."
                value={text}
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
            <FeedbackList feedback={feedback}/>
            {/* <ul>
              {feedback.map((feedbackItem) => {
                return (
                  <AnimatePresence key={`feedbackId${feedbackItem.id}`}>
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
            </ul> */}
          </div>
        </div>
      </FeedbackProvider>
    </BaseLayout>
  );
};

export default FormPage;
