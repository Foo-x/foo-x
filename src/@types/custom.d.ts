declare module "*.module.css" {
  const classes: { [key: string]: string }
  export = classes
}

declare module "*.module.scss" {
  const classes: { [key: string]: string }
  export = classes
}

declare module "*.module.sass" {
  const classes: { [key: string]: string }
  export = classes
}

declare module "*.module.less" {
  const classes: { [key: string]: string }
  export = classes
}

declare module "*.module.styl" {
  const classes: { [key: string]: string }
  export = classes
}

declare const __PATH_PREFIX__: string
