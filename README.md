# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
## Overview

### The challenge

Users should be able to:
- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
![](./screenshot.jpg)

### Links
- Solution URL: [https://github.com/ammar-antar/FAQ-Accordion](https://github.com/ammar-antar/FAQ-Accordion)
- Live Site URL: [https://ammar-antar.github.io/FAQ-Accordion/](https://ammar-antar.github.io/FAQ-Accordion/)

## My process

### Built with
- Semantic HTML5 markup
- CSS custom properties (Variables)
- Flexbox
- CSS Grid (For smooth accordion animation)
- Vanilla JavaScript
- Mobile-first workflow

### What I learned

- Learned how to build an accessible accordion using semantic buttons.
- Improved understanding of CSS transitions for smooth animations.
- Learned how to use sessionStorage to save UI state.

To see how you can add code snippets, see below:

```css
.faq-answer {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease-in-out;
}
.answer-content {
    overflow: hidden;
}
.faq-item.active .faq-answer {
    grid-template-rows: 1fr;
}
```
### Continued development

- Improve accessibility using ARIA attributes.
- Practice more CSS animations.
- Build larger JavaScript projects.

## Author

- Name: Ammar Antar
- Frontend Mentor:@ammar-antar
- GitHub: https://github.com/ammar-antar
