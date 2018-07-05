Page({
  data: {
    markers: [{
      iconPath: "/images/location.png",
      id: 0,
      latitude: 34.227122,
      longitude: 108.877810,
      width: 50,
      height: 50
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})