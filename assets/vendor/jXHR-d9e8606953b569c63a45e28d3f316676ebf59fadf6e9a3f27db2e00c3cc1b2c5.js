!function(t){var e=t.setTimeout,n=t.document,i=0;t.jXHR=function(){function o(){try{d.parentNode.removeChild(d)}catch(t){}}function r(){c=!1,u="",o(),d=null,l(0)}function s(t){try{p.onerror.call(p,t,u)}catch(e){throw new Error(t)}}function a(){this.readyState&&"complete"!==this.readyState&&"loaded"!==this.readyState||c||(this.onload=this.onreadystatechange=null,c=!0,4!==p.readyState&&s("Script failed to load ["+u+"]."),o())}function l(t,e){e=e||[],p.readyState=t,"function"==typeof p.onreadystatechange&&p.onreadystatechange.apply(p,e)}var u,c,d,p=null;return p={onerror:null,onreadystatechange:null,readyState:0,open:function(e,n){r(),internal_callback="cb"+i++,function(e){t.jXHR[e]=function(){try{l.call(p,4,arguments)}catch(n){p.readyState=-1,s("Script failed to run ["+u+"].")}t.jXHR[e]=null}}(internal_callback),u=n.replace(/=\?/,"=jXHR."+internal_callback),l(1)},send:function(){e(function(){d=n.createElement("script"),d.setAttribute("type","text/javascript"),d.onload=d.onreadystatechange=function(){a.call(d)},d.setAttribute("src",u),n.getElementsByTagName("head")[0].appendChild(d)},0),l(2)},setRequestHeader:function(){},getResponseHeader:function(){return""},getAllResponseHeaders:function(){return[]}},r(),p}}(window);