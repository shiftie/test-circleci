'use strict';

try {
  throw new Error('erm');
} catch (error) {
  console.log(error);
  process.exit();
}
