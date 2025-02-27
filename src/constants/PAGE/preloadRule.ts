import { loadPackageNames } from './modules';

/**
 * packages 值为 __APP__ 时，加载主包
 */

// network: 'all'：表示该页面或模块可以访问所有网络。
// packages：定义了该页面或模块依赖的代码包。
// pages/home/index 页面依赖 pagesBook 包。
// pages/personal/index 页面依赖 pagesLogin 和 其他module 包。

// 代码拆分：将项目代码拆分为多个包，按需加载。
// 网络访问控制：为不同页面或模块定义网络访问权限。
// 模块化开发：明确代码包的依赖关系，便于维护和扩展。

const RULE = {
  'pages/home/index': {
    network: 'all',
    packages: [
      'pagesBook', // 填写PAGE/modules/对应包的name值也可： 详情页 = pagesBook
      'pagesIcon',
      'pagesAdventure',
      'pagesTurnTable'
    ]
  },
  'pages/personal/index': {
    network: 'all',
    packages: [
      '用户module', // = pagesLogin
      '其他module'
    ]
  }
};

/** 分包预加载 */
export const preloadRule = loadPackageNames.length ? {} : RULE;
