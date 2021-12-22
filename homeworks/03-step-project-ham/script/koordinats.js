const coordArr = [];
const D = 67;
const R = D/2;

// const x1 = R;
// const y1 = 0;
// coordArr.push(`${x1},${y1}`);

// const x2 = R + (R**2 - (R/2)**2)**0.5;
// const y2 = R/2;
// coordArr.push(`${x2},${y2}`);

// const x3 = R + (R**2 - (R/2)**2)**0.5;
// const y3 = R + R/2;
// coordArr.push(`${x3},${y3}`);

// const x4 = R;
// const y4 = D;
// coordArr.push(`${x4},${y4}`);

// const x5 = R - (R**2 - (R/2)**2)**0.5;
// const y5 = R + R/2;
// coordArr.push(`${x5},${y5}`);

// const x6 = R - (R**2 - (R/2)**2)**0.5;
// const y6 = R/2;
// coordArr.push(`${x6},${y6}`);

// const x7 = x1;
// const y7 = y1;
// coordArr.push(`${x7},${y7}`);

// const result = coordArr.join(' ');

// console.log(result);

const H = D;
// const W = 2*(R**2 - (R/2)**2)**0.5;
// const halfW = (R**2 - (R/2)**2)**0.5;

const W = Math.round(2*(R**2 - (R/2)**2)**0.5); 
const halfW = W/2;

const x1 = halfW;
const y1 = 0;
coordArr.push(`${x1},${y1}`);

const x2 = W;
const y2 = R/2;
coordArr.push(`${x2},${y2}`);

const x3 = W;
const y3 = R + R/2;
coordArr.push(`${x3},${y3}`);

const x4 = halfW;
const y4 = D;
coordArr.push(`${x4},${y4}`);

const x5 = 0;
const y5 = R + R/2;
coordArr.push(`${x5},${y5}`);

const x6 = 0;
const y6 = R/2;
coordArr.push(`${x6},${y6}`);

const x7 = x1;
const y7 = y1;
coordArr.push(`${x7},${y7}`);

const resultFit = coordArr.join(' ');

console.log('dimensions', `height="${H}" width="${W}"`);
console.log(resultFit);
