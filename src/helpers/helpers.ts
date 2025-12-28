import assert from 'assert';
import config from './config.json' with { type: 'json' };

const readConfig = () => {
  // видны типы сразу
  console.log(config);
};

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
