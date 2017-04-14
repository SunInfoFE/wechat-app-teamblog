var config = {
  	"server": "https://api.github.com",
  	"github": {
  		"user": "SunInfoFE",
  		"repo": "blog"
  	}
  };

//app.js
App({
  onLaunch: function () {

  },
  globalData:{
    config: {
      apiUrl: config.server + '/repos/' + config.github.user + '/' + config.github.repo,
      repoUrl: 'https://github.com/' + config.github.user + '/' + config.github.repo,
      github: config.github
    },
    site: {
      title: 'SunFlower'
    }
  }
})
