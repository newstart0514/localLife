// pages/shoplist/shoplist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        query: {},
        shopLists: [],
        page: 1,
        pageSize: 10,
        total: 0,
        loading: false
    },

    // 获取列表页面
    getShopList(cb) {
        // 展示loading效果
        wx.showLoading({
          title: '正在加载中...',
        })
        // 将loading设置为true
        this.setData({
            loading: true
        })
        wx.request({
          url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
          method: 'GET',
          data: {
              _page: this.data.page,
              _limit: this.data.pageSize
          },
          success: (res) => {
              console.log(res)
            this.setData({
                shopLists: [...this.data.shopLists,...res.data],
                // - 0保证最后为数字形式
                total: res.header['X-Total-Count'] - 0
            })
          },
          complete: () => {
              // 隐藏loading效果
              wx.hideLoading()
              // 将loading设置为false
              this.setData({
                loading: false
              })
              cb && cb()
          }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            query: options
        })
        this.getShopList()
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        wx.setNavigationBarTitle({
          title: this.data.query.title,
        })
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
        // 重置关键数据
        this.setData({
            page: 1,
            total: 0,
            shopLists: []
        })
        // 重新发起数据请求
        this.getShopList(() => {
            wx.stopPullDownRefresh()
        })
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
        // 判断是否有数据
        if(this.data.page * this.data.pageSize >= this.data.total) {
            // 证明没有下一页数据了
            return wx.showToast({
              title: '数据加载完毕！',
              icon: 'none'
            })
        }
        // 判断是否正在加载
        if(this.loading == true) return
        // 设置页码值+1
        this.setData({
            page: this.data.page + 1
        })
        // 获取数据
        this.getShopList()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})