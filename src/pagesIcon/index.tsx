import Taro from '@tarojs/taro'; // 引入 Taro 和 React 的 useState 钩子
import { useState } from 'react';
import { View, Text, Button, Image } from '@tarojs/components'; // 引入 Taro 的组件
import './index.scss'; // 引入样式文件

export default function CoinFlipGame() {
  // 加载硬币的图片资源
  const coinHead = require('../assets/images/game_account/icon_1_front.webp'); // 正面图片
  const coinTail = require('../assets/images/game_account/icon_1_tail.webp'); // 反面图片

  // 定义状态变量
  const [coinResult, setCoinResult] = useState<string>('head'); // 当前硬币结果（正面或反面）
  const [flipCount, setFlipCount] = useState<number>(0); // 抛硬币的总次数
  const [headCount, setHeadCount] = useState<number>(0); // 正面出现的次数
  const [tailCount, setTailCount] = useState<number>(0); // 反面出现的次数
  const [isFlipping, setIsFlipping] = useState<boolean>(false); // 硬币是否正在旋转

  // 是否能进行抛出
  const [isThrow, setIsThrow] = useState<boolean>(true);

  /**
   * 抛硬币逻辑
   * 当用户点击抛硬币按钮时，触发此方法
   */
  const flipCoin = () => {
    setIsFlipping(true); // 设置硬币为旋转状态
    setFlipCount(flipCount + 1); // 抛硬币次数加一

    // 模拟硬币旋转的延时
    setTimeout(() => {
      const result = Math.random() < 0.5 ? 'head' : 'tail'; // 随机生成硬币结果

      setCoinResult(result); // 更新硬币结果
      setIsFlipping(false); // 设置硬币为停止旋转状态
      setIsThrow(false);

      // 根据结果更新正面或反面的次数
      if (result === 'head') {
        setHeadCount(headCount + 1); // 正面次数加一
      } else {
        setTailCount(tailCount + 1); // 反面次数加一
      }

      // 显示硬币结果的提示
      Taro.showToast({
        title: `结果是 ${result === 'head' ? '正面' : '反面'}`, // 提示内容
        icon: 'none', // 提示图标
      });
    }, 1000); // 延迟 1 秒后执行
  };

  /**
   * 点击再试一次,重置硬币图片
   */
  const tryAgain = () => {
    setCoinResult('head')
    setIsThrow(true)
  }


  /**
   * 点击结果时的处理
   * 当用户点击硬币图片时，触发此方法
   */
  const handleResultClick = () => {
    // 显示游戏提示的模态框
    Taro.showModal({
      title: '游戏提示', // 模态框标题
      content: `你已经抛了 ${flipCount} 次硬币，正面出现了 ${headCount} 次，反面出现了 ${tailCount} 次`, // 模态框内容
      showCancel: false, // 不显示取消按钮
      confirmText: '知道了', // 确认按钮文字
    });
  };

  return (
    <View className="game-container">
      {/* 硬币翻转区域 */}
      <View className="coin-flip-area">
        {isFlipping ? ( // 如果硬币正在旋转
          <Image
            src={coinResult === 'head' ? coinHead : coinTail} // 根据硬币结果选择图片
            className="coin animation-box" // 旋转样式
            onClick={handleResultClick} // 点击事件
          />
        ) : ( // 如果硬币未旋转
            <Image
              src={coinResult === 'head' ? coinHead : coinTail} // 根据硬币结果选择图片
              className="coin" // 默认样式
              onClick={handleResultClick} // 点击事件
            />
          )}
      </View>

      {/* 抛硬币按钮 */}
      {isThrow ? (
        <Button className="flip-button" onClick={flipCoin}>
          抛硬币
        </Button>
      ) : (
          <Button className="try-again" onClick={tryAgain}>
            再试一次
          </Button>
        )}

      {/* 游戏统计信息 */}
      <View className="stats">
        <Text>抛硬币次数: {flipCount}</Text> {/* 抛硬币的总次数 */}
        <Text>正面次数: {headCount}</Text> {/* 正面出现的次数 */}
        <Text>反面次数: {tailCount}</Text> {/* 反面出现的次数 */}
      </View>
    </View>
  );
}