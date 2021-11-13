export function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function orderBy(array: any[], prop: string) {
  return [...array].sort((a, b) => a[prop] - b[prop]);
}

export function shuffle<T>(array: T[]): any[] {
  return array
    .map((obj: any) => ({ obj, random: Math.random() }))
    .sort((a: any, b: any) => a.random - b.random)
    .map((x: any) => x.obj);
}
