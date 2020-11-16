// pages/difficulty/difficulty.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: '../../images/difficulty_bg.jpg',
    difficulty_logo: "../../images/difficulty_logo.png"
  },
  
  changetoanswer:function(){
    // 获取题目并跳转页面
    app.getData('/question?type=2',function(res){
      console.log(res.data)
    })
    wx.navigateTo({
      url: '../answer/answer',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sn=app.globalData.headerSn;
    console.log(sn);
    console.log(123);

    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})