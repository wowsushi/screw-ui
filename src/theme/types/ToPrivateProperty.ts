export type ToPrivateProperty<T> = {
  [K in keyof T as `$${string & K}`]: T[K];
};
