"use client";

import { FormEvent, useState } from "react";
import FormButton from "@/components/Button/form-button";
import BaseLayout from "@/components/Layouts/base-layout";
import RatingSelect from "@/components/Rating/rating-select";

type Feedback = {
  commentNumber: number;
  text: string;
  rating: number;
};

const baseFeedback: Feedback[] = [
  {
    commentNumber: 1,
    text: "This is a great product",
    rating: 9,
  },
  {
    commentNumber: 2,
    text: "This is a bad product",
    rating: 1,
  },
  {
    commentNumber: 3,
    text: "This is an awesom product",
    rating: 10,
  },
  {
    commentNumber: 4,
    text: "This is a terrible product",
    rating: 2,
  },
];

const FormPage = () => {
  const [feedback, setFeedback] = useState<Feedback[]>(baseFeedback)
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState<number>(10);
  const [message, setMessage] = useState<string | null>(null);

  const unusedButton =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  const disabledButton =
    "bg-gray-500 hover:bg-grey-700 text-white font-bold py-2 px-4 rounded";

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text === "") {
      setBtnDisabled(true);

      setMessage("Please enter more than 10 letters.");
    } else if (text !== "" && text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Please enter more than 10 letters.");
    } else if (text !== "" && text.trim().length >= 10) {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
        commentNumber: baseFeedback.length + 1,
      };
      setFeedback([...feedback, newFeedback]);
    }
  };

  return (
    <BaseLayout>
      <div>
        <h1>Form Page</h1>
        <form onSubmit={handleSubmit}>
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
                  version={`${disabledButton}`}
                  type={"submit"}
                  isDisabled={btnDisabled}
                >
                  Submit
                </FormButton>
              ) : (
                <FormButton
                  version={`${unusedButton}`}
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
          <h4>Comments: {baseFeedback.length}</h4>
          <ul>
            {feedback.map((feedbackItem) => {
              return (
                <li key={`feedbackNum${feedbackItem.commentNumber}`}>
                  <p>{feedbackItem.text}</p>
                  <p>{feedbackItem.rating}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </BaseLayout>
  );
};

export default FormPage;
