export type Vector = {
  readonly x: number;
  readonly y: number;
};

export const vec = (x: number, y: number): Vector => ({
  x,
  y
});
