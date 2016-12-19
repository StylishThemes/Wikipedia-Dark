# Wikipedia Dark

- Install from [userstyles.org](https://userstyles.org/styles/105844/) (with customization options) or [manually](https://raw.githubusercontent.com/StylishThemes/Wikipedia-Dark/master/wikipedia-dark.css).
- Stylish is available for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/2108/), [Chrome](https://chrome.google.com/extensions/detail/fjnbnpbmkenffdnngjfgmeleoegfcffe) and [Opera](https://addons.opera.com/en/extensions/details/stylish-for-opera/).

## Preview
![Wikipedia Dark preview](images/after.png)

## Limitations

* Many of the table cells have inline styling to add a background colors.
  * Some of the very common stylings have been replaced using attribute selectors ( e.g. `th[style*="background:#eee"]` ).
  * But due to the sheer number of possiblities, the replaced css style would also need to include selectors such as `th[style*="background-color: #eee"]` and `th[style*="background-color:#EEE"]` and `th[style*="background-color: #eeeeee"]`, etc.
  * It would be a daunting task to find and replace all of these colors. I hope you see my point.
* Not all images can be made readable.
  * This style uses a css filter to invert the images, but this really only works on basic black-and-white images (not the logo).
  * The "Wikipedia" title under the logo is an image and was not inverted because it is part of the logo &amp; it changes depending on the selected language.

## Contributions

If you would like to contribute to this repository, please...

1. Fork
2. Make changes (please read the [contribution guidelines](https://github.com/StylishThemes/Wikipedia-Dark/blob/master/CONTRIBUTING.md) and abide by them)
3. Create a pull request!

Thanks to all that have [contributed](https://github.com/StylishThemes/Wikipedia-Dark/graphs/contributors) so far!

## Recent Changes

### Version 1.0.19 & 1.0.20 (12/19/2016)

* Define text color in pre elements. Fixes [issue #20](https://github.com/StylishThemes/Wikipedia-Dark/issues/20).
* Add white background for transparent images; see [request](https://forum.userstyles.org/discussion/48549/x).

### Version 1.0.18 (12/8/2016)

* Added support for related pages from beta. See [pull #19](https://github.com/StylishThemes/Wikipedia-Dark/pull/19); thanks [@chj1axr0](https://github.com/chj1axr0)!
* Inlcude missing `<code>` definitions.

### Version 1.0.17 (12/4/2016)

* Invert header icons & notification background. Fixes [issue #17](https://github.com/StylishThemes/Wikipedia-Dark/issues/17).
* Replace global selector. Fixes [issue #18](https://github.com/StylishThemes/Wikipedia-Dark/issues/18).
