# css-filter-grayscale 1.0.6

Css module of single purpose classes for filter grayscale

#### Stats

354 | 40 | 80
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev css-filter-grayscale
```

Learn more about using css installed with npm:
* https://webpack.github.io/docs/stylesheets.html
* https://github.com/defunctzombie/npm-css

#### With Git

http:
```
git clone https://github.com/tachyons-css/css-filter-grayscale
```

ssh:
```
git clone git@github.com:tachyons-css/css-filter-grayscale.git
```

## Usage

#### Using with [Postcss](https://github.com/postcss/postcss)

Import the css module

```css
@import "css-filter-grayscale";
```

Then process the css using the [`tachyons-cli`](https://github.com/tachyons-css/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons path/to/css-file.css > dist/t.css
```

#### Using the css

##### CDN
The easiest and most simple way to use the css is to use the cdn hosted version. Include it in the head of your html with:

```
<link rel="stylesheet" href="http://unpkg.com/css-filter-grayscale@1.0.6/css/css-filter-grayscale.min.css" />
```

##### Locally
The built css is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/css-filter-grayscale">
```

#### Development

The source css files can be found in the `src` directory.
Running `$ npm start` will process the source css and place the built css in the `css` directory.

## The css

```css
/*
   FILTER GRAYSCALE
*/
.gray-10 { -webkit-filter: grayscale( 10% ); filter: grayscale( 10% ); }
.gray-20 { -webkit-filter: grayscale( 20% ); filter: grayscale( 20% ); }
.gray-30 { -webkit-filter: grayscale( 30% ); filter: grayscale( 30% ); }
.gray-40 { -webkit-filter: grayscale( 40% ); filter: grayscale( 40% ); }
.gray-50 { -webkit-filter: grayscale( 50% ); filter: grayscale( 50% ); }
.gray-60 { -webkit-filter: grayscale( 60% ); filter: grayscale( 60% ); }
.gray-70 { -webkit-filter: grayscale( 70% ); filter: grayscale( 70% ); }
.gray-80 { -webkit-filter: grayscale( 80% ); filter: grayscale( 80% ); }
.gray-90 { -webkit-filter: grayscale( 90% ); filter: grayscale( 90% ); }
.gray-100 { -webkit-filter: grayscale( 100% ); filter: grayscale( 100% ); }
@media screen and (min-width: 48em) {
 .gray-10-ns { -webkit-filter: grayscale( 10% ); filter: grayscale( 10% ); }
 .gray-20-ns { -webkit-filter: grayscale( 20% ); filter: grayscale( 20% ); }
 .gray-30-ns { -webkit-filter: grayscale( 30% ); filter: grayscale( 30% ); }
 .gray-40-ns { -webkit-filter: grayscale( 40% ); filter: grayscale( 40% ); }
 .gray-50-ns { -webkit-filter: grayscale( 50% ); filter: grayscale( 50% ); }
 .gray-60-ns { -webkit-filter: grayscale( 60% ); filter: grayscale( 60% ); }
 .gray-70-ns { -webkit-filter: grayscale( 70% ); filter: grayscale( 70% ); }
 .gray-80-ns { -webkit-filter: grayscale( 80% ); filter: grayscale( 80% ); }
 .gray-90-ns { -webkit-filter: grayscale( 90% ); filter: grayscale( 90% ); }
 .gray-100-ns { -webkit-filter: grayscale( 100% ); filter: grayscale( 100% ); }
}
@media screen and (min-width:48em) and (max-width: 64em) {
 .gray-10-m { -webkit-filter: grayscale( 10% ); filter: grayscale( 10% ); }
 .gray-20-m { -webkit-filter: grayscale( 20% ); filter: grayscale( 20% ); }
 .gray-30-m { -webkit-filter: grayscale( 30% ); filter: grayscale( 30% ); }
 .gray-40-m { -webkit-filter: grayscale( 40% ); filter: grayscale( 40% ); }
 .gray-50-m { -webkit-filter: grayscale( 50% ); filter: grayscale( 50% ); }
 .gray-60-m { -webkit-filter: grayscale( 60% ); filter: grayscale( 60% ); }
 .gray-70-m { -webkit-filter: grayscale( 70% ); filter: grayscale( 70% ); }
 .gray-80-m { -webkit-filter: grayscale( 80% ); filter: grayscale( 80% ); }
 .gray-90-m { -webkit-filter: grayscale( 90% ); filter: grayscale( 90% ); }
 .gray-100-m { -webkit-filter: grayscale( 100% ); filter: grayscale( 100% ); }
}
@media screen and (min-width: 64em) {
 .gray-10-l { -webkit-filter: grayscale( 10% ); filter: grayscale( 10% ); }
 .gray-20-l { -webkit-filter: grayscale( 20% ); filter: grayscale( 20% ); }
 .gray-30-l { -webkit-filter: grayscale( 30% ); filter: grayscale( 30% ); }
 .gray-40-l { -webkit-filter: grayscale( 40% ); filter: grayscale( 40% ); }
 .gray-50-l { -webkit-filter: grayscale( 50% ); filter: grayscale( 50% ); }
 .gray-60-l { -webkit-filter: grayscale( 60% ); filter: grayscale( 60% ); }
 .gray-70-l { -webkit-filter: grayscale( 70% ); filter: grayscale( 70% ); }
 .gray-80-l { -webkit-filter: grayscale( 80% ); filter: grayscale( 80% ); }
 .gray-90-l { -webkit-filter: grayscale( 90% ); filter: grayscale( 90% ); }
 .gray-100-l { -webkit-filter: grayscale( 100% ); filter: grayscale( 100% ); }
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

