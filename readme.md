## Installation

```html
$ npm install git+https://github.com/ShivamJoker/node-email-domain-check.git
```

## Usage

```javascript
import { isEmailDomainValid } from "../src";

isEmailDomainValid("hi@learnaws.io")
  .then(() => console.log("MX record exist"))
  .catch((err) => console.log("No record found", err));
```
