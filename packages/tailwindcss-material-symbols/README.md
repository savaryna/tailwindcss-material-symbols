# @savaryna/tailwindcss-material-symbols

🌀 A Tailwind CSS plugin that simplifies working with Google's [Material Symbols](https://fonts.google.com/icons) font by providing `icon` utility classes for easy icon integration and styling.

```html
<span class="icon icon-rounded icon-48">star</span>
```

Go to the [demo](https://savaryna.github.io/tailwindcss-material-symbols/index.html) page to see the plugin at work.

## Installation

Install the plugin using your favorite package manager:

```shell
pnpm add -D @savaryna/tailwindcss-material-symbols
```

Then import the plugin in your main `.css` file:

> [!IMPORTANT]
> Do not use the `@plugin` directive. That is meant for legacy JavaScript-based plugins. This is a CSS first plugin, written with native support for **Tailwind CSS v4**.

```css
@import 'tailwindcss';
@import '@savaryna/tailwindcss-material-symbols';
/* Alternatively you can also use: */
/* @import '@savaryna/tailwindcss-material-symbols/css'; */
```

If you are using **Tailwind CSS v3**, add the plugin to your `tailwind.config.js` file instead:

```js
import materialSymbols from '@savaryna/tailwindcss-material-symbols';

/** @type {import('tailwindcss').Config} */
export default {
  // Rest of the code...
  plugins: [materialSymbols],
};
```

Or use `require('@savaryna/tailwindcss-material-symbols')` with `module.exports` for CommonJS modules.

Next, follow Google's [guide](https://developers.google.com/fonts/docs/material_symbols#using_material_symbols) on how to add the Material Symbols font to your page. For testing you could just add this `link` tag to your html `head`:

```html
<head>
  <!-- Rest of the code... -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
</head>
```

## Basic usage

Now you can use the base class `icon` to style elements as Material Symbols.

> [!TIP]
> For **Tailwind CSS v3**, the base class can be changed by passing a `baseClass` option to the plugin. In that case use your custom base class instead of `icon`. See [changing the default base class](#changing-the-default-base-class) for more information.

```html
<span class="icon">star</span>
```

### Choosing the font

The plugin includes a modifier class for each Material Symbols font family, so you can easily choose what icon style to use.

> [!IMPORTANT]
> All modifier classes need to be used together with the base class. Always include the base class when using a modifier class.

```html
<span class="icon icon-rounded">star</span>
<!-- `icon` is the base class, and          -->
<!-- `icon-rounded` is the modifier class   -->
```

Here you can see how the base class `icon` was used together with the `icon-rounded` modifier which sets the font family to the Rounded variant.

Classes you can use with the default config:

| Class                       | Font family                 |
| --------------------------- | --------------------------- |
| `icon-outlined` _(default)_ | 'Material Symbols Outlined' |
| `icon-rounded`              | 'Material Symbols Rounded'  |
| `icon-sharp`                | 'Material Symbols Sharp'    |

### Choosing the weight

Weight modifiers allow you to adjust the weight of the icon's stroke. Read more [here](https://developers.google.com/fonts/docs/material_symbols#wght_axis).

```html
<span class="icon icon-700">star</span>
```

Classes you can use with the default config:

| Class                  | Font weight |
| ---------------------- | ----------- |
| `icon-100`             | 100         |
| `icon-200`             | 200         |
| `icon-300`             | 300         |
| `icon-400` _(default)_ | 400         |
| `icon-500`             | 500         |
| `icon-600`             | 600         |
| `icon-700`             | 700         |

These can be animated using transitions.

```html
<span class="icon hover:icon-700 transition-all">star</span>
```

### Choosing the fill

Fill modifiers allow you to choose if your icon is filled or not. Read more [here](https://developers.google.com/fonts/docs/material_symbols#fill_axis).

Classes you can use with the default config:

| Class                     | Font fill |
| ------------------------- | --------- |
| `icon-nofill` _(default)_ | 0         |
| `icon-filled`             | 1         |

These can be animated using transitions.

```html
<label>
  <input type="checkbox" class="peer hidden" />
  <span class="peer:checked:icon-filled icon transition-all">star</span>
</label>
```

### Choosing the grade

Grade modifiers allow you to choose the weight of the icons in a more granular way. A lower value is recommended to be used on darker backgrounds. Read more [here](https://developers.google.com/fonts/docs/material_symbols#grad_axis).

Classes you can use with the default config:

| Class                     | Font grade |
| ------------------------- | ---------- |
| `icon-dark`               | -25        |
| `icon-normal` _(default)_ | 0          |
| `icon-emphasis`           | 200        |

These can be animated using transitions.

### Choosing the optical size

Optical size modifiers allow you to choose the size of the icons. In addition to changing the icon size this also changes the stroke weight as the icon scales. Read more [here](https://developers.google.com/fonts/docs/material_symbols#opsz_axis).

Classes you can use with the default config:

| Class                 | Font optical size |
| --------------------- | ----------------- |
| `icon-20`             | 20                |
| `icon-24` _(default)_ | 24                |
| `icon-40`             | 40                |
| `icon-48`             | 48                |

These can be animated using transitions.

### With pseudo elements

You can use the plugin with Tailwind CSS [pseudo elements](https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-elements) to add icons using css content.

```html
<div class="before:icon before:absolute before:content-['routine'] ...">
  <select class="...">
    ...
  </select>
</div>
```

## Animating font properties

You can use Tailwind CSS classes to animate the font properties. You can animate the weight, fill, grade, optical size and other element features. Read more about using [transitions](https://tailwindcss.com/docs/transition-property) and [animations](https://tailwindcss.com/docs/animation) in the Tailwind CSS documentation. You can also find more information on Google's [developer guide](https://developers.google.com/fonts/docs/material_symbols) for Material Symbols.

| Here are a few examples:                                     |
| ------------------------------------------------------------ |
| `icon icon-rounded group-hover:icon-700 transition-all`      |
| `icon icon-rounded group-hover:icon-filled transition-all`   |
| `icon icon-rounded group-hover:icon-emphasis transition-all` |

## Customizing the plugin

### Changing the default base class

If you want to use a base class other than `icon`, you can do so using the `baseClass` option when registering the plugin:

> [!NOTE]
> This feature is only available when using the plugin with **Tailwind CSS v3**.

```js {{ filename: 'tailwind.config.js' }}
import materialSymbols from '@savaryna/tailwindcss-material-symbols';

/** @type {import('tailwindcss').Config} */
export default {
  // Rest of the code...
  plugins: [
    materialSymbols({
      baseClass: 'symbol',
    }),
  ],
};
```

Now you can use your custom `symbol` base class where you'd use the default base class:

```html
<span class="symbol symbol-rounded">star</span>
```

### Changing the default styles and classes

If you want to customize what modifier classes and values get generated, or change the defaults you can use the `@theme` directive to define new theme variables and extend the [default theme](https://github.com/savaryna/tailwindcss-material-symbols/blob/main/packages/tailwindcss-material-symbols/src/index.css#L1-L30). Read more [here](https://tailwindcss.com/docs/theme#customizing-your-theme).

```css
@theme {
  --ms-default-weight: var(--ms-weight-700);
  --ms-optical-size-sm: var(--ms-optical-size-20);
}
```

If you are using **Tailwind CSS v3**, use the `theme` key in your `tailwind.config.js` file instead:

```js
import materialSymbols from '@savaryna/tailwindcss-material-symbols';

/** @type {import('tailwindcss').Config} */
export default {
  // Rest of the code...
  theme: {
    extend: {
      materialSymbols: {
        weight: {
          DEFAULT: '700',
        },
        opticalSize: {
          sm: '20',
        },
      },
    },
  },
  plugins: [materialSymbols],
};
```

This will set the default weight to `700` and add a new utility class `icon-sm` that can be used to set the optical size to the given value.

```html
<!-- An icon with a stroke weight of 700 and 20px optical size -->
<span class="icon icon-sm">star</span>
```

[Discuss the Tailwind CSS Material Symbols plugin on GitHub](https://github.com/savaryna/tailwindcss-material-symbols/discussions)

## License

[MIT](LICENSE) &copy; [Alex Tofan](https://github.com/savaryna)
