---
title: "Variable Fonts"
date: 2022-03-10
summary: "Variable Fonts"
order: 6
category: "terms"
---

A Variable Font is a single font file contains many different variations of a typeface, instead of having a separate font file for every width, weight, or style. This format was developed in collaboration by Adobe, Apple, Google, and Microsoft.

### Advantages of variable fonts
- Font loading
	- HTTP requests
	- KB of data (depends on character set and design space)
- Purer expression of type design process
- Options

### Disadvantages of variable fonts
- Lack of support
- [Souless clone armies](https://vimeo.com/251494096)

## Variable Fonts and CSS
The properties of variable fonts can be set by CSS, as with any other CSS property. You can serve a variable font in the same way [as any other typeface](/notes/02-css/#typefaces); although currently there are still few commercially available variable fonts. 

```css
@font-face {
  font-family: 'Magmatic';
  src: url('../fonts/magmatic-vf.woff2') format('woff2-variations');
}

p{
  font-family: 'Magmatic', sans-serif;
  font-variation-settings: 'wght' 300,'wdth' 120, 'XHGT' 100; 👈
}
```

The `font-variation-settings` is the CSS propety for variable fonts. - Values for multiple axes, are separated by `,`
- Each axes is in in between `''`, with the value after it
- Standard axes for variation are in lowercase,  custom axes are in uppercase.

### Standard (registered) axes
|syntax| description | Non-VF equivalent 
|---|---| ---
|wght| weight | `font-weight` 
|wdth| width | `font-stretch`
|opsz| optical sizing | `<font></font>-optical-sizing`
|ital| italicization | `font-style: italic` 
|slnt| slant | `font-style: oblique ` 

- Read a [caveat for italics](https://rwt.io/typography-tips/getting-bent-current-state-italics-variable-font-support)

## Variable Font Resources
* A [Variable Fonts primer](https://variablefonts.io/)
* [Possibilities of Variable Fonts](https://variable.occupantfonts.com)
* [Font Goggles](https://fontgoggles.org/) for desktop viewing
* [Wakamai Fondue](https://wakamaifondue.com/) for a web-based inspector
* [Dinamo Darkroom](https://dinamodarkroom.com/gauntlet/)
* See more on [Resources page](/type-help/#type-technology)