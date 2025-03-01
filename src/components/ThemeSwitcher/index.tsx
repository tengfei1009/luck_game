// components/ThemeSwitcher.tsx
import { Button } from '@tarojs/components'; // 引入 Taro 的组件
import { useTheme } from '@/context/ThemeProvider'; // 引入 useTheme

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme(); // 使用上下文获取切换主题的函数

  return (
    <Button onClick={toggleTheme} style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 10 }}>
      切换主题
    </Button> // 点击按钮切换主题
  );
};

export default ThemeSwitcher;