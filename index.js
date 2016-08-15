/**
 *  Copyright © http://randomrise.com, as an published work.  All rights reserved.
 *  This software or data is the property of http://randomrise.com.
 *  This software is intend to provide open source (FREE TO USE) but any reproduction is not allowed.
 *  
 *  @contact: http://randomrise.com
 *  @author:  ChandraShekher Polimera (linkedin: chandrashekherpolimera | email: chandrashekher@techie.com)
 *  @github:  https://github.com/chandragithub/xssescape.git
 *  @date:    15/08/2016
 *  @version: 0.0.13 (beta)
 */

var xssescape = (function () 
{
    var xssescape = {};
    
    xssescape.escape = function (htmlStr) 
    {
      if (htmlStr === undefined) 
      {
          return null;
      }
      else
      {
        return String(htmlStr)
          .replace(/&/g, '&amp;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
    };
    
    xssescape.strictEscape = function(htmlStr)
    {
       if (htmlStr === undefined) 
       {
          return null;
       }
       else
       {
        return String(htmlStr)
          .replace(/&/g, '&amp;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/\%/g, '&#37;')
          .replace(/\;/g, '&#59;')
          .replace(/\(/g, '&#40;')
          .replace(/\)/g, '&#41;')
          .replace(/\+/g, '&#43;')
          .replace(/\-/g, '&#45;');
       } 
    };
    
    
    xssescape.reverseEscape = function(htmlStr) 
    {
      if (htmlStr === undefined) 
      {
          return null;
      }
      else
      {
         return String(htmlStr)
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'")
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&#37;/g, '%')
          .replace(/&#59;/g, ';')
          .replace(/&#40;/g, '(')
          .replace(/&#41;/g, ')')
          .replace(/&#43;/g, '+')
          .replace(/&#45;/g, '-');
      }
    };
    
    xssescape.unescape = function(htmlStr) 
    {
      if (htmlStr === undefined) 
      {
          return null;
      }
      else
      {
         return htmlStr;
      }

    };
    
    xssescape.removeUnsafe = function(htmlStr)
    {
       if (htmlStr === undefined) 
       {
          return null;
       }
       else
       {
         return String(htmlStr)
          .replace(/&/g, '')
          .replace(/"/g, '')
          .replace(/'/g, '')
          .replace(/</g, '')
          .replace(/>/g, '');
       }
    };
    
    xssescape.removeStrictUnsafe = function(htmlStr)
    {
       if (htmlStr === undefined) 
       {
          return null;
       }
       else
       {
        return String(htmlStr)
          .replace(/&/g, '')
          .replace(/"/g, '')
          .replace(/'/g, '')
          .replace(/</g, '')
          .replace(/>/g, '')
          .replace(/\%/g, '')
          .replace(/\;/g, '')
          .replace(/\(/g, '')
          .replace(/\)/g, '')
          .replace(/\+/g, '')
          .replace(/\-/g, '');
       } 
    };

    xssescape.safeUrl = function()
    {
        if(typeof window !== 'undefined')
        {
           var searchLocation =  location.search;
           var unSafeChar = searchLocation.match(/[script|document|cookie]/g);
              
           ((unSafeChar !== null) ? (unSafeChar.length > 0 ? location.replace("/") : "") : "");
             
        }
        else
        {
           throw "Node Doesn't Support safeUrl";
        }
    };
    
    xssescape.safeUrlWithPath = function(path)
    {
        if(typeof window !== 'undefined')
        {
           var searchLocation =  location.search;
           var unSafeChar = searchLocation.match(/[script|document|cookie]/g);
              
           ((unSafeChar !== null) ? (unSafeChar.length > 0 ? location.replace(path) : "") : "");
             
        }
        else
        {
           throw "Node Doesn't Support safeUrl";
        }
    };
    
    xssescape.safeUrlWithHash = function(path)
    {
        if(typeof window !== 'undefined')
        {
           var searchLocation =  location.hash;
           var unSafeChar = searchLocation.match(/[javascript|script|document|cookie]/g);
              
           ((unSafeChar !== null) ? (unSafeChar.length > 0 ? location.replace(path) : "") : "");
             
        }
        else
        {
           throw "Node Doesn't Support safeUrl";
        }
    };
    
    xssescape.unSafeUrl = function()
    {
        var searchLocation =  location.search;
        location.replace(searchLocation);
    };
     
    return xssescape;
}());

if (typeof window === 'undefined') 
{
    module.exports = xssescape;
    module.exports = xssescape;
}
else 
{
    window.xssescape = xssescape;
};

