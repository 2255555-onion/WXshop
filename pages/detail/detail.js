// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //存放详情的数据
    allProduct: {
      // 产品信息
      description: "",
      //原来的价格
      ot_price: "",
      // 打折后的价格
      price: "",
      //标题
      store_name: "",
      //轮播图
      slider_image: "",
      //购物车的勾选情况
      checked: true,
      //控制值
      num: 1,
      //id判断商品标识
      id: ''
    },
    carNum:0

  },
  //里面放请求数据
  getDetail(id) {
    //定义一个变量存放this,
    var that = this;
    wx.request({
      //es6模板语法  `
      url: `http://47.115.51.185/api/product/detail/${id}`, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'multipart/form-data' // 默认值
      },
      success(res) {
        console.log(res.data)
        //对应的数据赋值
        that.setData({
          // 产品信息
          "allProduct.description": res.data.data.storeInfo.description,
          //原来的价格
          "allProduct.ot_price": res.data.data.storeInfo.ot_price,
          // 打折后的价格
          "allProduct.price": res.data.data.storeInfo.price,
          //标题
          "allProduct.store_name": res.data.data.storeInfo.store_name,
          //轮播图
          "allProduct.slider_image": res.data.data.storeInfo.slider_image
        })
      }
    })
  },

  //加入购物车
  addCard() {
    //当前的商品数据
    let nowCar = this.data.allProduct;
    //取出数据
    let car = wx.getStorageSync('carList');
    console.log(car);
    if (car) {
      //定义一个下标 判断该商品是否已存在购物车
      let index = car.findIndex((item) => {
        return nowCar.id == item.id
      })

      //如果index是-1时不存在,大于-1就表示存在
      if (index > -1) {
        car[index].num += 1;
        wx.showToast({
          title: '商品已存在',
          icon: "error"
        })
      } else {
        car.push(nowCar)
        wx.showToast({
          title: '加入购物车成功',
        })
      }
      //把处理好的数据重新存到本地
      wx.setStorageSync('carList', car)

    } else {
      wx.setStorageSync('carList', [nowCar]);
      wx.showToast({
        title: '加入购物车成功',
        icon: "loading",
        duration: 500
      })
    }
    this.setData({
      carNum:wx.getStorageSync('carList').length
    })
  },

  toCar(){
    //专门跳转tabbar页面
    //navigateTo不能跳转tabbar页面
    wx.switchTab({
      url: '../car/car',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("options", options);
    this.getDetail(options.id);

    this.setData({
      "allProduct.id": options.id
    })
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
    this.setData({
      carNum:wx.getStorageSync('carList').length
    })
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