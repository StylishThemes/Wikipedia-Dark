module.exports = function (grunt) {
	'use strict';

	var config, getTheme, file;

	try {
		config = grunt.file.readJSON('build.json');
	} catch (err) {
		console.info('build.json not found - using defaults');
		config = {
			'color'    : '#4183C4',
			'visited'  : '#ff32a0',
			'image'    : 'url(https://raw.githubusercontent.com/StylishThemes/GitHub-Dark/master/images/backgrounds/bg-tile1.png)',
			'tiled'    : true,
			'attach'   : 'scroll',
			'webkit'   : false
		};
	}

	// ** set up build options **
	config.sourceFile = 'wikipedia-dark.css';
	// build file name
	config.buildFile = 'wikipedia-dark-' + config.color.replace(/[^\d\w]/g, '') + '.build.min.css';
	// background options
	config.bgOptions = config.tiled ?
		'background-repeat: repeat !important; background-size: auto !important; background-position: left top !important;' :
		'background-repeat: no-repeat !important; background-size: cover !important; background-position: center top !important;';
	config.bgAttachment = config.attach.toLowerCase() === 'scroll' ? 'scroll' : 'fixed';

	// custom build
	config.replacements = [{
		pattern: /\/\*\[\[bg-choice\]\]\*\/ url\(.*\)/,
		replacement: config.image
	},{
		pattern: '/*[[bg-options]]*/',
		replacement: config.bgOptions
	},{
		pattern: '/*[[bg-attachment]]*/ fixed',
		replacement: config.bgAttachment
	},{
		pattern: /\/\*\[\[base-color\]\]\*\/ #\w{3,6}/g,
		replacement: config.color
	},{
		pattern: /\/\*\[\[visited-color\]\]\*\/ #\w{3,6}/g,
		replacement: config.visited
	},{
		// remove default syntax themes AND closing bracket
		pattern: /\s+\/\* grunt build - remove to end of file(.*(\n|\r))+\}$/m,
		replacement: ''
	}];

	// userstyles.org - remove defaults & leave placeholders
	config.replacements_user = [{
		pattern: /\/\*\[\[bg-choice\]\]\*\/ url\(.*\)/,
		replacement: '/*[[bg-choice]]*/'
	},{
		pattern: '/*[[bg-attachment]]*/ fixed',
		replacement: '/*[[bg-attachment]]*/'
	},{
		pattern: /\/\*\[\[base-color\]\]\*\/ #\w{3,6}/g,
		replacement: '/*[[base-color]]*/'
	},{
		pattern: /\/\*\[\[visited-color\]\]\*\/ #\w{3,6}/g,
		replacement: '/*[[visited-color]]*/'
	},{
		pattern: '  /* grunt build - remove to end of file */\n',
		replacement: ''
	}];

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		config: config,

		'string-replace': {
			inline: {
				files: { '<%= config.buildFile %>' : '<%= config.sourceFile %>' },
				options: { replacements: '<%= config.replacements %>' }
			},
			mark: {
				files: { '<%= config.buildFile %>' : '<%= config.buildFile %>' },
				options: {
					replacements: [{
						pattern: /\/\*\[\[/gm,
						replacement: '/*![['
					}]
				}
			},
			unmark: {
				files: { '<%= config.buildFile %>' : '<%= config.buildFile %>' },
				options: {
					replacements: [{
						pattern: /\/\*\!\[\[/gm,
						replacement: '/*[['
					}]
				}
			},
			fix: {
				files: { '<%= config.buildFile %>' : '<%= config.buildFile %>' },
				options: {
					replacements: [{
						pattern: /\;\:\/\*\[\[/gm,
						replacement: ';/*[['
					}]
				}
			},
			// Webkit browser, unwrap main @-moz-document
			webkit : {
				files: { '<%= config.buildFile %>' : '<%= config.buildFile %>' },
				options: {
					replacements: [{
						pattern: /(@-moz-document(.*)\{(\n|\r)+)/m,
						replacement: ''
					},{
						pattern: /\/\* grunt-webkit-remove-to-end-of-file(.*(\n|\r))+\}$/gm,
						replacement: ''
					}]
				}
			},
			// remove webkit placeholder
			webkitplaceholder: {
				files: { '<%= config.buildFile %>' : '<%= config.buildFile %>' },
				options: {
					replacements: [{
						pattern: ' /* grunt-webkit-remove-to-end-of-file */',
						replacement: ''
					}]
				}
			}
		},
		cssmin: {
			minify: {
				files: { '<%= config.buildFile %>' : '<%= config.buildFile %>' },
				options: {
					keepSpecialComments: '*',
					advanced: false
				}
			}
		},
		watch: {
			css: { files: [ 'wikipedia-dark.css' ] }
		}
	});

	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// build custom wikipedia-Dark style using build.json settings
	grunt.registerTask('default', 'Building custom style', function() {
		config.buildFile = config.buildFile.replace('.min.css', '.css');
		grunt.task.run(['string-replace:inline']);
		if (config.webkit) {
			grunt.task.run(['string-replace:webkit']);
		} else {
			grunt.task.run(['string-replace:webkitplaceholder']);
		}
	});
	// build custom minified wikipedia-Dark style
	grunt.registerTask('minify', 'Building custom minified style', function() {
		grunt.task.run(['string-replace:inline']);
		if (config.webkit) {
			grunt.task.run(['string-replace:webkit']);
		}
		grunt.task.run(['cssmin:minify']);
	});

	// build userstyle for pasting into https://userstyles.org/styles/105844/wikipedia-dark-st
	grunt.registerTask('user', 'building userstyles.org file', function () {
		config.buildFile = 'wikipedia-dark-userstyle.build.css';
		config.replacements = config.replacements_user;
		grunt.task.run([
			'string-replace:inline',
			'string-replace:webkitplaceholder'
		]);
	});
	grunt.registerTask('usermin', 'building userstyles.org file', function () {
		config.buildFile = 'wikipedia-dark-userstyle.build.css';
		config.replacements = config.replacements_user;
		grunt.task.run([
			'string-replace:inline',
			'string-replace:mark',
			'cssmin:minify',
			'string-replace:unmark',
			'string-replace:fix'
		]);
	});

	// watch thingy
	grunt.registerTask('dev', ['watch']);

};
