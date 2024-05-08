import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { MarkdownItem } from "../interfaces/Markdown";
import html from "remark-html";
import {remark} from "remark";
import remarkGfm from "remark-gfm";
const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
};

const getDirectory = (path: string): string => {
  return join(process.cwd(), path);
};

const BLOG_DIR = getDirectory("blogs");

const getItemInPath = (filePath: string): MarkdownItem => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  return {...data, content} as MarkdownItem
};

const getAllItems = (filenames : string[],
  get: (name : string) => MarkdownItem
) => {
const items = filenames.map((filename) =>get(filename))
return items
}

const markdownToHTML =  async( markdown : string) => {
  const result = await remark()
  .use(html)
  .use(remarkGfm)
  .process(markdown)
  return result.toString()

}

export {
  getItemInPath,
  getFileNames,
  getDirectory,
  getAllItems,
  markdownToHTML
};
