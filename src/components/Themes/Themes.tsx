import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import cx from 'classnames';
import useLocalStorage from 'use-local-storage';

import './Themes.scss';
import settings from '../../settings.json';

interface ThemesProps {
  className?: string;
}

function Themes({
  className,
}: ThemesProps) {
  const { themes } = settings;
  const [theme, setTheme] = useLocalStorage<string>('theme', '');

  return (
    <>
      <Helmet>
        <body data-theme={theme} />
      </Helmet>
      <ul className={cx('themes', className)}>
        <li className="themes__item">
          <button
            className={cx('themes__button', 'themes__button--auto', {
              '-is-active': !theme,
            })}
            type="button"
            title="auto"
            onClick={() => setTheme('')}
          >
            auto
          </button>
        </li>
        {Object.entries(themes).map(([name, params]) => {
          return (
            <li className="themes__item" key={name}>
              <button
                className={cx('themes__button', {
                  '-is-active': name === theme,
                })}
                style={{ backgroundColor: params['color-bg'], color: params['color-text'] }}
                type="button"
                onClick={() => setTheme(name)}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Themes;
