# abs-array
A JavaScript Package For Converting Negative Value To Positive. Also works when non-numbers are present as well.

![npm](https://img.shields.io/npm/v/abs-array.svg) ![license](https://img.shields.io/npm/l/abs-array.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/abs-array.svg) 


![nodei.co](https://nodei.co/npm/abs-array.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/abs-array.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/abs-array.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/abs-array.svg)

## Features


## `npm` Install

`npm install --save abs-array`

## Script Tag

#### For Development
```js
<script src=""></script>
```
#### For Production
```js
<script src=""></script>
```

## Usage

```js
const abs = require('abs-array');

abs([-1,-2,5,6,8,-7]);
//=> [ 1, 2, 5, 6, 8, 7 ]

abs([-1,-2,"foo",{},[]])
//=> [ 1, 2, 'foo', {}, [] ]

abs([-1,-2,"foo",{},[],-100])
//=> [ 1, 2, 'foo', {}, [], 100 ]

abs(); // Without parameter function will return a type error
//=> TypeError: abs() expects an array parameter

```

## Author

Prosen Ghosh <prosenghosh25@gmail.com>

## License

 - **MIT** 
