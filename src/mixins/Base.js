export default {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    },
    redirectToIndex(index) {
      location.href = 'index.html'
    },
    redirectToHelp(index) {
      console.log('redirectToHelp' , index == 2)
      location.href = 'help.html'
    },
    redirectToProduct(index) {
      location.href = 'product.html'
    },
    redirectToProfile(index) {
      location.href = 'profile.html'
    }
  }
}