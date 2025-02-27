import { View, Image } from '@tarojs/components';
import './index.scss';
import Taro from '@tarojs/taro';
import { useState, useEffect } from 'react';
import answersData from '../books_answer.json'; // 导入 JSON 数据
require('../../assets/images/game_account/answer_book.jpg');
require('../../assets/images/game_account/read_book.gif');
require('../../assets/images/game_account/color_5.webp');




export default function Info() {
  const [currentPart, setCurrentPart] = useState(1); // 当前显示的部分
  const [answer, setAnswer] = useState(''); // 用于存储随机答案

  const getAnswer = () => {
    console.log(111);
    setCurrentPart(2); // 切换到 part_2
  };

  const handleReturn = () => {
    setCurrentPart(1); // 返回到 part_1
    setAnswer(''); // 清空答案
  };

  useEffect(() => {
    if (currentPart === 2) {
      setTimeout(() => {
        const answers = answersData.answers; // 获取 answers 数组
        // 随机选择一条答案
        const randomIndex = Math.floor(Math.random() * answers.length);
        const selectedAnswer = answers[randomIndex].content; // 获取 content 字段

        setAnswer(selectedAnswer); // 更新答案状态
        setCurrentPart(3); // 切换到 part_3
      }, 3000); // 3秒后切换
    }
  }, [currentPart, answersData]);

  return (
    <View className="main">
      {currentPart === 1 && (
        <View className="part_1">
          <View>少年郎，你是否也有困惑？答案之书已开启，等待你的探索。</View>
          <View className="answer-book" onClick={getAnswer}>
            <Image src="../../assets/images/game_account/answer_book.jpg" />
          </View>
          <View>在心中思考一个问题，然后点击答案之书，探索可能的答案吧！</View>
        </View>
      )}

      {currentPart === 2 && (
        <View className="part_2">
          <View className="loading-text">正在探寻宇宙的奥秘……</View>
          <Image src="../../assets/images/game_account/read_book.gif" className="loading-image" />
          <View className="loading-text">探索答案中……</View>
        </View>
      )}

      {currentPart === 3 && (
        <View className="part_3">
          <View>
            <Image src="../../assets/images/game_account/color_5.webp"></Image>
            <text className="answer_text">{answer}</text>
          </View>
          <View className="return-button" onClick={handleReturn}>
            再试一次
          </View>
        </View>
      )}
    </View>
  );
}