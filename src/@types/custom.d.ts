declare module '*.module.css' {
  const classes: { [key: string]: string };
  export = classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export = classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export = classes;
}

declare module '*.module.less' {
  const classes: { [key: string]: string };
  export = classes;
}

declare module '*.module.styl' {
  const classes: { [key: string]: string };
  export = classes;
}

// eslint-disable-next-line no-underscore-dangle
declare const __PATH_PREFIX__: string;
