export const range = (to: number, from: number = 0): number[] =>
  [...Array(to + from)].map((_, i) => i + from);

export const take = (size: number) =>
  function*<T>(arr: T[]): IterableIterator<T[]> {
    for (const i of range(arr.length / size)) {
      yield arr.slice(i * size, (i + 1) * size);
    }
  };

export const windowed = (size: number) =>
  function*<T>(arr: T[]): IterableIterator<T[]> {
    for (const i of range(arr.length - size)) {
      yield arr.slice(i, i + size);
    }
  };

export const enumerate = function*<T>(
  arr: Iterable<T>
): IterableIterator<[number, T]> {
  let i = 0;
  for (const v of arr) {
    yield [i, v];
    i++;
  }
};
