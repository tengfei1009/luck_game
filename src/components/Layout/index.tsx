// components/Layout.tsx
import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@/context/ThemeProvider'; // 确保路径正确
import { View } from '@tarojs/components'; // 引入 Taro 的组件
import ThemeSwitcher from '@/components/ThemeSwitcher'; // 引入 ThemeSwitcher

const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider>
      <View className="layout-container">
        <ThemeSwitcher />
        {children} {/* 渲染子页面 */}
      </View>
    </ThemeProvider>
  );
};

export default Layout;