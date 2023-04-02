// pages/contact/contact.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        colorList: [],
        isloading: false
    },
    // 获取颜色数据
    getColor() {
        // 展示loading效果
        wx.showLoading({
          title: '数据加载中...'
        })
        // 修改isloading的值
        this.setData({
            isloading: true
        })
        // 发起请求，获取随机数组值
        wx.request({
          url: 'https://www.escook.cn/api/color',
          method: 'GET',
          success: ({data:res}) => {
              this.setData({
                  colorList: [...this.data.colorList,...res.data]
              })
          },
          complete: () => {
              // 隐藏loading效果
              wx.hideLoading()
              // 修改isloading的值
              this.setData({
                isloading: false
            })
          }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getColor()
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
        if(this.data.isloading == true) return
        this.getColor()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})