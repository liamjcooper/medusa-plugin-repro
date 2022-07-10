"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _cors = _interopRequireDefault(require("cors"));

var _medusaCoreUtils = require("medusa-core-utils");

var _default = function _default(rootDirectory) {
  var router = (0, _express.Router)();

  var _getConfigFile = (0, _medusaCoreUtils.getConfigFile)(rootDirectory, "medusa-config"),
      configModule = _getConfigFile.configModule;

  var projectConfig = configModule.projectConfig;
  var corsOptions = {
    origin: projectConfig.store_cors.split(","),
    credentials: true
  };
  router.options("/hello-world", (0, _cors["default"])(corsOptions));
  router.get("/hello-world", (0, _cors["default"])(corsOptions), function (req, res) {
    res.json({
      message: "Welcome to my new plugin!"
    });
  });
  return router;
};

exports["default"] = _default;