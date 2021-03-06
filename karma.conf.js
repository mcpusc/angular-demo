//jshint strict: false
module.exports = function(config) {
  config.set({
    basePath:   './app',
    autoWatch:  true,
    frameworks: ['jasmine'],
    browsers:   ['Chrome'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'components/**/*.js',
      'view*/**/*.js'
    ],
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],
    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
