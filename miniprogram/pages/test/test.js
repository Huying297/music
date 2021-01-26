// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var   let  const定义变量
    // for(let i = 0; i < 5;i++){

    // }
    // console.log(i)
    // const a = 3
    // a = 4
    //const obj = {}    new了一个对象
    //const arr = []     new了一个数组
    //const str = ''             字符串
    //const name = 'HUY'      定义属性
    //const person = {
      //name,            简写形式列在上面
      //age: 30,         最后一句加逗号，
    //}

    //let _this = this      第一种方式，下面this报错，改成_this.xxx就不会报错
    wx.cloud.callFunction({
      name:'login'
    }).then((res) => {    // 第二种方式，使用箭头函数=>,下面就使用this就可以了
      this.setData({
        openid : res.result.openid
      })
      //console.log(JSON.stringify(res.result))
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