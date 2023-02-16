---
title: "Modular Letter"
week: 3
---

Let’s use CSS layout structuring tools for a drawing exercise — creating a grid-based letter. 

- In a 3 by 5 grid in Figma, sketch a modular letter [like this](https://www.figma.com/file/AjwbAudxovwsPQaizEKqPQ/Demo-Letter?node-id=0%3A1&t=6jXOidWSJrWfLMj6-1)
- Recreate your letter in CSS using CSS Grid
- Add an animation to your letter
- Make multiple letters to create a 5-letter word

## 1. Create and style your grid letter

Use the techniques you learned with CSS Grid to setup your structure.
Provide appropriate class names so that you can style your grid blocks accordingly.
Have fun styling your blocks with other CSS techniques, including CSS transforms, border-radius, and others.

- [CSS Transforms Lecture Slides](https://docs.google.com/presentation/d/1ebFRwJv1CG58EPKAk9kcFadJ81eieues/edit#slide=id.g20676162374_1_19)
- [CSS Border Radius Lecture Slide](https://docs.google.com/presentation/d/1ebFRwJv1CG58EPKAk9kcFadJ81eieues/edit#slide=id.g20676162374_1_0)
- [CSS Gradients](https://cssgradient.io/)
- [CSS Filter Effects](https://css-tricks.com/almanac/properties/f/filter/) and the [Drop Shadow tool](https://webcode.tools/generators/css/drop-shadow), (Use [CSS Text shadow](https://webcode.tools/generators/css/text-shadow) for Text)


## 2. Add an animation

Review the techniques for notes for [CSS and Motion](/notes/07-transitions-animations.md) or the lecture [slides](https://docs.google.com/presentation/d/1ebFRwJv1CG58EPKAk9kcFadJ81eieues/). 


```html
<div class="lettergrid">
.
.
.
	<div class="block"></div>
	<div class="block"></div>
	<div class="block"></div>
.
.
.
</div>
```

```css
.block{
	animation: changecolor 400ms linear 200ms 3 alternate;
}

@keyframes changecolor {
	0%  {
		background-color: blue;
	}
	50% {
		background-color: yellow;
	}
	100%{
		background-color: green;
	}
}

```

## 3. Repeat step one for 4 other letters
Pay close attention to your overall organization of your code, and how the animation is applying — whether at the block level, the letter level, or the word level.


## Modular Type Reference

- [Yuin Chien’s Alphabet](https://yuinchien.com/alphabet/)
- [Tauba Auerbach’s Type Specimens](http://diagonalpress.com/collections)
- [Radim Pesko’s Sol](https://radimpesko.com/fonts/sol)
- [On the Letterform of the Age / Bo-Won Keum](https://canopycanopycanopy.com/contents/on-the-letterform-of-the-age)

