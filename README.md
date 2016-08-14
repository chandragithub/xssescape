Copyright © http://randomrise.com, as an published work.  All rights reserved.
THIS SOFTWARE OR DATA IS THE PROPERTY OF http://randomrise.com.
THIS SOFTWARE INTENTD TO PROVIDE OPEN SOURCE (FREE TO USE) BUT ANY REPRODUCTION IS NOT ALLOWED.

@author ChandraShekher Polimera (linkedin: chandrashekherpolimera | email: chandrashekher@techie.com)
@date 13/08/2016
@version 0.0.5

CONTACT: http://randomrise.com 
 
## Description: 
   It prevents cross site scripting (xss) attacts across the browser.
### what is a cross site scripting attack (xss)?
   Cross-site scripting (XSS) is a code injection attack that allows an attacker to execute malicious JavaScript in another user's browser

### Types of XSS attack?

      -  Persistent XSS
         where the malicious string originates from the website's database.
      
      -  Reflected XSS
         where the malicious string originates from the victim's request.
      
      -  DOM-based XSS
         where the vulnerability is in the client-side code rather than the server-side code.


## Prevention Method:

    - @param: unSafeHtmlString
      escape(param) {};

    - @param: unSafeHtmlString
      strictEsacpe(param) {};

    - @param: safeHtmlString
      reverseEscape(param) {};

    - @param: safeHtmlString
      unescape(param) {};

    - @param: unSafeHtmlString
      removeUnsafe(param) {};

    - safeUrl() {};

    - unSafeUrl() {};


## Installation

```sh
npm install xssescape
```

## API

```js
var xs = require('xssescape')
```

## Usage.
### escape

```js
   var htmlStr = "<script> alert(document.cookie); </script>";
   xs.escape(htmlStr);
   
   // output: "&lt;script&gt alert(document.cookie); &lt/script&gt"
```

### strictEsacpe

```js
   var htmlStr = "<script> alert(document.cookie); </script>";
   xs.strictEsacpe(htmlStr);
   
   // output: "&lt;script&gt alert&#40;document.cookie&#41;&#59; &lt/script&gt"
```

### reverseEscape

```js
   var htmlStr = "&lt;script&gt alert&#40;document.cookie&#41;&#59; &lt/script&gt";
   xs.reverseEscape(htmlStr);
   
   // output: "<script> alert(document.cookie); </script>"
```

### unescape

```js
   var htmlStr = "<script> alert(document.cookie); </script>";
   xs.unescape(htmlStr);
   
   // output: "<script> alert(document.cookie); </script>"
```

### removeUnsafe

```js
   var htmlStr = "<script> alert(document.cookie); </script>";
   xs.removeUnsafe(htmlStr);
   
   // output: "script alert(document.cookie); /script"
```

### removeStrictUnsafe

```js
   var htmlStr = "<script> alert(document.cookie); </script>";
   xs.removeStrictUnsafe(htmlStr);
   
   // output: "script alertdocument.cookie /script"
```

### safeUrl
 
```js
   var url = "http://randomrise.com/?<script> document.cookie </script>";
   xs.safeUrl(url);
   
   // it will reload/refresh the page without search parameter.
```

### unSafeUrl
 
```js
   var url = "http://randomrise.com/?<script> document.cookie </script>";
   xs.unSafeUrl(url);
   
   // it will reload/refresh the page  with search parameter.
```