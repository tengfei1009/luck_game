import Taro from '@tarojs/taro';
import { useState } from 'react';
import { View, Text, Button, Picker, Image } from '@tarojs/components'; // 导入必要的组件
import './index.scss'; // 导入样式文件
import adventure from './adventure_data.json'; // 导入 JSON 数据
require('@/assets/images/game_account/Poker.png');



// 定义卡牌类型
interface Card {
  id: number; // 卡牌 ID
  text: string; // 卡牌文本内容
  isFlipped: boolean; // 卡牌是否翻转
}

const Adventure = () => {
  // 状态管理
  const [cards, setCards] = useState<Card[]>([]); // 存储卡牌数组，类型为 Card[]
  const [isSpread, setIsSpread] = useState(false); // 控制是否展示卡牌
  const [isGameStarted, setIsGameStarted] = useState(false); // 控制游戏是否开始
  const [selection, setSelection] = useState<string>('mixed'); // 存储用户选择的类型

  // 处理点击开始游戏
  const handleSpread = () => {
    const selectedCards = getRandomCards(selection); // 根据选择获取随机卡牌
    setCards(selectedCards); // 更新卡牌状态
    setIsSpread(true); // 设置为已展示卡牌
    setIsGameStarted(true); // 游戏开始
  };

  // 处理翻转卡牌
  const handleFlipCard = (id: number) => {
    setCards(prevCards =>
      prevCards.map(card => ({
        ...card,
        isFlipped: card.id === id ? true : card.isFlipped, // 翻转对应 ID 的卡牌
      }))
    );
  };

  // 洗牌并重新开始游戏
  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5); // 随机打乱卡牌顺序
    setCards(shuffled.map(card => ({ ...card, isFlipped: false }))); // 重置卡牌为未翻转状态
    setIsSpread(false); // 隐藏卡牌
    setIsGameStarted(false); // 结束游戏
  };

  // 根据用户选择随机抽取卡牌
  const getRandomCards = (selection: string): Card[] => {
    let availableCards: Card[] = []; // 可用卡牌数组初始化

    // 根据选择填充可用卡牌
    if (selection === 'truth') {
      availableCards = adventure.truths.map((text, index) => ({ id: index + 1, text, isFlipped: false }));
    } else if (selection === 'dare') {
      availableCards = adventure.dares.map((text, index) => ({ id: index + 1, text, isFlipped: false }));
    } else {
      availableCards = [
        ...adventure.truths.map((text, index) => ({ id: index + 1, text, isFlipped: false })),
        ...adventure.dares.map((text, index) => ({ id: index + adventure.truths.length + 1, text, isFlipped: false }))
      ];
    }

    // 随机抽取6个问题
    const shuffledCards = availableCards.sort(() => Math.random() - 0.5);
    return shuffledCards.slice(0, 9); // 返回抽取的6个卡牌
  };

  return (
    <View className="adventure-container">
      {!isSpread ? (
        // 如果未展示卡牌
        <View className="card-pile" onClick={handleSpread}>
          <Image
            className="pile-image"
            src="../assets/images/game_account/Poker.png"
            mode="scaleToFill"
          />
          <Picker
            mode="selector"
            range={['真心话', '大冒险', '混合']} // 选择器选项
            onChange={(e) => {
              // 根据选择更新状态
              setSelection(e.detail.value === '0' ? 'truth' : (e.detail.value === '1' ? 'dare' : 'mixed'));
            }}
            onClick={(e) => e.stopPropagation()} // 阻止事件传播
          >
            <View className="picker">
              {selection === 'truth' ? '选择：真心话' : selection === 'dare' ? '选择：大冒险' : '选择：混合'}
            </View>
          </Picker>
        </View>
      ) : (
        // 如果已展示卡牌
        <View className="card-grid">
          {cards.map(card => (
            <View
              key={card.id}
              className={`card-container`}
              onClick={() => !card.isFlipped && handleFlipCard(card.id)} // 点击未翻转的卡牌进行翻转
            >
              <View className={`card ${card.isFlipped ? 'flipped' : ''}`}>
                <View className="card-front">卡牌背面</View>
                <View className="card-back">{card.text}</View>
              </View>
            </View>
          ))}
        </View>
      )}
      {isGameStarted && (
        // 如果游戏已开始，显示洗牌按钮
        <Button className="shuffle-button" onClick={shuffleCards}>
          洗牌并重新开始游戏
        </Button>
      )}
    </View>
  );
};

export default Adventure; // 导出组件