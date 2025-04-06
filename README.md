# Construction Company Website

A modern, responsive website for a construction/bricklaying company built with Astro and Tailwind CSS.

## Features

- Fast, responsive static site
- SEO-friendly structure
- Netlify-ready deployment
- Markdown content management for easy updates
- Mobile-first design
- Project showcase with filterable gallery
- Testimonials section
- Contact form with Netlify Forms integration

## Getting Started

### Prerequisites

- Node.js (v14.15.0 or higher)
- npm or yarn

### Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/construction-website.git
cd construction-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## Project Structure

```
├── public/               # Static assets
│   └── images/           # Image files
├── src/
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages
│   │   └── projects/     # Individual project pages
│   └── content/          # Markdown content
│       └── testimonials/ # Testimonial entries
└── astro.config.mjs      # Astro configuration
```

## Adding Content

### Projects

To add a new project:

1. Create a new markdown file in `src/pages/projects/` (e.g., `project-name.md`)
2. Add the front matter with project details
3. Write the content for the project page

Example:
```markdown
---
layout: ../../layouts/ProjectLayout.astro
title: Project Name
description: Short description
pubDate: Month Year
coverImage: /images/projects/image.jpg
client: Client Name
location: Location
services:
  - Service 1
  - Service 2
duration: X months
---

Content goes here...
```

### Testimonials

To add a new testimonial:

1. Create a new markdown file in `src/content/testimonials/` (e.g., `testimonial-name.md`)
2. Add the required front matter

Example:
```markdown
---
name: "Client Name"
position: "Position"
company: "Company"
testimonial: "Testimonial text..."
rating: 5
date: "YYYY-MM-DD"
projectType: "Type"
image: "/images/testimonials/image.jpg"
featured: true
---
```

## Deployment

This site is configured for easy deployment on Netlify:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

## Customization

### Colors

Edit the `tailwind.config.cjs` file to change the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#your-color',
        dark: '#darker-shade',
        light: '#lighter-shade',
      },
      // ...other colors
    },
  },
},
```

### Content

Update the content in the component files to match your business information:
- Company name and details in `Footer.astro` and `Navbar.astro`
- Contact information in `ContactSection.astro`
- About content in `About.astro`

## License

This project is licensed under the MIT License.