/** @license MIT - ©2013 Ruben Verborgh */
(function(){function n(){var c,f,i={then:function(n,r){return c(n,r)}};return function(){var r=[];c=function(e,t){var o=n();return r.push({d:o,f:e,r:t}),o.promise()},f=function(n,e,v,s){for(var a=0,p=r.length;p>a;a++){var h=r[a],d=h.d,l=h[n];typeof l!==o?d[e](s):t(l,s,d)}c=v(i,s),f=u}}(),{resolve:function(n){f("f","resolve",r,n)},reject:function(n){f("r","reject",e,n)},promise:function(){return i}}}function r(r,e){return function(u){if(typeof u!==o)return r;var c=n();return process.nextTick(t.bind(r,u,e,c)),c.promise()}}function e(r,e){return function(u,c){if(typeof c!==o)return r;var f=n();return process.nextTick(t.bind(r,c,e,f)),f.promise()}}function t(n,r,e){try{var t=n(r);t&&typeof t.then===o?t.then(e.resolve,e.reject):e.resolve(t)}catch(u){e.reject(u)}}var o="function",u=function(){};module.exports={resolve:function(n){var e={};return e.then=r(e,n),e},reject:function(n){var r={};return r.then=e(r,n),r},deferred:n}})();