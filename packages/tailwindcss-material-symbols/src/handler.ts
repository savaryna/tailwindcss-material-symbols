import type { PluginCreator } from 'tailwindcss/types/config';
import type { MaterialSymbols } from './config';

export type Options = {
  baseClass?: string;
};

const filterDefaultKey = <T extends Record<string, any>>(obj: T) =>
  Object.fromEntries(
    Object.entries(obj).filter(([key]) => key !== 'DEFAULT'),
  ) as Omit<T, 'DEFAULT'>;

export default ({ baseClass = 'icon' }: Options = {}): PluginCreator =>
  ({ theme, e, addUtilities, matchUtilities }) => {
    const escapedBaseClass = e(baseClass);
    const materialSymbols = theme('materialSymbols') as MaterialSymbols;

    addUtilities({
      [`.${escapedBaseClass}`]: {
        'font-family': `var(--ms-font, ${materialSymbols.font.DEFAULT}), ${materialSymbols.font.DEFAULT}`,
        'font-weight': `var(--ms-weight, ${materialSymbols.weight.DEFAULT})`,
        'font-style': 'normal',
        'font-size': `calc(var(--ms-optical-size, ${materialSymbols.opticalSize.DEFAULT})  * 1px)`,
        'line-height': '1',
        'letter-spacing': 'normal',
        'text-transform': 'none',
        display: 'inline-block',
        'white-space': 'nowrap',
        'word-wrap': 'normal',
        direction: 'ltr',
        'text-rendering': 'optimizeLegibility',
        '-webkit-font-feature-settings': 'liga',
        '-webkit-font-smoothing': 'antialiased',
        'font-variation-settings': `
          "wght" var(--ms-weight, ${materialSymbols.weight.DEFAULT}),
          "FILL" var(--ms-fill, ${materialSymbols.fill.DEFAULT}),
          "GRAD" var(--ms-grade, ${materialSymbols.grade.DEFAULT}),
          "opsz" var(--ms-optical-size, ${materialSymbols.opticalSize.DEFAULT})
        `,
      },
    });

    matchUtilities(
      {
        [escapedBaseClass]: (value) => ({
          '--ms-font': value,
        }),
      },
      { values: filterDefaultKey(materialSymbols.font) },
    );

    matchUtilities(
      {
        [escapedBaseClass]: (value) => ({
          '--ms-weight': value,
        }),
      },
      { values: filterDefaultKey(materialSymbols.weight) },
    );

    matchUtilities(
      {
        [escapedBaseClass]: (value) => ({
          '--ms-fill': value,
        }),
      },
      { values: filterDefaultKey(materialSymbols.fill) },
    );

    matchUtilities(
      {
        [escapedBaseClass]: (value) => ({
          '--ms-grade': value,
        }),
      },
      { values: filterDefaultKey(materialSymbols.grade) },
    );

    matchUtilities(
      {
        [escapedBaseClass]: (value) => ({
          '--ms-optical-size': value,
        }),
      },
      { values: filterDefaultKey(materialSymbols.opticalSize) },
    );
  };
