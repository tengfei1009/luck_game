/*
 * @Author: dushuai
 * @Date: 2024-04-24 16:01:26
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-10 16:48:37
 * @description: Personal
 */
import { View, Text } from '@tarojs/components';
import './index.scss'; // 引入样式文件

export default function Personal() {
  return (
    <View className="personal-container">
      <View className="user-info">
        <View>
        <Text className="username">用户名: dushuai</Text>
        </View>
        <View>
        <Text className="email">邮箱: dushuai@example.com</Text>
        </View>
      </View>
      <View className="settings">
        <Text className="settings-title">设置</Text>
        <View className="setting-item">用户反馈</View>
        <View className="setting-item">关于我们</View>
        <View className="setting-item">隐私政策</View>
        <View className="setting-item">退出登录</View>
      </View>
    </View>
  );
}