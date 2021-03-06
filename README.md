## Copyright (randomrise.com)
      Copyright © http://randomrise.com, as an published work.  All rights reserved.
      This software is the property of randomrise technology
      This software intend to provide open source (FREE TO USE) but any reproduction is not allowed

      @contact: http://randomrise.com 
      @author: ChandraShekher Polimera (linkedin: chandrashekherpolimera | email: chandrashekher@techie.com)
      @github: https://github.com/chandragithub/xssescape
      @date: 15/08/2016
      @version: 0.0.13 (beta)
 
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
      strictEscape(param) {};

    - @param: safeHtmlString
      reverseEscape(param) {};

    - @param: safeHtmlString
      unescape(param) {};

    - @param: unSafeHtmlString
      removeUnsafe(param) {};

    - safeUrl() {};

    - unSafeUrl() {};
    
    - @param: path name (eg. /home, /web, /mywork)
      unSafeUrl(param) {};

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

### strictEscape

```js
   var htmlStr = "<script> alert(document.cookie); </script>";
   xs.strictEscape(htmlStr);
   
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
   var browserURL = "http://randomrise.com/?<script> document.cookie </script>";
   xs.safeUrl();
   
   // it will reload/refresh the page without search parameter.
```

### unSafeUrl
 
```js
   var browserURL = "http://randomrise.com/?<script> document.cookie </script>";
   xs.unSafeUrl();
   
   // it will reload/refresh the page  with search parameter.
```

### safeUrlWithHash

```js
   var browserURL = "http://randomrise.com/?<script> document.cookie </script>";
   xs.unSafeUrl('/home');   // eg. you can keep what ever you want as a path name.
    
   // it will reload/refresh the page  with /home after the default url.
```
