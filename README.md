# [Sass](https://sass-lang.com/) tips and tricks

## 1. Why to use CSS preprocessors?
<details>
<summary><i>Click to expand!</i></summary>

Simply, not everything is yet possible is pure CSS. However, some things like variables
([CSS Custom Properties](https://www.w3.org/TR/css-variables-1/)) are available and others like
[CSS Nesting](https://www.w3.org/TR/css-nesting-1/), or [Custom Media Queries](https://www.w3.org/TR/mediaqueries-5/#custom-mq)
are coming.

**Unfortunately there are still many things that can't be achieved yet and soon with pure CSS:**
- built-in and custom functions, loops, mixins, extending, etc.,
- complex variable types like objects or arrays,
- sane code splitting into multiple files.

**Further readings:**
- [What is the difference between CSS variables and preprocessor variables?](https://css-tricks.com/difference-between-types-of-css-variables/) — css-tricks.com
</details>

## 2. [Dart Sass](https://www.npmjs.com/package/sass) vs [Node Sass](https://www.npmjs.com/package/node-sass).
...and other implementations.
<details>
<summary><i>Click to expand!</i></summary>

**Dart Sass is the only actively maintained Sass implementation**. [LibSass](https://sass-lang.com/libsass) and
Node Sass are deprecated - they are getting only fixes to major bugs and security issues, no new features.
[Ruby Sass](https://sass-lang.com/ruby-sass) is dead.

The major new feature available only in Dart Sass is a module system. **Sass Modules** comes with namespaces,
new at-rules (`@use` and `@forward`) and built-in modules that includes (_not only_) built-in functions.

**Further readings:**
- [LibSass is Deprecated](https://sass-lang.com/blog/libsass-is-deprecated) — sass-lang.com
- [Announcing Dart Sass](https://sass-lang.com/blog/announcing-dart-sass) — sass-lang.com
- **[Introducing Sass Modules](https://css-tricks.com/introducing-sass-modules/)** - css-tricks.com
</details>

____
## Topic ideas:
- [ ] When to use `@mixin`s and examples of useful ones:
  - [ ] deep get (as `map.get` doesn't provide warning if the key is not found), 
  - [ ] media queries,
  - [ ] fluid typography,
  - [ ] color management,
  - [ ] `z-index` management,
  - [ ] `vw` to get rid of horizontal scroll when using `100vw`.
- [ ] Importing JSON in Sass to share vars between JS and CSS.
- [ ] Programming in CSS:
  - @for, @include, @function, etc.
  - https://css-tricks.com/is-css-a-programming-language/
- [ ] `@extend` drawbacks - compiled code order.
