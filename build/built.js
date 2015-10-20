(function(window,undefined){

	function add(a,b){
      
		return a+b;

	}

	add(3,4);

})(window);;module.exports = function (grunt) {
  grunt.initConfig({

     pkg: grunt.file.readJSON("package.json"),

     uglify:{
            options: {
                stripBanner: true,
                banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'//添加banner
            },
            build: {//任务一：压缩a.js，不混淆变量名，保留注释，添加banner和footer
                src: 'src/test.js',
                dest:'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
            }
     },

     jshint:{
         
        build: ['Gruntfile.js','src/*.js'],
        
        options:{
           jshintrc: '.jshintrc'
        } 

     },

     watch:{
       
       js:{
         
          files: ['src/*.js'],

          tasks: ['jshint']

       }

     },

     concat: {
            options: {
                //文件内容的分隔符
                separator: ';'
            },
            dist: {
                src: ['src/*.js','Gruntfile.js'],
                dest: 'build/built.js'
            }
    },

    cssmin: {
         options: {  
             keepSpecialComments: 0  
         },
         minify: {
           expand: true,
           cwd: 'css/',
           src: ['*.css', '!*.min.css'],
           dest: 'css/',
           ext: '.min.css'
         },  
         combine: {  
             files: {  
                 'css/default.css': [  
                     "css/all.css",   
                     "css/index.css"  
                 ]  
             }  
         } 
    }

 /*   //压缩图片
    imagemin: {
      prod: {
        options: {
          optimizationLevel: 7,
          pngquant: true
        },
        files: [
          {expand: true, cwd: 'dist/html', src: ['images/*.{png,jpg,jpeg,gif,webp,svg}'], dest: 'dist/html'}
        ]
      }
    }*/

   /* htmlmin: {
      options: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true
      },
      html: {
        files: [
          {expand: true, cwd: 'dist/html', src: ['*.html'], dest: 'dist/html'}
        ]
      }
    }*/

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default',['jshint','concat','uglify','cssmin','watch']);
};