"use client";

import { useState } from "react";
import FormButton from "@/components/Button/form-button";
import BaseLayout from "@/components/Layouts/base-layout";
import RatingSelect from "@/components/Rating/rating-select";

const FormPage = () => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState<number>(10);
  const [message, setMessage] = useState<string | null>(null);

  const unusedButton =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  const disabledButton =
    "bg-gray-500 hover:bg-grey-700 text-white font-bold py-2 px-4 rounded";

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(text === '') {
      setBtnDisabled(true);
      setMessage('Please enter more than 20 letters.')
    } else if (text !== '' && text.trim().length < 5) {
      setBtnDisabled(true);
      setMessage('Please enter more than 20 letters.')
    }
    else if (text !== '' && text.trim().length >= 5) {
      setBtnDisabled(false);
      setMessage(null)
    }
    
    setText(e.target.value);
  };

  return (
    <BaseLayout>
      <div>
        <h1>Form Page</h1>
        <form>
          <div>
            <input
              className="text-black"
              type="text"
              onChange={handleTextChange}
              placeholder="Write a review..."
              value={text}
            ></input>
            {message && <p>{message}</p>}            
          </div>
          {btnDisabled ? <FormButton version={`${disabledButton}`} type={"submit"} isDisabled={btnDisabled}>
              Submit
            </FormButton> : <FormButton version={`${unusedButton}`} type={"submit"} isDisabled={btnDisabled}>
              Submit
            </FormButton> }
            import RatingSelect from "@/components/Rating/rating-select";

            <RatingSelect rating={rating} setRating={setRating}/>
        </form>
      </div>
    </BaseLayout>
  );
};

export default FormPage;
