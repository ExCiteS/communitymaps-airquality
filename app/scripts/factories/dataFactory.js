'use strict';

CMAQ.factory('data', function () {
  var data = {};

  data.authentication = {};
  data.points = [];

  data.unsynced = {
    points: []
  };

  return data;
});
