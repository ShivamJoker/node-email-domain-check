import { resolveMx } from "dns";

export const isEmailDomainValid = (emailAddress: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const domain = emailAddress.split("@")[1];

    resolveMx(domain, (err) => {
      if (err) {
        reject(new Error(err.message));
      }
      resolve(true);
    });
  });
};
