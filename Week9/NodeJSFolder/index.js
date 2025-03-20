const dayjs = require('dayjs');

console.log("hello world");

var now = dayjs();
// console.log(now);
console.log(dayjs().format('YYYY-MM-DD, HH:mm:ss'));


//Relative Time

var relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime);

console.log(dayjs().from(dayjs("1990-01-01"))); // in 31 years
console.log(dayjs().from(dayjs("1990-01-01"), true)); // 31 years
console.log(dayjs().fromNow());

console.log(dayjs().to(dayjs("1990-01-01"))); // "31 years ago"
console.log(dayjs().toNow());

// my own relative time: since class started
console.log(dayjs().from(dayjs("2025-03-13 08:00:00")));
