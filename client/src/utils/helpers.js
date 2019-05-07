const isLocalMode = () => window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"

module.exports = {
  isLocalMode
}