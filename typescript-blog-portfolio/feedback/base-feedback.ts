import { v4 as uuidv4 } from "uuid";

export type Feedback = {
  commentNumber: number;
  text: string;
  rating: number;
  id: string;
};

export const baseFeedback: Feedback[] = [
  {
    commentNumber: 1,
    text: "This is a great product",
    rating: 9,
    id: uuidv4(),
  },
  {
    commentNumber: 2,
    text: "This is a bad product",
    rating: 1,
    id: uuidv4(),
  },
  {
    commentNumber: 3,
    text: "This is an awesom product",
    rating: 10,
    id: uuidv4(),
  },
  {
    commentNumber: 4,
    text: "This is a terrible product",
    rating: 2,
    id: uuidv4(),
  },
];
