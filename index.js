/**
 *  Copyright © http://randomrise.com, as an published work.  All rights reserved.
 *  THIS SOFTWARE OR DATA IS THE PROPERTY OF http://randomrise.com.
 *  THIS SOFTWARE INTENTD TO PROVIDE OPEN SOURCE (FREE TO USE) BUT ANY REPRODUCTION NOT ALLOWED.
 *  CONTACT: http://randomrise.com
 *
 * @author ChandraShekher Polimera (linkedin: chandrashekherpolimera | email: chandrashekher@techie.com)
 * @date 13/08/2016
 * @version 0.0.5
 */

var xssescape = (function () 
{
    var xssescape = {};
    
    xssescape.escape = function (htmlStr) 
    {
      if (str === undefined) 
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
    
    xssescape.strictEsacpe = function(htmlStr)
    {
       if (str === undefined) 
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
          .replace(/%/g, '&#37;')
          .replace(/;/g, '&#59')
          .replace(/(/g, '&#40;')
          .replace(/)/g, '&#41;')
          .replace(/+/g, '&#43;')
          .replace(/-/g, '&#45;');
       } 
    }
    
    xssescape.unescape = function(htmlStr) 
    {
      if (str === undefined) 
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
          .replace(/&gt;/g, '>');
      }

    };
    
    xssescape.removeUnsafe = function(htmlStr)
    {
       if (str === undefined) 
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

    xssescape.safeUrl = function()
    {
        if(typeof window !== 'undefined')
        {
           var searchLocation =  location.search;
           var unSafeChar = searchLocation.match(/[script]/g);
              
           ((unSafeChar !== null) ? (unSafeChar.length > 0 ? location.replace("/") : "") : "");
             
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
}
else 
{
    window.xssescape = xssescape;
}