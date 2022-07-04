export default = {
  install(app, options) {
    const wasm = options.modules
    app.config.globalProperties('$wasm', wasm)
    app.provide('$wasm', wasm)
  }
}
