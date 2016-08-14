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
    - Persistent XSS
      where the malicious string originates from the website's database.
    - Reflected XSS
      where the malicious string originates from the victim's request.
    - DOM-based XSS
      where the vulnerability is in the client-side code rather than the server-side code.


## Prevention Method:

1 @param: unSafeHtmlString
   escape(param) {};

2 @param: unSafeHtmlString
   strictEsacpe(param) {};

3 @param: safeHtmlString
   reverseEscape(param) {};

4 @param: safeHtmlString
   unescape(param) {};

5 @param: unSafeHtmlString
   removeUnsafe(param) {};

6 safeUrl() {};

7 unSafeUrl() {};


## Installation

```sh
npm install xssescape
```

## API

```js
var xs = require('xssescape')
```

## Usage.
### If you want to convert unSafeHtml String to safeHtml String through Sanitize (escape html characters)

```js
   var htmlStr = "<script> alert(document.cookie); </script>";
   xs.escape(htmlStr);
   
   // output: "&lt;script&gt alert(document.cookie); &lt/script&gt"
```

### If you want strict convertion.

```js
   var htmlStr = "<script> alert(document.cookie); </script>";
   xs.escape(htmlStr);
   
   // output: "&lt;script&gt alert&#40;document.cookie&#41;&#59; &lt/script&gt"
```

### If you want to convert safeHtml String to UnsafeHtml String.

```js
   var htmlStr = "&lt;script&gt alert&#40;document.cookie&#41;&#59; &lt/script&gt";
   xs.escape(htmlStr);
   
   // output: "<script> alert(document.cookie); </script>"
```

### If you want to send string as it is (unsafeHtml String)

```js
   var htmlStr = "<script> alert(document.cookie); </script>";
   xs.unescape(htmlStr);
   
   // output: "<script> alert(document.cookie); </script>"
```

### If you want to remove unsafeHtml String

```js
   var htmlStr = "<script> alert(document.cookie); </script>";
   xs.removeUnsafe(htmlStr);
   
   // output: "script alert(document.cookie); /script"
```

### If you want to remove strictly all unsafe string

```js
   var htmlStr = "<script> alert(document.cookie); </script>";
   xs.removeStrictUnsafe(htmlStr);
   
   // output: "script alertdocument.cookie /script"
```

### If you want to check for safe url,
 
```js
   var url = "http://randomrise.com/?<script> document.cookie </script>";
   xs.safeUrl(url);
   
   // it will reload/refresh the page without search parameter.
```

### If you want to do nothing with url,
 
```js
   var url = "http://randomrise.com/?<script> document.cookie </script>";
   xs.unSafeUrl(url);
   
   // it will reload/refresh the page search parameter.
```