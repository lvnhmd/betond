'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.deleteImage = function deleteImage (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.deleteImage(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getImage = function getImage (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.getImage(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listImages = function listImages (req, res, next) {
  Default.listImages()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.resizeImage = function resizeImage (req, res, next) {
  var id = req.swagger.params['id'].value;
  var width = req.swagger.params['width'].value;
  var height = req.swagger.params['height'].value;
  Default.resizeImage(id,width,height)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.uploadImage = function uploadImage (req, res, next) {
  var fileName = req.swagger.params['fileName'].value;
  var fileData = req.swagger.params['fileData'].value;
  Default.uploadImage(fileName,fileData)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
