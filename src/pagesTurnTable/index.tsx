
import Taro from '@tarojs/taro'; // 引入 Taro 和 React 的 useState 钩子
import { View, Text, Button, Image } from '@tarojs/components'; // 引入 Taro 的组件

export default function TurnTable (){
  const [luckyClick,setLuckyClick] = useState(0);


  return (
    <View className="dial">
      <View className="times">
        抽奖次数: {{ LuckyClick}}
      </View>
    </View>
  )
}