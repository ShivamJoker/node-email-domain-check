## Installation

```sh
pnpm install  node-email-domain-check
```

## Usage

```javascript
import { isEmailDomainValid } from "../src";

isEmailDomainValid("hi@learnaws.io")
  .then(() => console.log("MX record exist"))
  .catch((err) => console.log("No record found", err));
```
