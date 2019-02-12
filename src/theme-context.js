const themes = {
  light: {
    bodyBG: '#2eaae5',
    sunBG: '#fffb84',
    bgImage: 'inherit',
    bgSize: 'inherit',
    bgPosition: 'inherit'
  },
  dark: {
    bodyBG: '#00000d',
    sunBG: '#fffef8',
    bgImage: `radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 10px),
              radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 5px),
              radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 10px),
              radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 5px)`,
    bgSize: '550px 550px, 350px 350px, 250px 250px, 150px 150px',
    bgPosition: '0 0, 40px 60px, 130px 270px, 70px 100px'
  }
}

export default themes
