### Live Demo: https://auction-house-psi.vercel.app/

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

1. Clone this repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result

---

### Note

- I hardcoded the end date for the first item in the list ("Edwardian Rare Panerai Luminor"), because all the dates were in the past and I wanted to demonstrate that the countdown works

### Things that AI helped with 🤖

- guidelines on how to make the backend requests in Next.js needed to fetch the auction items
- the initial Countdown component (was later improved by a human - me)
- first redux slice syntax to save some time

---

### Improvements I'd make (if I didn't run out of time)

- improve item single page's layout
- add unit test for the utils functions at the very least
- favorites functionality - if we don't have sign up functionality we can use localStorage
- if there are multiple images in the future a lightbox gallery would be useful
- refactor component imports
- figure out how to prevent hydration warnings for the Countdown component
