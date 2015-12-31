# grunt

  grunt作为代码构建工具，它除了写码源之外其他的前端代码操作都能完成。
  
  grunt的作用一般有以下几点：
  
  检查语法，单元测试，拼接，压缩，合并源码,文件检测等

  具体参数配置可参考以下网址：http://gruntjs.cn/configuring-tasks
  
  入门教程：http://www.cnblogs.com/wangfupeng1988/p/4561993.html
  
  使用步骤：
  1. 安装nodejs
  2. npm install -g grunt-cli （将grunt-cli安装到全局环境中才能使用grunt）
  3. 在项目文件里创建package.json和Gruntfile.js文件
  4. 安装grunt  npm install grunt --save-dev
  5. 配置Gruntfile.js和package.json文件
  6. 安装Grunt插件  如 npm install grunt-contrib-uglify --save-dev, grunt-contrib-cssmin
  7. 在Gruntfile.js文件中的grunt.initConfig方法中配置任务参数，加载插件，执行任务
  8. 执行grunt命令
  
 for example:

  配置Gruntfile.js:

  module.exports = function(grunt){

	grunt.initConfig({

		pkg:grunt.file.readJSON('package.json'),
               

		uglify:{
			options:{
				stripBanners: true,
				banner: '/*! <%=pkg.name%>-<%=pkg.version%> */'
			},     

            release: {                          //合并压缩a.js和b.js
                files: {
                    'index.min.js': ['scripts/**/*.js','scripts/*.js']
                }
            }
			
		},

		cssmin: {
            options: {  
                keepSpecialComments: 0  
            },  
            combine: {  
                files: {  
                    'index.min.css': ["css/*.css"]  
                }  
            }
        }

      
	});

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');



	grunt.registerTask('default',['uglify','cssmin']);

}
