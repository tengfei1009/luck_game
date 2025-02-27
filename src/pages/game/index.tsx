/*
* @Author: dushuai
* @Date: 2024-04-24 16:01:26
* @LastEditors: dushuai
* @LastEditTime: 2024-08-10 16:48:37
* @description: Personal
*/
import { View,Image } from '@tarojs/components';
import './index.scss';
import Taro, { useDidShow, useLoad } from '@tarojs/taro';


require('../../assets/images/game_account/answer_book_2.jpg');
require('../../assets/images/game_account/icon.jpg');
require('../../assets/images/game_account/South America.jpg');
require('../../assets/images/game_account/fun.png');


export default function Game() {
  return (
    <View className="main">
      <View className="grid-container">
        <View className="grid-item" onClick={() => Taro.navigateTo({ url: '/pagesBook/info/index' })}>
          <Image src="../../assets/images/game_account/answer_book_2.jpg" />
          <span>问答之书</span>
        </View>
        <View className="grid-item" onClick={() => Taro.navigateTo({ url: '/pagesIcon/index' })}>
          <Image src="../../assets/images/game_account/icon.jpg"  />
          <span>随机硬币</span>
        </View>
        <View className="grid-item" onClick={() => Taro.navigateTo({ url: '/pagesAdventure/index' })}>
          <Image src="../../assets/images/game_account/South America.jpg"  />
          <span>真心话大冒险</span>
        </View>
        <View className="grid-item" onClick={() => Taro.navigateTo({ url: '/pagesTurnTable/index' })}>
          <Image src="../../assets/images/game_account/fun.png" />
          <span>大转盘</span>
        </View>
      </View>
    </View>
  );
}
