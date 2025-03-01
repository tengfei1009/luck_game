/*
 * @Author: dushuai
 * @Date: 2024-04-23 18:33:22
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-04 15:21:53
 * @description: defineAppConfig
 */
import { PAGE_LIST, SUB_PACKAGES, PRELOAD_RULE } from '@/constants/PAGE';

export default defineAppConfig({
  // 主包页面
  pages: [...PAGE_LIST],

  //  配置分包
  subPackages: [...SUB_PACKAGES],

  // 分包预加载
  preloadRule: {
    ...PRELOAD_RULE
  },

  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Taro Demo',
    navigationBarTextStyle: 'black',
    backgroundColor: '#F6F9FD'
  },

  // tabbar
  tabBar: {
    custom: true, // 是否自定义tabbar
    color: '#000', // tab 上的文字默认颜色
    selectedColor: '#4989ff', // tab 上的文字选中时的颜色
    backgroundColor: '#fff', // tabbar 的背景色
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: 'assets/images/tabbar/home.png',
        selectedIconPath: 'assets/images/tabbar/home_actived.png',
        text: '首页'
      },
      {
        pagePath: 'pages/personal/index',
        iconPath: 'assets/images/tabbar/personal.png',
        selectedIconPath: 'assets/images/tabbar/personal_actived.png',
        text: '我的'
      }
    ]
  },

  usingComponents: {},
  requiredBackgroundModes: [], // 'audio', 'location'
  lazyCodeLoading: 'requiredComponents',

  permission: {
    'scope.userLocation': {
      desc: '是否允许获取你当前的地理位置信息？'
    }
  },
  requiredPrivateInfos: ['getLocation', 'chooseLocation']
});
