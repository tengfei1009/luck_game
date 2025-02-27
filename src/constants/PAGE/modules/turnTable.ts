/*
 * @Author: dushuai
 * @Date: 2024-07-30 22:03:50
 * @LastEditors: dushuai
 * @LastEditTime: 2024-07-31 22:07:46
 * @Description: 登录module
 */

/**
 * 分包根目录
 */
const root = '/pagesTurnTable';

/**
 * 分包别名
 */
const name = '大转盘';

/**
 * 分包页面路径
 */
const page = {
  /** 登录页 */
  TABLE: '/index'
};

export default { root, name, page };

export type TurnTablepage = typeof page;
