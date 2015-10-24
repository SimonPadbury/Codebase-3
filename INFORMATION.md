#Rules for Codebase styling

(1.) The SCSS folder/file organisation identifies what is a BASE object, a LAYOUT object, a MODULE object and THEME styling (following SMACSS and OOCSS).

(2.) All objects are to be coded as **mixins**, and then a **class** is then to be created with the same name.

```
// EXAMPLE
// =======

@mixin menubar-list {...} 
// And other mixins that style various elements and states of the menubar.

@mixin menubar {...}
	
.menubar {
	@include menubar;
}
```

This is done so that:

	(a.) things are kept DRY ("don't  repeat yourself");
	
	(b.) any of these mixins can easily be used or coped elsewhere;
	
	(c.) designers/developers can use either mixins or classes to accomplish the same result frontend in the browser.

(3.) The mixin/class prefix **namespace** is unique to each **object**. This must be a single word; hyphens only for separating prefix, midfix and suffix. If necessary eliminate spaces within phrases to form a single word, e.g. 'menubar', 'searchform'. You may use camelCase if you prefer.

(4.) Objects contain multiple (often nested) **elements** within them. Elements are identified by a suffix (or sometimes midfix and suffix). Three part mixin/class names are only necessary where a **numeral** identifier is required as a suffix after the element name (e.g. in the grid system).

```
// EXAMPLE
// =======

// Prefix denotes object
@mixin menubar {...}

// Suffix denotes element(s) contained within an object
@mixin menubar-list {...}
@mixin menubar-listitem {...}
@mixin menubar-listlink {...}
```

(5.) Unless writing **classes** that can be reused for multiple kinds of HTML tags, it is not necessary (and may unnecessarily complicate things) to assign classes to each HTML tag element.

(6.) **The only deviation from these naming restrictions shall be in the grid system**, where even these simple restrictions may result in overly complicated mixin/class names. Thus:

* `grid` is OK as-is, short and sweet.
* `gridColumn` has been reduced to `column`.
* `gridColumnMedium-span-X` has been reduced to `medium-span-X`.
* ... etc.

Also note that the names `grid`, `column`, `offset`, `push` and `pull` are reserved class/mixin names, to be used only in the grid system and not in any other module.)
