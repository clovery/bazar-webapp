import debug from 'debug'

let colorDict = {
  log: 'lightseagreen',
  error: 'red'
}
// 缓存 logger 对象
let loggerCache = {}

/**
 * @module log
 * @desc 日志对象
 */
module.exports = Object.assign(logService, logService())

function logService(namespace) {
  namespace = namespace || 'App'

  // 取缓存的 logger 对象
  if (namespace in loggerCache)
    return loggerCache[namespace]

  /**
   * 生成 logger 对象
   */
  debug.enable(namespace + ':*')

  let methodFactory = localStorage.getItem('debug') || process.env.NODE_ENV === 'development'
    ? loggerFactory
    : noopFactory

  return loggerCache[namespace] = methodFactory([
    'createLogger', 'log', 'info', 'warn', 'error'
  ], namespace)
}

function noopFactory(methods) {
  let exports = {}
  methods.forEach(function (name) {
    exports[name] = function () {
    }
  })
  return exports
}

/**
 * 创建 logger 对象的工厂方法
 */
function loggerFactory(methods, namespace) {
  let exports = {}
  methods.forEach(function (name, index) {
    let logger
    if (index > 0) {
      logger = getLogger(namespace + ':' + name, colorDict[name] || colorDict.log)
      exports[name] = logHandler(logger)
    } else
      exports[name] = function(namespace, color) {
        logger = getLogger(namespace, color)
        return logHandler(logger)
      }
  })
  return exports
}


function getLogger(namespace, color) {
  let logger = debug(namespace)
  logger.color = color
  return logger
}

function logHandler(logger) {
  return function () {
    // console.groupCollapsed('%clog', 'color:red')
    logger.apply(logger, [].slice.call(arguments))
    // console.trace('↑line numbers')
    // console.groupEnd()
  }
}
