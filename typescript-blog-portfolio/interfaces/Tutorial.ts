import { MarkdownItem } from "./Markdown";

export interface Tutorial extends MarkdownItem{
    author: string,
    image: string,
}