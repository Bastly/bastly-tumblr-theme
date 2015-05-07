var dest = "./dist";
var src = './src';

module.exports = {
  browserSync: {
    server: {
      // Serve up our dist folder
      baseDir: dest
    }
  },
  styles: {
    src: src + "/stylesheets/**/*.{sass,scss}",
    dest: dest + '/stylesheets/',
    settings: {
      imagePath: 'images' // Used by the image-url helper
    }
  },
  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  scripts: {
    src: src + "/scripts/**/*.js",
    dest: dest + "/scripts/",
  },
  markup: {
    src: src + "/**/*.html",
    dest: dest,
  },
  iconFonts: {
    name: 'Gulp Starter Icons',
    src: src + '/icons/*.svg',
    dest: dest + '/fonts',
    sassDest: src + '/stylesheets',
    template: './gulp/tasks/iconFont/template.sass.swig',
    sassOutputName: '_icons.sass',
    fontPath: 'fonts',
    className: 'icon',
    options: {
      fontName: 'Post-Creator-Icons',
      appendCodepoints: true,
      normalize: false
    }
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [ {
      entries: src + '/scripts/main.js',
      dest: dest + '/scripts',
      outputName: 'global.js',
      // list of externally available modules to exclude from the bundle
      external: ['jquery', 'underscore']
    }]
  },
  production: {
    cssSrc: dest + '/stylesheets/*.css',
    jsSrc: dest + '/scripts/*.js',
    cssDest: dest + '/stylesheets',
    jsDest: dest + '/scripts'
  }
};
