/*
 * @Author: dushuai
 * @Date: 2024-04-23 18:33:22
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-01 21:01:39
 * @description: app
 */
import { PropsWithChildren } from 'react';
import { useLaunch } from '@tarojs/taro';
import { View } from '@tarojs/components'; // 引入 Taro 的组件
import '@/assets/style/app.scss';
import Layout from '@/components/Layout'; // 引入 Layout 组件

function App({ children }: PropsWithChildren<unknown>) {
  useLaunch(() => {
    console.log('App launched.');
  });

  return (
    <Layout>
      <View className="container">
        {children} {/* 渲染子页面 */}
      </View>
    </Layout>
  );
}

export default App;