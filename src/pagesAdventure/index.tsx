import Taro from '@tarojs/taro';
import { useState, useEffect } from 'react';
import { View, Image } from '@tarojs/components';
import './index.scss';



const Adventure = () => {

  require('../assets/images/game_account/answer_book.jpg');

// 卡牌数据（你可以根据需要调整）
const CARDS = [
  { id: 1, url: '../assets/images/game_account/answer_book.jpg', isFlipped: false },
  { id: 2, url: '../assets/images/game_account/answer_book.jpg', isFlipped: false },
  { id: 3, url: '../assets/images/game_account/answer_book.jpg', isFlipped: false },
  { id: 4, url: '../assets/images/game_account/answer_book.jpg', isFlipped: false },
  { id: 5, url: '../assets/images/game_account/answer_book.jpg', isFlipped: false },
  { id: 6, url: '../assets/images/game_account/answer_book.jpg', isFlipped: false },
  // { id: 7, url: '../assets/images/game_account/answer_book.jpg', isFlipped: false },
  // { id: 8, url: '../assets/images/game_account/answer_book.jpg', isFlipped: false },
];

  const [cards, setCards] = useState(CARDS);
  const [isSpread, setIsSpread] = useState(false); // 是否已散开
  const [selectedCard, setSelectedCard] = useState(null); // 当前选中的卡片
  const [backImage, setBackImage] = useState('../assets/images/game_account/answer_book.jpg'); // 卡牌背面图像

  // 点击卡牌堆时，散开成两行
  const handleSpread = () => {
    setIsSpread(true);
  };

  // 点击卡牌，翻转卡片
  const handleFlipCard = (id) => {
    setCards(prevCards =>
      prevCards.map(card => ({
        ...card,
        isFlipped: card.id === id ? !card.isFlipped : card.isFlipped,
      }))
    );
  };

  return (
    <View className="adventure-container">
      {/* 卡牌堆 */}
      {!isSpread && (
        <View
          className="card-pile"
          onClick={handleSpread}
        >
          <Image
            src={backImage}
            className="pile-image"
          />
        </View>
      )}

      {/* 散开后的卡片 */}
      {isSpread && (
        <View className="card-grid">
          {cards.map((card) => (
            <Image
              key={card.id}
              src={card.isFlipped ? card.url : backImage}
              className={`card-image ${card.isFlipped ? 'flipped' : ''}`}
              onClick={() => handleFlipCard(card.id)}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default Adventure;