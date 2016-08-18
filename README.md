# css-filter-grayscale 0.0.7

Css module of single purpose classes for filter grayscale

#### Stats

301 | 40 | 40
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev css-filter-grayscale
```

#### With Git

```
git clone https://github.com/tachyons-css/css-filter-grayscale
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "css-filter-grayscale";
```

Then process the CSS using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons-cli path/to/css-file.css > dist/t.css
```

#### Using the CSS

The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/css-filter-grayscale">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
/*
   FILTER GRAYSCALE
*/
.gray-10 { filter: grayscale( 10% ); }
.gray-20 { filter: grayscale( 20% ); }
.gray-30 { filter: grayscale( 30% ); }
.gray-40 { filter: grayscale( 40% ); }
.gray-50 { filter: grayscale( 50% ); }
.gray-60 { filter: grayscale( 60% ); }
.gray-70 { filter: grayscale( 70% ); }
.gray-80 { filter: grayscale( 80% ); }
.gray-90 { filter: grayscale( 90% ); }
.gray-100 { filter: grayscale( 100% ); }
@media screen and (min-width: 48em) {
 .gray-10-ns { filter: grayscale( 10% ); }
 .gray-20-ns { filter: grayscale( 20% ); }
 .gray-30-ns { filter: grayscale( 30% ); }
 .gray-40-ns { filter: grayscale( 40% ); }
 .gray-50-ns { filter: grayscale( 50% ); }
 .gray-60-ns { filter: grayscale( 60% ); }
 .gray-70-ns { filter: grayscale( 70% ); }
 .gray-80-ns { filter: grayscale( 80% ); }
 .gray-90-ns { filter: grayscale( 90% ); }
 .gray-100-ns { filter: grayscale( 100% ); }
}
@media screen and (min-width:48em) and (max-width: 64em) {
 .gray-10-m { filter: grayscale( 10% ); }
 .gray-20-m { filter: grayscale( 20% ); }
 .gray-30-m { filter: grayscale( 30% ); }
 .gray-40-m { filter: grayscale( 40% ); }
 .gray-50-m { filter: grayscale( 50% ); }
 .gray-60-m { filter: grayscale( 60% ); }
 .gray-70-m { filter: grayscale( 70% ); }
 .gray-80-m { filter: grayscale( 80% ); }
 .gray-90-m { filter: grayscale( 90% ); }
 .gray-100-m { filter: grayscale( 100% ); }
}
@media screen and (min-width: 64em) {
 .gray-10-l { filter: grayscale( 10% ); }
 .gray-20-l { filter: grayscale( 20% ); }
 .gray-30-l { filter: grayscale( 30% ); }
 .gray-40-l { filter: grayscale( 40% ); }
 .gray-50-l { filter: grayscale( 50% ); }
 .gray-60-l { filter: grayscale( 60% ); }
 .gray-70-l { filter: grayscale( 70% ); }
 .gray-80-l { filter: grayscale( 80% ); }
 .gray-90-l { filter: grayscale( 90% ); }
 .gray-100-l { filter: grayscale( 100% ); }
}
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

* [mrmrs](http://mrmrs.io)
* [johno](http://johnotander.com)

## License

ISC
