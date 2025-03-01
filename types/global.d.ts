/// <reference types="@tarojs/taro" />

// 声明支持的模块类型，允许导入这些文件类型
declare module '.png';  // 支持导入 PNG 图片
declare module '.gif';  // 支持导入 GIF 图片
declare module '.jpg';  // 支持导入 JPG 图片
declare module '.jpeg'; // 支持导入 JPEG 图片
declare module '.svg';  // 支持导入 SVG 图片
declare module '.css';  // 支持导入 CSS 文件
declare module '.less'; // 支持导入 Less 文件
declare module '.scss'; // 支持导入 SCSS 文件
declare module '.sass'; // 支持导入 Sass 文件
declare module '.styl'; // 支持导入 Stylus 文件

// 扩展 NodeJS 的命名空间
declare namespace NodeJS {
  interface ProcessEnv {
    /** 
     * NODE 内置环境变量, 
     * 会影响到最终构建生成产物 
     */
    NODE_ENV: 'development' | 'production'; // 当前环境：开发或生产

    /** 
     * 当前构建的平台 
     * 可选值包括：weapp（微信小程序）、swan（百度小程序）、alipay（支付宝小程序）、h5（网页）、rn（React Native）、tt（今日头条小程序）、quickapp（快应用）、qq（QQ 小程序）、jd（京东小程序）
     */
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd';

    /** 
     * 当前构建的小程序 appid 
     * @description 
     * 若不同环境有不同的小程序，可通过在 env 文件中配置环境变量 `TARO_APP_ID` 来方便快速切换 appid，而不必手动去修改 dist/project.config.json 文件
     * @see https://taro-docs.jd.com/docs/next/env-mode-config#特殊环境变量-taro_app_id
     */
    TARO_APP_ID: string; // 小程序的 App ID

    /** 当前运行环境 */
    TARO_APP_ENV: string; // 当前应用的运行环境

    /** 当前构建的小程序标题 */
    TARO_APP_TITLE: string; // 小程序的标题

    /** 请求根路径 */
    TARO_APP_BASE_URL: string; // API 请求的根路径

    /** 资源路径 */
    TARO_APP_RESOURCE_URL: string; // 静态资源的路径

    /** 代理路径 */
    TARO_APP_SERVE_URL: string; // 代理服务的路径
  }
}