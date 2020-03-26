export const getRandInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const cons = (x, y) => (f) => f(x, y);
