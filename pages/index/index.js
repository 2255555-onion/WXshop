// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //接受轮播图数据 
    banner:[],
    //菜单列表
    menus:[],

    productlist:[]

  },
  getIndex(){
  //return终止后面代码运行
    // return
    var that = this;
    wx.request({
      url: 'http://47.115.51.185/api/index', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'multipart/form-data' // 默认值
      },
      success (res) {
        console.log(res.data)
        that.setData({
          banner:res.data.data.banner,
          menus:res.data.data.menus,
          productlist:res.data.data.info.firstList
        })
        console.log(that.data.productlist)
      }
    })
  },

  toDetail(e){
    console.log("e",e.detail);
    //跳转页面
    wx.navigateTo({
      url: '../detail/detail?id='+ e.detail
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.getIndex()
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