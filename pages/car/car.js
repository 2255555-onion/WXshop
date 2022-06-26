// pages/car/car.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //控制购物车是否显示为空
    show:false,
    //存放购物车数据
    carList:[],
    //总价
    allPrice:0
  },
  //计算总价
  computed(){
    let price = 0;
    for (let index = 0;index < this.data.carList.length;index++){
      //判断是否勾选
      if(this.data.carList[index].checked){
        //把字符串转化成数字再计算
        price += Number(this.data.carList[index].price) * this.data.carList[index].num
      }
    }
    console.log("price",price);
    this.setData({
      allPrice:price
    })
  },

  changeCk(e){
    let index = e.currentTarget.dataset.index
    //修改data里面的carList
    this.data.carList[index].checked = !this.data.carList[index].checked
    this.setData({
      carList:this.data.carList
    })
    wx.setStorageSync('carList', this.data.carList)
    this.computed()
  },

  add(e){
    let index = e.currentTarget.dataset.index

    this.data.carList[index].num += 1
    //微信小程序修改值一定要用this.setdata
    this.setData({
      carList:this.data.carList
    })
    wx.setStorageSync('carList', this.data.carList)
    this.computed();
  },
  jian(e){
    let index = e.currentTarget.dataset.index
    if(this.data.carList[index].num==1){
      wx.showToast({
        title: '',
        icon: "error"
      })
      return
    }else{
      this.data.carList[index].num-=1
    }
    //微信小程序修改值一定要用this.setdata
    this.setData({
      carList:this.data.carList
    })
    wx.setStorageSync('carList', this.data.carList)
    this.computed();
  },
  //移出购物车
  delete(e){
    let index = e.currentTarget.dataset.index
    this.data.carList.splice(index,1)
    this.setData({
      carList:this.data.carList
    })
    wx.setStorageSync('carList', this.data.carList)
    this.computed();
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
    // 获取购物车数据
    let car = wx.getStorageSync('carList');
    console.log(car);
    //判断购物车数据是否为空
    if (car) {
      //存在时
      this.setData({
        show:true,
        carList:car
      })
    } else {
      //不存在时
      this.setData({
        show:false
      })
    }
    this.computed()
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