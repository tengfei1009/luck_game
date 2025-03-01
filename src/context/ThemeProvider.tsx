// context/ThemeProvider.tsx
import React, { createContext, useContext, useState } from 'react';
import { colorPalettes } from '../hooks/theme'; // 导入主题颜色调色板

// 定义 Theme 类型，使用 lightTheme 的类型
type Theme = typeof colorPalettes.lightTheme;

// 定义 ThemeContextType 接口，包含当前主题和切换主题的函数
interface ThemeContextType {
  theme: Theme; // 当前主题
  toggleTheme: () => void; // 切换主题的函数
}

// 创建一个上下文，初始值为 null
const ThemeContext = createContext<ThemeContextType | null>(null);

// 创建 ThemeProvider 组件，负责提供主题上下文
export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  // 使用 useState 钩子管理当前主题，初始为 lightTheme
  const [theme, setTheme] = useState<Theme>(colorPalettes.lightTheme);

  // 定义切换主题的函数
  const toggleTheme = () => {
    setTheme(prev =>
      prev === colorPalettes.lightTheme // 如果当前主题是 lightTheme
        ? colorPalettes.darkTheme // 切换到 darkTheme
        : colorPalettes.lightTheme // 否则切换回 lightTheme
    );
  };

  // 使用 ThemeContext.Provider 提供主题和切换函数给子组件
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* 渲染子组件 */}
    </ThemeContext.Provider>
  );
};

// 创建自定义 Hook 用于使用主题上下文
export const useTheme = () => {
  const context = useContext(ThemeContext); // 获取当前上下文
  // 如果上下文不存在，抛出错误
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context; // 返回上下文值
};