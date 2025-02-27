import { loadPackageNames } from './modules';

/**
 * packages 值为 __APP__ 时，加载主包
 */

const RULE = {
  'pages/home/index': {
    network: 'all',
    packages: [
      'pagesBook' // 填写PAGE/modules/对应包的name值也可： 详情页 = pagesBook
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
