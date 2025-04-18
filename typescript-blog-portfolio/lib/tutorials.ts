import {
  getDirectory,
  getFileNames,
  getItemInPath,
  getAllItems,
  markdownToHTML,
} from "./markdown";
import { Tutorial } from "../interfaces/Tutorial";

const TUTORIAL_DIR = getDirectory("posts/tutorials");

const getTutorialFileNames = () => {
  return getFileNames(TUTORIAL_DIR);
};

const getTutorial = (fileName: string): Tutorial => {
  const tutorial = getItemInPath(`${TUTORIAL_DIR}/${fileName}`) as Tutorial;
  tutorial.slug = fileName.replace(".md", "");
  return tutorial;
};

const getAllTutorialSlugs = () => {
  return getTutorialFileNames().map((fileName) => fileName.replace(".md", ""));
  // return getBlogFileNames().map((fileName) => fileName.replace(/\.md$/, ""));
};

const getTutorials = (): Tutorial[] => {
  const tutorialFileNames = getTutorialFileNames();
  return getAllItems(tutorialFileNames, getTutorial) as Tutorial[];
};

const getTutorialBySlug = (slug: string): Tutorial => {
  const fileName = slug + ".md";
  return getTutorial(fileName);
};

const getTutorialBySlugWithMarkdown = async (
  slug: string,
): Promise<Tutorial> => {
  const tutorial = getTutorialBySlug(slug);
  tutorial.content = await markdownToHTML(tutorial.content);
  return tutorial;
};

export const fetchTutorials = async (): Promise<object> => {
  const tutorial = getTutorials();
  console.log(tutorial);

  return {
    props: { tutorial },
  };
};
export {
  getTutorialFileNames,
  getTutorial,
  getTutorials,
  getAllTutorialSlugs as getAllTutorialSlugs,
  getTutorialBySlug,
  getTutorialBySlugWithMarkdown,
};
