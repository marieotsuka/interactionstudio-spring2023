---
title: "Collect your responses"
week: 2
---



We’ll set up pages to collect your work so far.

## Organize your Type exercise

1. Create a new folder in your repo called `webtype-intro`
2. Place your type tests from last week’s exercise into this page.
3. Check that it works as expected, both locally and live.

## Collect your responses onto an HTML Page

1. Create a new folder in your repo called `reading-responses`
2. Create a file `index.html`
3. Typeset you responses into the html. Be sure to use semantic html. Include the title, author, your response, and the day/time of your response.
4. Setup a navigation with anchor links on the page to jump to each response.
5. Setup your font specifications and CSS to style your page

```html
.
.
.
<h1>Reading Response</h1>
<nav>
    <a href="#youridename">Response 1</a>
</nav>
.
.
.
<section id="youridname" class="response">
    <h2>Response to: <span class="title">Title</span> by <span class="author">Author Name</span></h2>
    <p>
        Your response here
    </p>
</section>
.
.
.
```
