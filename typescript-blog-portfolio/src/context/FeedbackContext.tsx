import { createContext, useState } from "react";
import { Feedback, baseFeedback } from "../../feedback/base-feedback";

const FeedbackContext = createContext(baseFeedback);
export const FeedbackProvider = ({ children }: { children: any }) => {
  const [feedback, setFeedback] = useState<Feedback[]>(baseFeedback);

  return (
    <FeedbackContext.Provider value={feedback}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext
