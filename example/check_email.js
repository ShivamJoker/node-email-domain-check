import { isEmailDomainValid } from "../src";

isEmailDomainValid("hi@learnaws.io")
  .then(() => console.log("MX record exist"))
  .catch((err) => console.log(err));
