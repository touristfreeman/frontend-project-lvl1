#!/usr/bin/env node

import { brainProgression, getNumberSeries, askUse } from '../games/progression';

brainProgression();

/*
const cons = (x, y) => (f) => f(x, y);
const car = (p1) => p1((x) => x);
const cdr = (p2) => p2((x, y) => y);

const l1 = getNumberSeries();
const askPair = askUse(l1, 3);
console.log(`${car(askPair)}, число возврата ${cdr(askPair)}`);
*/
