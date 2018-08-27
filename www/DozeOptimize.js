var exec = require("cordova/exec");

exports.RequestOptimizations = function(success, error) {
    exec(success, error, "DozeOptimize", "RequestOptimizations", []);
};

exports.RequestOptimizationsSettings = function (success, error) {
    exec(success, error, "DozeOptimize", "RequestOptimizationsSettings", []);
};

exports.IsIgnoringBatteryOptimizations = function(success, error) {
    exec(success, error, "DozeOptimize", "IsIgnoringBatteryOptimizations", []);
};
