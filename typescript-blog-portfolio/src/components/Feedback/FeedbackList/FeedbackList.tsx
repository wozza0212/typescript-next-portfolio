import { FeedbackCard } from "@/components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Feedback, baseFeedback } from "../../../../feedback/base-feedback";

const FeedbackList = ({ feedback }: { feedback: Feedback[] }) => {

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
    <ul>
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
    </ul>
  );
};

export default FeedbackList;
