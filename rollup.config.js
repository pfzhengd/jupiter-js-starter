
export default () => {
  const template = function (fileName) {
    return {
      input: `./src/${fileName}.js`,
      output: [
        {
          format: 'es',
          file: `lib/main/${fileName}.js`
        }
      ]
    }
  }
  const moduleNames = ['index']
  const config = []

  moduleNames.forEach((mouldeName) => {
    config.push(template(mouldeName))
  })
  if(process.env.NODE_ENV === 'production'){
    config.forEach(val=>{
      // val.plugins.push(
      //   terser({
      //     mangle:false
      //   }))
    })
  }

  return config
}
