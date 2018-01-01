# Wikipedia Dark

- Install from [userstyles.org](https://userstyles.org/styles/105844/) (with customization options) or [manually](https://raw.githubusercontent.com/StylishThemes/Wikipedia-Dark/master/wikipedia-dark.css).
- Stylus is available for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), [Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) and [Opera](https://addons.opera.com/en-gb/extensions/details/stylus/).
- Stylish is available for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/2108/), [Chrome](https://chrome.google.com/extensions/detail/fjnbnpbmkenffdnngjfgmeleoegfcffe), [Opera](https://addons.opera.com/en/extensions/details/stylish/), [Safari](http://sobolev.us/stylish/) and [Firefox Mobile](https://addons.mozilla.org/en-US/firefox/addon/2108/).

## Preview
![Wikipedia Dark preview](images/after.png)

## Limitations

* Many of the table cells have inline styling to add a background colors.
  * Some of the very common stylings have been replaced using attribute selectors ( e.g. `th[style*="background:#eee"]` ).
  * But due to the sheer number of possiblities, the replaced css style would also need to include selectors such as `th[style*="background-color: #eee"]` and `th[style*="background-color:#EEE"]` and `th[style*="background-color: #eeeeee"]`, etc.
  * It would be a daunting task to find and replace all of these colors. I hope you see my point.
* Not all images can be made readable.
  * This style uses a css filter to invert the images, but this really only works on basic black-and-white images.

## Contributions

If you would like to contribute to this repository, please...

1. Fork
2. Make changes (please read the [contribution guidelines](https://github.com/StylishThemes/Wikipedia-Dark/blob/master/CONTRIBUTING.md) and abide by them)
3. Create a pull request!

Thanks to all that have [contributed](https://github.com/StylishThemes/Wikipedia-Dark/blob/master/AUTHORS) so far!

## Recent Changes

### Version 1.0.32 (2018/01/01)

* Style entry page.

### Version 1.0.30 &ndash; 1.0.31 (2017/9/26)

* Tables: Darken row styling. Fixes [issue #28](https://github.com/StylishThemes/Wikipedia-Dark/issues/28).
* Diff: Darken diff changes. See [issue #28](https://github.com/StylishThemes/Wikipedia-Dark/issues/28).

### Version 1.0.29 (2017/9/1)

* Tables: Do not lighten black header text ([example](https://en.wikipedia.org/wiki/Comparison_of_eDonkey_software)).
