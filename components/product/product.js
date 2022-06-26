// components/product.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //接受传递过来的值
    product:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tohome(e){
      console.log(e);
      //子组件传递信息返回父组件
      this.triggerEvent('myevent',e.currentTarget.dataset.id)
    }

  }
})
