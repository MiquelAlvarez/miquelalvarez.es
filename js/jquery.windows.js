!function(n,t,e,o){function i(t,e){this.element=t,s=s=n.extend({},r,e),this._defaults=r,this._name=a,f.push(t);var o=n(t).isOnScreen();n(t).data("onScreen",o),o&&s.onWindowEnter(n(t))}var a="windows",r={snapping:!0,snapSpeed:500,snapInterval:1100,onScroll:function(){},onSnapComplete:function(){},onWindowEnter:function(){}},s={},c=n(t),u=0,l=null,f=[];n.fn.ratioVisible=function(){var n=c.scrollTop();if(!this.isOnScreen())return 0;var t=this.offset(),e=t.top-n,o=c.height(),i=(e+o)/o;return i>1&&(i=1-(i-1)),i},n.fn.isOnScreen=function(){var n=c.scrollTop(),t=c.height(),e=this.offset(),o=e.top-n;return o>=t||-t>=o?!1:!0};var h=n.fn.getCurrentWindow=function(){var t=0,e=f[0];return n.each(f,function(o){var i=n(this).ratioVisible();Math.abs(i)>Math.abs(t)&&(e=n(this),t=i)}),n(e)},p=function(){u=c.scrollTop(),S(),s.onScroll(u),n.each(f,function(t){var e=n(this),o=e.isOnScreen();o&&(e.data("onScreen")||s.onWindowEnter(e)),e.data("onScreen",o)})},d=function(){S()},S=function(){l&&clearTimeout(l),s.snapping&&(l=setTimeout(function(){var t=h(),e=t.offset().top,o=!1;n("html:not(:animated),body:not(:animated)").animate({scrollTop:e},s.snapSpeed,function(){o||(l&&clearTimeout(l),l=null,o=!0,s.onSnapComplete(t))})},s.snapInterval))};n.fn[a]=function(t){return c.scroll(p),c.resize(d),this.each(function(e){n.data(this,"plugin_"+a)||n.data(this,"plugin_"+a,new i(this,t))})}}(jQuery,window,document);