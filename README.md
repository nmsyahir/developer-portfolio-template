# Syahir's portfolio and an easy to customize Next.js template

A clean, responsive developer portfolio built with Next.js, TypeScript, and Tailwind CSS. It is designed to be cloned, personalised, and published without editing React components.

The included example is Nik Mohammad Syahir's portfolio, based on his CV and public GitHub repositories. It is still structured as a reusable template: replace his personal content before sharing your own version.

## Features

- One-file content customisation
- Sections can be turned on or off
- Responsive desktop and mobile navigation
- Hero, About, Experience, Projects, Skills, Education, Contact, and Footer
- Light and dark themes, with saved preference
- Subtle scroll animations and reduced-motion support
- Project links for GitHub and live demos
- Resume download support
- Optional contact form with a no-service email fallback
- Recognisable technology logos powered by React Icons, with automatic text fallbacks
- Accessible labels, keyboard-friendly controls, and semantic HTML

## Quick start

```bash
git clone https://github.com/nmsyahir/developer-portfolio-template.git
cd developer-portfolio-template
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Make it yours

For normal personalisation, edit only `data/portfolio.ts`. It contains your name, role, introduction, contact details, social links, About copy, experience, projects, skills, education, and contact settings. Replace `public/profile.jpg` with your own portrait, or set `profileImage` to another file in `public/`. Leave `profileImage` empty to use your initials instead.

### For friends: make your own copy

1. On GitHub, choose **Use this template → Create a new repository**. Do not edit Nik's original repository.
2. In your new repository, open `data/portfolio.ts` and use GitHub's pencil button to replace the name, bio, About cards, work, projects, skills, education, email, and social links. Save the change.
3. Replace `public/profile.jpg` with your own image, or set `profileImage: ""` and change `initials`. Add a resume only if you want it publicly downloadable.
4. Keep only sections you need using the `sections` flags. For a project you are not ready to share, leave `github` and `demo` empty.
5. Import **your** repository into a host such as Vercel. Future edits to your repo will redeploy your own site; they will not change Nik's.

The code is MIT-licensed. Nik's portrait and personal biography are examples, not reusable template assets: replace them before publishing your version.

### Hide a section

Change any section flag to `false`:

```ts
sections: {
  about: true,
  experience: false,
  projects: true,
  skills: true,
  education: true,
  contact: true,
}
```

The section and its navigation link will disappear together.

The default example keeps standalone Experience and Education sections off because the same highlights appear in the three recruiter-friendly About cards. Turn them back on whenever you need more detail.

### Project links

Only add a GitHub URL when you are ready to share that project. An empty `github` or `demo` string hides that link. `demoLabel` can say `Video demo` if the URL points to a walkthrough rather than a live app. The Nik example keeps MYHazard's source and video links hidden for now; the other projects also have no fabricated links. `projectsNote` controls the small note shown on every project card; set it to an empty string to hide it.

### Add project screenshots

Place screenshots in `public/projects/`, then set each project's `image` field:

```ts
image: "/projects/my-project.png"
```

If no image is supplied, the card displays a clean letter-based cover instead of a broken image.

### Add your resume

1. Add your PDF as `public/resume.pdf`.
2. Set `resumeUrl: "/resume.pdf"` in `data/portfolio.ts`.

Until a URL is added, the hero shows a **Request my CV** link instead of a broken download.

### Configure the contact form

The form works immediately by opening the visitor's email app. For direct submissions, add a Formspree-style endpoint:

```ts
contact: {
  showForm: true,
  formEndpoint: "https://formspree.io/f/your-form-id",
}
```

Set `showForm: false` to keep only the email call-to-action.

### Change the visual style

- Colours and layout: `app/globals.css`
- Page metadata: `app/layout.tsx`
- Site icon: `public/favicon.svg`

Most users should not need to edit `components/portfolio-page.tsx`.

## Project structure

```text
developer-portfolio-template/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── portfolio-page.tsx
├── data/
│   └── portfolio.ts       # Main customisation file
├── public/
│   ├── favicon.svg
│   └── profile.jpg
├── LICENSE
├── vercel.json
├── netlify.toml
└── package.json
```

## Production build

```bash
npm run build
```

That command builds the current Cloudflare/Sites version. To verify the standard Next.js build used by Vercel and Netlify, run `npm run build:next`.

## Deploy

### Vercel

Import your GitHub copy at [vercel.com/new](https://vercel.com/new). The included `vercel.json` selects the tested Next.js build. Vercel's free Hobby plan is for personal, non-commercial use; check its current limits before relying on it for another purpose.

### Netlify

Import your GitHub copy in Netlify. The included `netlify.toml` selects the Next.js build. Netlify has a free plan with a monthly credit limit, after which the site can pause until the next cycle.

### Cloudflare

The existing Site uses a Cloudflare-compatible `vinext` build. Cloudflare Workers also has a free plan, but setting it up is more technical than Vercel for first-time users.

GitHub Pages is free for public repositories, but it hosts static output only. This repository's default build is not a GitHub Pages export; use one of the hosts above unless you deliberately configure a Next.js static export.

## Sharing this template

Before publishing your own copy, replace Nik's name, email, profile, experience, projects, social links, and education in `data/portfolio.ts`. Add only screenshots and assets you own. This public template does not include Nik's private Sites deployment settings, so your deployment remains independent.

## License

The source code is available under the [MIT license](LICENSE). The example portrait and personal content remain Nik's and should not be reused unchanged.
