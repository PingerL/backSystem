module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/backSystem/dist/'
    : '/'
}