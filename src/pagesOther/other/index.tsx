import Taro from '@tarojs/taro';
import { useState } from 'react';
import { View, Image, Text, Button } from '@tarojs/components';
import './index.scss';

const Other = () => {
  // 初始卡牌数据
  const INITIAL_CARDS = [
    { id: 1, url: '../assets/images/game_account/answer_book.jpg', isFlipped: false },
    { id: 2, url: '../assets/images/game_account/answer_book.jpg', isFlipped: false },
    { id: 3, url: '../assets/images/game_account/answer_book.jpg', isFlipped: false },
    { id: 4, url: '../assets/images/game_account/answer_book.jpg', isFlipped: false },
    { id: 5, url: '../assets/images/game_account/answer_book.jpg', isFlipped: false },
    { id: 6, url: '../assets/images/game_account/answer_book.jpg', isFlipped: false },
  ];

  // 状态管理
  const [cards, setCards] = useState(INITIAL_CARDS); // 当前卡牌状态
  const [isSpread, setIsSpread] = useState(false); // 是否已散开
  const [backImage] = useState('../assets/images/game_account/answer_book.jpg'); // 卡牌背面图像
  const [isGameStarted, setIsGameStarted] = useState(false); // 游戏是否开始

  // 点击卡牌堆时，散开成两行
  const handleSpread = () => {
    setIsSpread(true);
    setIsGameStarted(true); // 开始游戏
  };

  // 点击卡牌，翻转卡片
  const handleFlipCard = (id) => {
    setCards(prevCards =>
      prevCards.map(card => ({
        ...card,
        isFlipped: card.id === id ? true : card.isFlipped, // 只允许翻转一次
      }))
    );
  };

  // 洗牌逻辑
  const shuffleCards = () => {
    const shuffled = [...INITIAL_CARDS].sort(() => Math.random() - 0.5);
    setCards(shuffled.map(card => ({ ...card, isFlipped: false }))); // 重置翻转状态
    setIsSpread(false); // 重置为未散开状态
  };

  return (
    <View className="adventure-container">
      {/* 卡牌堆，点击后散开 */}
      {!isSpread ? (
        <View className="card-pile" onClick={handleSpread}>
          <Image src={backImage} className="pile-image" />
          <Text>点我开始洗牌</Text>
        </View>
      ) : (
        // 散开后的卡片
        <View className="card-grid">
          {cards.map(card => (
            <Image
              key={card.id}
              src={card.isFlipped ? card.url : backImage}
              className={`card-image ${card.isFlipped ? 'flipped' : ''}`}
              onClick={() => !card.isFlipped && handleFlipCard(card.id)} // 只有未翻转的卡牌可以翻转
            />
          ))}
        </View>
      )}

      {/* 只有在游戏开始后才显示洗牌按钮 */}
      {isGameStarted && (
        <Button className="shuffle-button" onClick={shuffleCards}>
          洗牌并重新开始游戏
        </Button>
      )}
    </View>
  );
};

export default Other;