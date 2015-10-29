'use strict';

CMAQ.filter('newline', function () {
  return function (input) {
    if (_.isString(input)) {
      input = input.replace(/\n/g, '<br />');
    }

    return input;
  };
});