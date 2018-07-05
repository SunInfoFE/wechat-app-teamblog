//index.js
//获取应用实例
var util = require('../../util/util.js');
var app = getApp()
var config = app.globalData.config;
Page({
  data: {
    nowRepo: [],
    site: app.globalData.site
  },
  fetchList: function (success, fail, paged) {
    var _success = success
    var paged = paged || 1
    var that = this;
    wx.request({
      url: config.repo,
      success: function (res) {
        wx.setStorage({
          key: 'nowRepo',
          data: res.data
        })
        if (_success !== void 0) {
          _success(res.data);
        }

      },
      fail: fail
    })
  },

  getList: function () {
    var that = this;
    return new Promise(function (resolve, reject) {
      wx.getStorage({
        key: 'nowRepo',
        success: function (res) {
          if (res.data && res.data.length) {
            resolve(res.data);
            that.fetchList() // 更新数据
          } else {
            that.getList(function (data) {
              resolve(res.data)
            })
          }
        },
        fail: function () {
          that.fetchList(function (data) {
            resolve(data)
          }, function () {
            reject({ message: 'can\'t get data' })
          })
        }
      })
    })
  },
  onLoad: function () {
    var that = this;
    this.getList().then(function (data) {
      that.setData({
        list: data
      })
    })
  }
})