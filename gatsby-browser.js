const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = false
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js"
    )
    addScript(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js"
    )
    setTimeout(() => {
      addScript("https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js")
    }, 1000)
  }
}
