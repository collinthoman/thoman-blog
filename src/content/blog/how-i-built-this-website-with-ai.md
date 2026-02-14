---
title: "How I Built This Website With AI"
description: "From a baby shower conversation to a live personal site — how Claude, Astro, and a willingness to experiment helped me stand out in a tough job market."
pubDate: "Feb 13 2026"
heroImage: "../../assets/blog-hero-ai-website.jpg"
tags: ["AI", "Claude", "Astro", "Web Development", "Career"]
---

If you're reading this, you're on my personal website. And if you're a recruiter or hiring manager, that's exactly why it exists. Let me tell you how it came to be.

## The Problem

Being unemployed in the Seattle tech market right now is difficult. It's competitive, it's discouraging, and the sheer volume of qualified candidates makes it hard to stand out. I was doing what everyone does — applying on LinkedIn, tailoring resumes, writing cover letters — but I kept asking myself the same question: *what else can I do?*

I had been speaking with leaders in my network about the importance of continuous learning, especially around AI. I enrolled in an ITIL Foundation certification course to keep my skills sharp. But I knew credentials alone wouldn't differentiate me. I needed something that showed initiative, creativity, and a willingness to build.

## The Spark

The idea crystallized at my best friend's baby shower, of all places. I spent part of the day catching up with friends in the IT industry, and the conversation kept circling back to how brutal the job market had become. That evening, I came home with a thought I couldn't shake: *I need a personal website.*

I already had experience hosting a simple static site from a GitHub repo using Cloudflare Pages — a platform I had grown to really appreciate during my previous employment for its wide range of services. So I sat down and typed into Google: **"personal blogs and github."**

The first result brought me to [github.com/topics/personal-blog](https://github.com/topics/personal-blog). At the top of the page it said *"Here are 1,870 public repositories matching this topic..."* — I clicked the very first repo. It caught my eye because of the large graphic displayed in the search results. That click brought me to [Astrofy](https://github.com/manuelernestog/astrofy) by Manuel Ernesto Garcia.

As I reviewed the repo, I thought to myself, *this looks really nice*. I started visualizing what my own personal website could look like. I was especially excited about how Manuel displayed his CV — that was exactly what I needed recruiters to see. I was sold on the concept.

But then I paused. *What is Astro?* I had never heard of it before.

## Discovering Astro

Since I love learning about new technology, I started reading about [Astro](https://astro.build). It's a modern web framework designed for content-driven websites — blogs, portfolios, documentation sites. It ships minimal JavaScript by default, which means fast page loads. It supports Markdown and MDX out of the box, making it easy to write blog posts like this one.

I quickly realized this was a perfect fit. Not only would it power my website, but it was an opportunity to explore a technology I'd never worked with before. Two birds, one stone.

## Enter Claude

Here's where the story gets interesting.

I had already been using Claude to help me with my job search. It started with reviewing and refining the many cover letters I'd been writing — I'd feed it a job description and ask it to help me extract what the employer or hiring manager was really looking for. As I used it more and more, I hit the free tier limits, so I subscribed to Pro.

That's when I started discovering what Claude could really do. I learned about Projects, and I was reminded about Claude Code — Anthropic's CLI tool for working with code directly. I thought to myself: *let's really see what Claude Code can do.*

### Starting in PowerShell

My first attempt was in PowerShell. I typed my initial prompt:

> *"I am looking to create an online blog that includes a personal bio. I am not sure what programming language should be used. I saw an example online using Astro but I have never heard of that. I want to use GitHub as my repo and use Cloudflare to host the site."*

I was immediately impressed with what it provided. It helped me run checks for Node.js and started laying the groundwork. But then I realized — *what about Visual Studio Code?* Claude Code had a relatively new VSCode extension, and working inside an IDE would be a much better experience.

### Moving to VSCode

I asked Claude to help me set up the extension, got authenticated, and picked up where I left off. When I said *"Hey, can we pick up the web app project?"* it started asking me questions:

- **What framework?** Astro.
- **What styling approach?** Tailwind CSS.
- **What features?** Markdown posts, dark mode, comments, and an RSS feed.

Then it started building. Files and folders appeared in my workspace one after another. I honestly sat there in awe just watching it work. Within minutes I had a live local demo running. I knew this was possible from my experience with HTML and other static projects, but with Astro being new to me, I didn't know what to expect. I remember thinking: *wow, this could become a reality. This is no longer just a dream.*

### Finding the Right Design

The initial design worked, but I wasn't happy with the layout. So I pointed Claude to the Astrofy template that had originally inspired me and asked it to adapt my current setup. It studied the template and presented an updated design that captured many aspects of Manuel's site while still keeping things a little different — my own.

Some of you reading this might ask: *why not just fork Manuel Ernesto's repo? It's open source.* I thought about that. But after a conversation with a former college professor, I realized that the real value here was in the hands-on experience. I needed to understand what AI could actually do for me as a professional. That's why I chose to have Claude build everything while I directed the vision. But I want to make sure I give credit where it's due — thank you, [Manuel Ernesto Garcia](https://github.com/manuelernestog), for the inspiration.

## The Iterative Process

Over the days and weeks that followed, I worked inside VSCode refining the site. What content should go on the home page? How should my CV be presented? What tone should the About page strike?

In the end, I went back to Claude and fed it my resume along with personal information about my hobbies and interests so it could help me create the content. The back-and-forth was genuinely collaborative — I provided the raw material and the vision, and Claude helped shape it into something polished.

## What I Learned

This project has taught me a lot, and I want to share some of those lessons:

**Start fresh conversations.** I learned that starting a new Claude conversation is often more efficient than continuing a long one, especially when you have memory enabled. Context builds up, and sometimes a clean slate with your project instructions loaded is the fastest path forward.

**Keep your project instructions updated.** Claude Code uses a `CLAUDE.md` file as a reference for your project. Keeping that file current — with your tech stack, file structure, and conventions — made a huge difference in the quality of output I received.

**Brainstorm before you build.** Some of my most productive sessions were when I just talked through ideas with Claude before writing any code. Laying out next steps and thinking through the approach saved me from going down dead ends.

**Take breaks.** I stepped away from this project for a little over a week. When Opus 4.6 was announced and I started reading about how well it performs, I thought: *I really need to finish this site and get it live.* Coming back with fresh eyes — and a more capable model — took the website to a level I'm genuinely proud of.

## Why This Matters

This website isn't just a portfolio piece. It's a demonstration of what's possible when you combine curiosity, the right tools, and a willingness to learn. I didn't know Astro before this project. I didn't know how to use Claude Code inside VSCode. I didn't know how to structure a modern blog with Tailwind CSS and DaisyUI.

Now I do. And you're looking at the result.

If you're a recruiter or hiring manager, I hope this gives you a sense of who I am beyond a resume. If you're someone in a similar situation — looking for work, wondering how to stand out — I'd encourage you to build something. Pick a tool you've never used, solve a problem you care about, and put it out there.

You might surprise yourself.
