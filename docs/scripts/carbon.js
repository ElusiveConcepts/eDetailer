(function(C,undefined)
{
	var nav = document.getElementsByTagName('nav')[0];

	if (document.addEventListener) { document.addEventListener('scroll', myOnScroll, false); }
	else if (document.attachEvent) { document.attachEvent("onScroll", myOnScroll); }

	function myOnScroll()
	{
		var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

		if(top > 100) { nav.className = 'pinned'; }
		else          { nav.className = ''; }
	};

}(CARBON = window.CARBON || {}))