/**
 * Custom JavaScript File
 *
 * Please use this file for all slide-specific javascript
 * (animations/interactions/etc). Use the following framework calls to
 * hook callbacks on to specific slides:
 *
 * @example On Slide Load:
 *    FW.PAGE.onLoad(<page_id>, <function>);
 * @example On Slide Visible:
 *    FW.PAGE.onVisible(<page_id>, <function>);
 */

/**
 * Framework Setting Overrides
 */
FW.SETTINGS.primary   = 'splash';
FW.SETTINGS.faketouch = true;
FW.SETTINGS.debug     = true;

/**
 * Global variables used across slides
 */
var patient_selection = "";

/**
 * Create Global Interactions on DOM load
 */
$(function()
{
	// Swiping (left/right)
	$('#screens').on('swipeLeft',  function(e) { FW.PAGE.next(); });
	$('#screens').on('swipeRight', function(e) { FW.PAGE.prev(); });

	// Swiping (up/down)
	//$('#screens').on('swipeUp', function(e) { alert('Up!'); });
	//$('#screens').on('swipeDown', function(e) { alert('Down!'); });

	// Tapping
	//$('#screens').on('tap', function(e) { alert('Tap!'); });
	//$('#screens').on('longTap', function(e) { alert('Long Tap!'); });
});

/**
 * Individual Page Functionality
 */

/* Splash */
FW.PAGE.onLoad('splash', function()
{

});

/* Slide 0.0.0 */
FW.PAGE.onLoad('slide.0.0.0', function()
{

});


/**
 * Let Framework know slides.js is loaded
 * REQUIRED! DO NOT REMOVE
 */
FW.SLIDESJS = true;