// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperLists: [],
        categories: []
    },
    // 获取轮播图数据的方法
    getSwiperList() {
        wx.request({
            url: 'https://www.escook.cn/slides',
            method: 'GET',
            success: (res) => {
                this.setData({
                    swiperLists: res.data
                })
            }
        })
    },
    // 获取九宫格数据的接口
    getCategories() {
        wx.request({
          url: 'https://www.escook.cn/categories',
          method: 'GET',
          success: (res) => {
              this.setData({
                  categories: res.data
              })
          }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getSwiperList()
        this.getCategories()
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