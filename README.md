# Wikipedia Dark

[![Tag](https://img.shields.io/github/tag/StylishThemes/Wikipedia-Dark.svg?label=tag)](https://github.com/StylishThemes/Wikipedia-Dark/tags)
[![Star](https://github-svg-buttons.herokuapp.com/star.svg?user=StylishThemes&repo=Wikipedia-Dark&style=flat&background=007ec6)](https://github.com/StylishThemes/Wikipedia-Dark/stargazers)
[![Fork](https://github-svg-buttons.herokuapp.com/fork.svg?user=StylishThemes&repo=Wikipedia-Dark&style=flat&background=007ec6)](https://github.com/StylishThemes/Wikipedia-Dark/fork)
[![devDependencies](https://img.shields.io/david/dev/StylishThemes/Wikipedia-Dark.svg?label=%20devDependencies%20)](https://david-dm.org/StylishThemes/Wikipedia-Dark?type=dev)
[![Gitter](https://img.shields.io/gitter/room/StylishThemes/Wikipedia-Dark.js.svg?maxAge=2592000)](https://gitter.im/StylishThemes/Lobby)

Applies to all Wikimedia wikis (wikipedia.org, wikidata.org, wiktionary.org, etc.), Wikidot wikis and the Arch Linux wiki.

## Preview

![Wikipedia Dark preview](images/desktop-mobile-dark-composite.png "Wikipedia's main page with the dark theme applied.")

This theme also works with the mobile sites (Minerva skin). For more comparisons, see [the image gallery](./images/).

## Installation

### A userstyle extension is required, common ones include

🎨 Stylus for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), [Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) or [Opera](https://addons.opera.com/en-gb/extensions/details/stylus/).

🎨 xStyle for [Firefox](https://addons.mozilla.org/firefox/addon/xstyle/) or [Chrome](https://chrome.google.com/webstore/detail/xstyle/hncgkmhphmncjohllpoleelnibpmccpj).

### Then install using one of these methods

📦 [Install the usercss](https://github.com/StylishThemes/Wikipedia-Dark/raw/master/wikipedia-dark.user.css) with Stylus or xStyle. Supports automatic updates.

📦 [Install from userstyles.org](https://userstyles.org/styles/105844) with customization, does not support automatic updates **(NO LONGER UPDATED)**.

## Additional Userstyles

⚙️ [Overlay-Scrollbars](https://github.com/StylishThemes/Overlay-Scrollbars)

## Limitations

* Many of the table cells have inline styling to add a background colors.
  * Some of the very common stylings have been replaced using attribute selectors ( e.g. `th[style*="background:#eee" i]` ).
  * But due to the sheer number of possiblities, the replaced css style would also need to include selectors such as `th[style*="background-color: #eee" i]` and `th[style*="background-color:#eee" i]`, `th[bgcolor="eee" i]` and `th[style*="background-color: #eeeeee" i]`, etc.
  * It would be a daunting task to find and replace *all* of these colors. I hope you see my point.
  * If you *really* want a background color to be fixed, please share a pull request of the fix. We may not always have time to get to it.
* Not all images can be made readable.
  * This style uses a css filter to invert the images, but this really only works on basic black-and-white images.

## Contributions

If you would like to contribute to this repository, please...

1. 👓 Read the [contribution guidelines](./CONTRIBUTING.md).
1. ![repo-forked](https://user-images.githubusercontent.com/136959/42383736-c4cb0db8-80fd-11e8-91ca-12bae108bccc.png) [Fork](https://github.com/StylishThemes/Wikipedia-Dark/fork) or ![cloud-download](https://user-images.githubusercontent.com/136959/42401932-9ee9cae0-813d-11e8-8691-16e29a85d3b9.png) [download](https://github.com/StylishThemes/Wikipedia-Dark/archive/master.zip) this repository.
1. 👌 Create a pull request!

Thanks to all that have [contributed](./AUTHORS) so far!
