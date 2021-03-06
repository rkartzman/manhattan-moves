module.exports = function(grunt) {
	var ip = grunt.option('ip') || 'localhost';
	grunt.initConfig({
		sass: {
			dev: {
				options: {
					outputStyle: 'expanded'
				}, 
				files: {
					'css/style.css': 'css/style.scss'
				}
			}
		}, 
		watch: {
			sass: {
				files: ['css/*.scss', 'css/partials/*.scss', 'css/vendor/*.scss'], 
				tasks: ['sass:dev']
			}, 
			css: {
        // options: { livereload: true },
        files: [
          'css/style.css'
        ]
      }
		}, 
		shell: {
			server: {
				command: 'killall php; php -S' + ip + ':3000', 
				options: {
					async: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell-spawn');

	grunt.registerTask('default', ['shell:server', 'watch']);

};