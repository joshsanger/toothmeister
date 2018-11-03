# Tooth Meister

View demo [here](http://joshuasanger.ca/toothmeister)

To run locally, clone the repo and run the following commands:

```
    npm install && webpack && grunt
```

# Notes
* The image for the person logged in (lucy) was not available in assets in Zeplin, so I included another image
* As mentioned to alex, there were font size / weight inconsistencies between the feed cards, so I applied the same styling for all cards. (Author text, body text, etc) 
* It looks like there were 3 sets of icons uses (Ion icon, Font Awesome, Material) so I included both Material and Font Awesome libraries and used as similar (if not the same) icons.
* Footer headings showed 600 font weight on Zeplin, but due to the font size, `font-weight: 500;` was more similar in the browser(s)
* Although solutions exists to manually code masonry layouts with CSS grid, it has browser support and layout flaws that take quite a bit of time to hash out. One of the cleanest solution I have found (global support, simplicity) is to use the [Masonry plugin by Desandro](http://masonry.desandro.com). 
* The code is set up to enable or disable the bottom subscribe button (If the input is empty) however I kept it enabled due to how it is in the design

# Features
* Faux page loading 
* Fully responsive
* Search modal with suggested searches
* Tooltip on disabled button hover
* Filters accordion
* Left menu items convert to a mobile menu
* Right menu item has dropdown on hover

# Browser Testing
The following browsers were tested and optimized:
* Chrome 70.0.3538.77
* Chrome Android 70.0.3538.80
* Firefox 63.0.1
* Internet Explorer 11
* Internet Explorer Edge
* Opera 56.0.3051.52
* Safari Ipad (iOS 9.3.5)
* Safari Mac 11.0.2

# Languages / tools Used
* Less / CSS3
* HTML5
* JavaScript Es6
* jQuery
* Webpack
* Babel
* Grunt
* Npm

> Coded with <3 by [Joshua Sanger](http://joshuasanger.ca)
