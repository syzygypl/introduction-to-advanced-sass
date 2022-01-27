# Introduction to advanced [Sass](https://sass-lang.com/)

This is a brief description of Sass features and good practices spiced up with some explanations, examples  and useful
links. It doesn't cover all the aspects (_like [partials](https://sass-lang.com/documentation/at-rules/use#partials),
[nesting](https://sass-lang.com/documentation/style-rules#nesting) or [operators](https://sass-lang.com/documentation/operators)_)
and requires at least basic knowledge of Sass. [Learn Sass](https://sass-lang.com/guide)!

____

<p style="color: red;">
  <strong>TODO:</strong><br />
  - How to run project and what for?<br />
  - Describe that project itself is an example of stuff described below.<br />
  - Point where described things can be found in code.<br />
</p>

____


## 1. Why to use CSS preprocessors?
<details>
<summary><i>Click to expand!</i></summary>

**Simply, not everything is yet possible in pure CSS.** However, some things like variables
([CSS Custom Properties](https://www.w3.org/TR/css-variables-1/)) are available and others like
[CSS Nesting](https://www.w3.org/TR/css-nesting-1/), or [Custom Media Queries](https://www.w3.org/TR/mediaqueries-5/#custom-mq)
are on the way!

Unfortunately there are still many things that can't be achieved yet and soon with pure CSS:
- built-in and custom functions, loops, mixins, extending, etc.,
- complex variable types like objects or arrays,
- sane code splitting into multiple files.

____
**Further readings:**
- [Learn Sass](https://sass-lang.com/guide) — sass-lang.com
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

____
**Further readings:**
- [LibSass is Deprecated](https://sass-lang.com/blog/libsass-is-deprecated) — sass-lang.com
- [Announcing Dart Sass](https://sass-lang.com/blog/announcing-dart-sass) — sass-lang.com
- **[Introducing Sass Modules](https://css-tricks.com/introducing-sass-modules/)** — css-tricks.com
</details>


## 3. Values and `$variables`.
<details>
<summary><i>Click to expand!</i></summary>

Even though ([CSS Custom Properties](https://www.w3.org/TR/css-variables-1/)) are great, they are still quite primitive.
They were created to store simple value types like numbers, strings or colors. **Sass extends it with booleans,
null values, maps and even function references.**  Those are crucial for writing smart, reusable and manageable
stylesheets. **Variables hold Values.**

**It is worth mentioning that preprocessor Variables and CSS Custom Properties are much different.**
The first can be considered variables only before the compilation. Custom properties are "live" in browser - they can be
overwritten, their value can be changed (_e.g. by media query_) and manipulated in JavaScript.
**That's why they can complement each other so well!**

____
**Further readings:**
- [Sass: Documentation - Values](https://sass-lang.com/documentation/values) — sass-lang.com
- [Sass: Documentation - Variables](https://sass-lang.com/documentation/variables) — sass-lang.com
- [**What is the difference between CSS variables and preprocessor variables?**](https://css-tricks.com/difference-between-types-of-css-variables/) — css-tricks.com
</details>


## 4. Flow control - `@if`, `@each`, `@for` and `@while`.
<details>
<summary><i>Click to expand!</i></summary>

> Sass provides a number of at-rules that make it possible to control whether styles get emitted, or to emit them
> multiple times with small variations. They can also be used in mixins and functions to write small algorithms
> to make writing your Sass easier.
> ____
> [Sass: Documentation - Flow Control Rules](https://sass-lang.com/documentation/at-rules/control) — sass-lang.com

Nothing to add over and above what the documentation says.

____
**Further readings:**
- [Sass: Documentation - Flow Control Rules](https://sass-lang.com/documentation/at-rules/control) — sass-lang.com
</details>


## 5. `@function`.
<details>
<summary><i>Click to expand!</i></summary>

> Functions allow you to define complex operations on SassScript values that you can re-use throughout your stylesheet.
> They make it easy to abstract out common formulas and behaviors in a readable way.
> ____
> [Sass: Documentation - @function](https://sass-lang.com/documentation/at-rules/function) — sass-lang.com

Functions often come in handy when you need to retrieve some [Value](https://sass-lang.com/documentation/values)
from a [Map](https://sass-lang.com/documentation/values/maps). A good example here is `z-index` management. The other
use cases would be repetitive [Operations](https://sass-lang.com/documentation/operators) like generating `box-shadow`
from given colors. You may also need to wrap some [build-in function](https://sass-lang.com/documentation/modules)
to extend its functionality.

____
**Further readings:**
- [Sass: Documentation - @function](https://sass-lang.com/documentation/at-rules/function) — sass-lang.com
- [Systems for z-index](https://css-tricks.com/systems-for-z-index/) — css-tricks.com
</details>


## 6. `@mixin` and `@include`.
<details>
<summary><i>Click to expand!</i></summary>

In the past most examples of Mixin I can remember were about adding vendor prefixes. Up to early 2019 it was even
in the [official documentation of Sass](https://web.archive.org/web/20190208030244/http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_arguments).
Now we have better alternatives for that, like [Autoprefixer](https://autoprefixer.github.io/).

**Mixins are still very useful when we have reusable blocks of styles** or / and we want to assure consistency.
Good examples are: elements resets, repetitive styles (_like consistent borders and box shadows_) or media queries.

____
**Further readings:**
- [Sass: Documentation - @mixin and @include](https://sass-lang.com/documentation/at-rules/mixin) — sass-lang.com
</details>


## 7. `@extend` and `%placeholder`.
<details>
<summary><i>Click to expand!</i></summary>

<small>

   NOTE: Without a quotation from the Sass documentation as they convince you to break BEM (❤️) principal rule
   and [use modifiers alone](https://en.bem.info/methodology/quick-start/#a-modifier-cant-be-used-alone).

</small>

**Extends allow to "inherit" styles from one selector to another.** Placeholders are selectors that may **only** be
extended and don't produce any output itself. Unlike `@mixin` and `@inlude` the `@extend` rule produces
[Groups of selectors](https://www.w3.org/TR/selectors-3/#grouping) so the output is smaller.
Besides, `@extend` generates also a handful of problems and limitations:
* it may mess with code order, as styles are resolved in place of extended element, not where `@extend` is applied,
* only simple, "individual" selectors can be extended,
* extend can't be used inside of `@media` if wasn't declared in it.

**With all that being said my private rule is to prefer `@mixin` and `@include` over `@extend`.**
Especially if the output CSS will be served compressed from the server so the filesize won't be substantially larger.

However, there are certain situations when choosing `@extend` seems right. That's when we need to pull out only some
styles to a separate stylesheet or / and we need to style by HTML tags in some specific context. A good real-live
example here is a separate CSS file for WYSIWYG where we have no influence on produced markup, and we can only relay
on HTML tags. It seems right to extend some selectors rather than rewriting whole code to use Mixins and Icludes.

____
**Further readings:**
- [Sass: Documentation - @extend](https://sass-lang.com/documentation/at-rules/extend) — sass-lang.com
- [Sass: Documentation - Placeholder Selectors](https://sass-lang.com/documentation/style-rules/placeholder-selectors) — sass-lang.com
- [Sass: Documentation - Extends or Mixins?](https://sass-lang.com/documentation/at-rules/extend#extends-or-mixins) — sass-lang.com
- [Optimizing Encoding and Transfer Size of Text-Based Assets](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer?hl=en#text-compression-with-gzip) — developers.google.com
</details>


## 8. Modules - `@use` and `@forward`.
<details>
<summary><i>Click to expand!</i></summary>

The old-way in Sass was to `@import` files to combine them into single CSS file or to use Vars, Mixins
or Functions from another SCSS files. **Modules resolve drawbacks of `@import`, which are:**
1. **Global scope**:
   All members (vars, mixins and functions) are globally accessible and hard to trace where are defined.
2. **Naming collisions**:
   Because of global scope that is easy to unintentionally override some members. _That's why prefixes like
   `$button-height` were widely used._
3. **May be confused** with [native CSS `@import` rule](https://www.w3.org/TR/css-cascade-3/#at-import).
4. **`@import` is slower than `@use`** as it executes stylesheet and emits CSS on every occurrence.

`@forward` rule works similar to `@use` but allows other modules to be used directly from module where are forwarded.
It's handful when you want to organize stylesheets across many files but provide single entry point - great for UI libraries!

____
**Further readings:**
- [Sass: Documentation - @import](https://sass-lang.com/documentation/at-rules/import) — sass-lang.com
- [Sass: Documentation - @use](https://sass-lang.com/documentation/at-rules/use) — sass-lang.com
- [Sass: Documentation - @forward](https://sass-lang.com/documentation/at-rules/forward) — sass-lang.com
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
Would you like to use SVG files directly in your stylesheets, automatically encoded to base64? Or maybe you have some
data in JSON or YAML files that you could `@import` / `@use` in your Sass?
Go for it! But first check if some else didn't already create the [function](https://www.npmjs.com/search?q=sass%20function)
or [importer](https://www.npmjs.com/search?q=sass%20importer) you need.

<small>

  NOTE: Many importers names starts with `node-sass` but most will work with Dart Sass as API is compatible.

</small>

____
**Further readings:**
- [Sass: Documentation - JavaScript API - Interface Importer](https://sass-lang.com/documentation/js-api/interfaces/Importer) — sass-lang.com
- [Sass: Documentation - JavaScript API - Custom Function](https://sass-lang.com/documentation/js-api/modules#CustomFunction) — sass-lang.com
</details>


## 10. "Programming in Sass".
...everything put together.
<details>
<summary><i>Click to expand!</i></summary>

Can we call Sass a "programming language"? Depends on definition.

For sure creating complex UI libraries nowadays requires solid architecture and advanced techniques to make
manageable, high quality output. All above described solutions and techniques help to write high quality code
that meets [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principle. 

____
**Further readings:**
- [How long until @SassCSS is Turing complete?](https://twitter.com/teabass/status/394179630485471232) — twitter.com
- [Is CSS a Programming Language?](https://css-tricks.com/is-css-a-programming-language/) — css-tricks.com
</details>

____
<center>

© Marcin Gościcki ([@norin89](https://github.com/norin89)) / [SYZYGY Warsaw](https://www.syzygy.pl/) — 2022

</center>
