# Introduction to advanced [Sass](https://sass-lang.com/)

____

This repo is a brief description of Sass features and good practices spiced up with some explanations, examples
and useful links. It doesn't cover all the aspects (_like [partials](https://sass-lang.com/documentation/at-rules/use#partials),
[nesting](https://sass-lang.com/documentation/style-rules#nesting) or [operators](https://sass-lang.com/documentation/operators)_)
and requires at least basic knowledge of Sass. [Learn Sass](https://sass-lang.com/guide)!

____

<p style="color: red;">
  <strong>TODO:</strong>
  How to run examples.
</p>

____

## 1. Why to use CSS preprocessors?
<details>
<summary><i>Click to expand!</i></summary>

Simply, not everything is yet possible in pure CSS. However, some things like variables
([CSS Custom Properties](https://www.w3.org/TR/css-variables-1/)) are available and others like
[CSS Nesting](https://www.w3.org/TR/css-nesting-1/), or [Custom Media Queries](https://www.w3.org/TR/mediaqueries-5/#custom-mq)
are on the way!

**Unfortunately there are still many things that can't be achieved yet and soon with pure CSS:**
- built-in and custom functions, loops, mixins, extending, etc.,
- complex variable types like objects or arrays,
- sane code splitting into multiple files.

**Further readings:**
- [What is the difference between CSS variables and preprocessor variables?](https://css-tricks.com/difference-between-types-of-css-variables/) — css-tricks.com
</details>

## 2. [Dart Sass](https://sass-lang.com/dart-sass) vs [Node Sass](https://www.npmjs.com/package/node-sass).
...and other implementations.
<details>
<summary><i>Click to expand!</i></summary>

**Dart Sass is the only actively maintained Sass implementation**. [LibSass](https://sass-lang.com/libsass)
and Node Sass (_which is only a wrapper for LibSass_) are deprecated - they are getting only fixes to major bugs
and security issues, no new features. [Ruby Sass](https://sass-lang.com/ruby-sass) is dead.

The major new feature available only in Dart Sass is a module system. **Sass Modules** comes with namespaces,
new at-rules (`@use` and `@forward`) and built-in modules that includes (_not only_) built-in functions.

**Further readings:**
- [LibSass is Deprecated](https://sass-lang.com/blog/libsass-is-deprecated) — sass-lang.com
- [Announcing Dart Sass](https://sass-lang.com/blog/announcing-dart-sass) — sass-lang.com
- **[Introducing Sass Modules](https://css-tricks.com/introducing-sass-modules/)** — css-tricks.com
</details>

## 3. Modules - `@use` and `@forward`.
<details>
<summary><i>Click to expand!</i></summary>

<p style="color: red;">
  <strong>TODO:</strong>
  Why Modules? Difference between old `@import` and new `@use` and `@forward`.
</p>

**Further readings:**
- [Sass: Documentation - @use](https://sass-lang.com/documentation/at-rules/use) — sass-lang.com
- [Sass: Documentation - @forward](https://sass-lang.com/documentation/at-rules/forward) — sass-lang.com
</details>

## 4. Values and `$variables`.
<details>
<summary><i>Click to expand!</i></summary>

<p style="color: red;">
  <strong>TODO:</strong>
  Complex value types like Maps and Lists.
</p>

**Further readings:**
- [Sass: Documentation - Values](https://sass-lang.com/documentation/values) — sass-lang.com
- [Sass: Documentation - Variables](https://sass-lang.com/documentation/variables) — sass-lang.com
</details>

## 5. `@function`.
<details>
<summary><i>Click to expand!</i></summary>

<p style="color: red;">
  <strong>TODO:</strong>
  When to use functions. What for?<br />
  - Extend build-in functions - `map:get` with `@warning` if key not found.<br />
  - `z-index` management.<br />
  - `vw` with pinch of JS to avoid horizontal scrollbar.<br />
</p>

**Further readings:**
- [Sass: Documentation - @function](https://sass-lang.com/documentation/at-rules/function) — sass-lang.com
</details>

## 6. `@mixin` and `@include`.
<details>
<summary><i>Click to expand!</i></summary>

In the past most examples of `@mixin`s I can remember were about adding vendor prefixes. Up to early 2019 it was even
in the [official documentation of Sass]((https://web.archive.org/web/20190208030244/http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_arguments)).
Now we have better alternatives for that, like [Autoprefixer](https://autoprefixer.github.io/).

**`@mixin`s are still very useful when we have reusable blocks of styles** or / and we want to assure consistency.

<p style="color: red;">
  <strong>TODO:</strong>
  Create and link examples.
</p>

Good examples are:
* element resets, // button reset
* repetitive styles, // border and box shadows
* media queries.

**Further readings:**
- [Sass: Documentation - @mixin and @include](https://sass-lang.com/documentation/at-rules/mixin) — sass-lang.com
</details>

## 7. `@extend`.
<details>
<summary><i>Click to expand!</i></summary>

<p style="color: red;">
  <strong>TODO:</strong>
  What are Mixins for? Drawbacks - code order. When you `@extend` in separate file it's OK.<br />
  Include is usually better / safer especially when gzip is used. <br />
  What are `%placeholders`.<br />
</p>

**Further readings:**
- [Sass: Documentation - @extend](https://sass-lang.com/documentation/at-rules/extend) — sass-lang.com
</details>

## 8. Flow control - `@if`, `@each`, `@for` and `@while`.
<details>
<summary><i>Click to expand!</i></summary>

<p style="color: red;">
  <strong>TODO:</strong>
  What are Mixins for? Drawbacks - code order. When you `@extend` in separate file it's OK.<br />
  Include is usually better / safer especially when gzip is used. <br />
</p>

**Further readings:**
- [Sass: Documentation - @extend](https://sass-lang.com/documentation/at-rules/extend) — sass-lang.com
</details>

## 9. Sass JavaScript API.
<details>
<summary><i>Click to expand!</i></summary>

> The [sass package](https://www.npmjs.com/package/sass) on npm is a pure-JavaScript package built from the Dart Sass implementation.
> (...) it provides a JavaScript API that can be used to drive Sass compilations from JavaScript. It even allows
> an application to control how stylesheets are loaded and define custom functions.
> ____
> [Sass: Documentation - JavaScript API](https://sass-lang.com/documentation/js-api) — sass-lang.com

It means that Sass may be adapted to developers needs by themselves. Do you need to customize Sass compilation?
You can create JavaScript functions to be run on your Sass [Values](https://sass-lang.com/documentation/values).
Do you want to `@import` / `@use` JSON or YAML in your Sass? Go for it! But first [check if some else didn't already
create the importer](https://sass-lang.com/documentation/js-api/modules#CustomFunction) you need.

<small>
  NOTE: Many importers names starts with `node-sass` but most will work with Dart Sass as API is compatible. 
</small>

<p style="color: red;">
  <strong>TODO:</strong>
  Example of custom function and JSON importer.
</p>

**Further readings:**
- [Sass: Documentation - JavaScript API - Interface Importer](https://sass-lang.com/documentation/js-api/interfaces/Importer) — sass-lang.com
- [Sass: Documentation - JavaScript API - Custom Function](https://sass-lang.com/documentation/js-api/modules#CustomFunction) — sass-lang.com
</details>

## 10. "Programming in Sass".
...everything put together.
<details>
<summary><i>Click to expand!</i></summary>

<p style="color: red;">
  <strong>TODO:</strong>
  - Colors / typography management.<br /> 
  - `each-breakpoint` mixin.<br />
  - Advanced calendar generation.<br /> 
</p>

**Further readings:**
- [How long until @SassCSS is Turing complete?](https://twitter.com/teabass/status/394179630485471232) — twitter.com
- [Is CSS a Programming Language?](https://css-tricks.com/is-css-a-programming-language/) — css-tricks.com
</details>

____
© [SYZYGY Warsaw](https://www.syzygy.pl/) / Marcin Gościcki ([@norin89](https://github.com/norin89)) — 2022
