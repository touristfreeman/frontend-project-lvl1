export const getRandInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const cons = (x, y) => (f) => f(x, y);
export const car = (p1) => p1((x) => x);
export const cdr = (p2) => p2((x, y) => y);
