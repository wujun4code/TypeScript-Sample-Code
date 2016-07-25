import * as AV from 'leancloud-storage';

namespace TestDriver {
  export const APP_ID = process.env.APP_ID || 'uay57kigwe0b6f5n0e1d4z4xhydsml3dor24bzwvzr57wdap';
  export const APP_KEY = process.env.APP_KEY || 'kfgz7jjfsk55r5a8a3y4ttd3je1ko11bkibcikonk32oozww';
  export const REGION = process.env.REGION || 'cn';

  export function initDriver() {
    AV.init({
      appId: APP_ID,
      appKey: APP_KEY,
      region: REGION
    });
  }
}

TestDriver.initDriver();

export = TestDriver;
// // export const APP_ID = process.env.APP_ID || 'WI5a89CtPIOrWpvIwzNfOg9R-MdYXbMMI';
// // export const APP_KEY = process.env.APP_KEY || 'RUoMOSD8RNlpd0MIIiSDi7BU';
// // export const REGION = process.env.REGION || 'us';

// export const APP_ID = process.env.APP_ID || 'uay57kigwe0b6f5n0e1d4z4xhydsml3dor24bzwvzr57wdap';
// export const APP_KEY = process.env.APP_KEY || 'kfgz7jjfsk55r5a8a3y4ttd3je1ko11bkibcikonk32oozww';
// export const REGION = process.env.REGION || 'cn';


// AV.init({
//   appId: APP_ID,
//   appKey: APP_KEY,
//   region: REGION
// });

// export function initApp(){
//   AV.init({
//     appId: APP_ID,
//     appKey: APP_KEY,
//     region: REGION
//   });
// }
