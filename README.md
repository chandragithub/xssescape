Copyright © http://randomrise.com, as an published work.  All rights reserved.
THIS SOFTWARE OR DATA IS THE PROPERTY OF http://randomrise.com.
THIS SOFTWARE INTENTD TO PROVIDE OPEN SOURCE (FREE TO USE) BUT ANY REPRODUCTION IS NOT ALLOWED.

@author ChandraShekher Polimera (linkedin: chandrashekherpolimera | email: chandrashekher@techie.com)
@date 13/08/2016
@version 0.0.5

CONTACT: http://randomrise.com 
 
In addition to negotiator, it allows:

- Description: 
- It prevents cross site scripting (xss) attacts across the browser.
- 1.what is a cross site scripting attack (xss)?
- A. Cross-site scripting (XSS) is a code injection attack that allows an attacker to execute malicious JavaScript in another user's browser

- Prevention Method:
- Methods used in xssescape are
- @param: unSafeHtmlString
- 1. escape(param);
- @param: safeHtmlString
- 2. strictEsacpe(param);
- @param: safeHtmlString
- 3. unescape(param)
- @param: unSafeHtmlString
- 4. removeUnsafe(param)
- 5. safeUrl()
- 6. unSafeUrl()
- 7. Updating


## Installation

```sh
npm install xssescape
```

## API

```js
var xs = require('xssescape')
```

## Usage.
### if you want to convert unSafeHtml Character to safeHtml Character through Sanitize (escape html characters)
```js
   var html = "<script> alert(document.cookie); </script>";
   xs.escape(html);
   
   // output: "&lt;script&gt alert(document.cookie); &lt/script&gt"
```