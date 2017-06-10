import glob from 'glob'

function getAllRoutes () {
  const pattern = '../routes/**/*.js'
  const options = {
    cwd: __dirname
  }
  return glob.sync(pattern, options)
    .map(fp => require(fp).default)
}

export default getAllRoutes
