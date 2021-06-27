# Portfolio website built with SASS

Created this project by following a tutorial from Traversy Media. Full youtube playlist here: https://www.youtube.com/playlist?list=PLillGF-RfqbYoGoCjKoMOkVznV6aSXKzU. Github repo here: https://github.com/bradtraversy/modern_portfolio

Live site here: https://jsweeney-sass-portfolio-site.netlify.app/index.html

## Notes and things learned from this tutorial

Completed this tutorial mainly to learn SASS. Also tried implementing BEM naming structure for classes.

### Key take aways

* Installed SASS with the standalone option (much better than the NPM version I thought). See this thread for help installing: https://stackoverflow.com/questions/51571814/how-to-install-dart-sass
* Run SASS in the terminal with `sass --watch styles.scss styles.css`. This will transpile the scss file into a css file. You can change the directory of the css file if you want as well.
* The `&` (parent selector) is the most useful thing I used in this project. Along with BEM naming conventions, it helps keep the scss files organized. For example: 
```scss
.project {
  &__title {
    color: white;
    position: relative;
    ...
  }

  &__img {
    margin-bottom: 0.5em;
    &:hover {
      opacity: 0.4;
    }
  }
```

The css file ends up looking like this
```css
.project__title {
  color: white;
  position: relative;
  ...
}

.project__img {
  margin-bottom: 0.5em;
}

.project__img:hover {
  opacity: 0.4;
}
```

* Also learned:
  * `@include` and `@mixin`
  * `@import`
  * `@extend` (although didn't actually use this)
  * The built in `lighten` and `darken` functions (there are many other built in functions to explore: https://sass-lang.com/documentation/modules)
  * variables
  * `@function`
