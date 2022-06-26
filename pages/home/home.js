// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"11",
    condition:true,
    arr:[
      {name:"阿猫",age:1},
      {name:"阿狗",age:2},
      {name:"张三",age:3},
      {name:"李四",age:4},
    ]
  },
  showName(e){
    console.log(e);
    console.log("被点击");
    //给data里面修改或赋值
    this.setData({
      //!是取反
      condition:!this.data.condition
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})