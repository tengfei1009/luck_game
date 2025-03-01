/*
 * @Author: dushuai
 * @Date: 2024-04-23 18:33:22
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-04 15:21:53
 * @description: defineAppConfig
 */

// main.config.js 是 Taro 项目的核心配置文件，主要负责全局配置，如页面路径、分包、预加载规则和标签栏的配置。app.config.ts 则更侧重于定义项目的页面和分包结构，以及分包预加载规则和标签栏的详细配置。

import { PAGE_LIST, SUB_PACKAGES, PRELOAD_RULE } from '@/constants/PAGE';
import { colorPalettes } from '@/hooks/theme'; // 引入颜色包

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
    // backgroundTextStyle: 'light',
    // navigationBarBackgroundColor: '#fff',
    // navigationBarTitleText: 'Taro Demo',
    // navigationBarTextStyle: 'black',
    // backgroundColor: '#F6F9FD'
    backgroundTextStyle: 'light',
    // 使用颜色包的颜色
    navigationBarBackgroundColor: colorPalettes.secondPalette.primary, // 导航栏背景色
    navigationBarTitleText: 'Taro Demo', // 导航栏标题
    navigationBarTextStyle: 'white', // 导航栏文字颜色
    backgroundColor: colorPalettes.secondPalette.background // 页面背景色
  },

  // tabbar
  tabBar: {
    custom: true, // 是否自定义tabbar
    color: '#000',
    selectedColor: '#4989ff',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list:[
      {
        pagePath: 'pages/game/index',
        iconPath: 'assets/images/tabbar/home.png',
        selectedIconPath: 'assets/images/tabbar/home_actived.png',
        text: '游戏中心'
      },
      {
        pagePath: 'pages/main/index',
        iconPath: 'assets/images/tabbar/home.png',
        selectedIconPath: 'assets/images/tabbar/home_actived.png',
        text: '用户广场'
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
