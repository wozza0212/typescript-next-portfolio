import { MarkdownItem } from "./Markdown";

export interface Blog extends MarkdownItem {
  author: string;
  image: string;
}
