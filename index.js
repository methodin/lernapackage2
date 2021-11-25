const pack = require('@methodin/lernapackage1');

async function work() {
  const response = await pack.test();
  console.dir(response);
}

work();
