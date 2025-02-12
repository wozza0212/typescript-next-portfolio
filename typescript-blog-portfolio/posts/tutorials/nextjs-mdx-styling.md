---
title: "Styling MDX tet in NextJS"
description: Learn how to style markdown
image: /Images/BlogTitles/mdlogo.png
date: "2052-02-10"
---

# How to colorize your MDX within a NextJS Blog post

This took me a couple of days to figure out, and i still dont understand how come of it works, or what 'prose' actually does, all I know is that i need it to
colorize my MDX posts, at the time of writing this, my styling ability is pretty bog standard, as I'm only able to style the standard HTML elements

#### Step 1:

The first step is importing you colours(colors for my American counterparts) into your tailwind config file, below is what my config file looked like to import my first three colours,
as I'd taken some time out of working on this and then deciding on changing the styling as my first task when i came back, it took me a while to figure out I needed to import the colours, this is done in your tailwind.config.ts

```code block
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        yellow: '#facc15',
        azure: '#F0FFFF',
        pink: '#FF1493'
      }
    },

  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
export default config;
```

#### Step 2

The next step is creating you css at within your page that renders your mdx, the bage for me is held withing my [slug] directory, so my example filepath is me
...src/app/blog/[slug]/page.ts, make sure you're importing the colours that you want to use or you'll be scratching your head like i was wondering why they weren't changing

```code block
const css = {
    h: 'prose-h1:text-white prose-h2:text-white prose-h3:text-white prose-h4:text-white prose-h5:text-white prose-h6:text-white',
    p: 'prose-p:text-yellow',
    a: 'prose-a:text-azure',
    strong: 'prose-strong:text-yellow',
    li: 'prose-li:text-pink',
    code: 'prose-code:text-pink'
}
```

I haven't written a post yet going into detail yet about how to render these pages, hopefully i do get to that before i put this blog online, and if i haven't by that time atleast I'm adding some accountability here

#### Step 3

Adding your CSS within the article

```code block
const BlogDetail: NextPage<BlogDetailProps> = async ({ params }) => {
  const { slug } = params;
  const blog: Blog = await getBlogBySlugWithMarkdown(slug);
  return (
    <BaseLayout>

        <div className="w-2/3 m-auto">
          <article className={`prose lg:prose-lg ${css.h} ${css.p} ${css.a} ${css.strong} ${css.li} ${css.code} markdown-image-50`}>
            <div dangerouslySetInnerHTML={{ __html: blog.content}} />
          </article>
        </div>

    </BaseLayout>
  );
};
```
