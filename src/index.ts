import {resolveMx} from 'dns';

const validateEmailAddress = (emailAddress:string):Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const domain = emailAddress.split('@')[1];

    resolveMx(domain, (err, mx) => {
      if (typeof mx != 'undefined') {
        mx
          ? resolve({ isValid: true, mxArray: mx })
          : resolve({ isValid: false, mxArray: null });
      } else if (err.code == 'ENOTFOUND') {
        resolve({ isValid: false, mxArray: null, mxRecordSetExists: false});
      } else {
        reject(new Error(err.code));
      }
    });
  });
};

module.exports = validateEmailAddress;
