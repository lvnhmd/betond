'use strict';


/**
 * Delete an Image object
 *
 * id Long ID of Image object
 * no response value expected for this operation
 **/
exports.deleteImage = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Return an Image object
 *
 * id Long ID of Image object
 * returns Image
 **/
exports.getImage = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "height" : 480,
  "width" : 640,
  "name" : "image",
  "url" : "http://example.com/image-640x480.png"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return all Image objects
 *
 * returns List
 **/
exports.listImages = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "height" : 480,
  "width" : 640,
  "name" : "image",
  "url" : "http://example.com/image-640x480.png"
}, {
  "id" : 1,
  "height" : 480,
  "width" : 640,
  "name" : "image",
  "url" : "http://example.com/image-640x480.png"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Return an Image object resized according to query parameters
 *
 * id Long ID of image object to fetch
 * width Long Target width
 * height Long Target height
 * returns Image
 **/
exports.resizeImage = function(id,width,height) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "height" : 480,
  "width" : 640,
  "name" : "image",
  "url" : "http://example.com/image-640x480.png"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Upload an image file and create a new Image object
 *
 * fileName String The image file name (optional)
 * fileData File The Image file to upload (optional)
 * returns Image
 **/
exports.uploadImage = function(fileName,fileData) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 1,
  "height" : 480,
  "width" : 640,
  "name" : "image",
  "url" : "http://example.com/image-640x480.png"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

