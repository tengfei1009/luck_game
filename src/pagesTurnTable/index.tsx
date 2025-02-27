import { useState, useRef, useEffect } from 'react';
import { View, Text, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss';

interface Section {
  id: number;
  content: string;
  type: 'reward' | 'penalty' | 'special';
  value: number;
  color: string;
}

const RotatingWheel = () => {
  const sections: Section[] = [
    { id: 0, content: '南瓜', type: 'reward', value: 10, color: '#FFD700' },
    { id: 1, content: '火龙果', type: 'penalty', value: 5, color: '#FF6347' },
    { id: 2, content: '茄子', type: 'reward', value: 50, color: '#7CFC00' },
    { id: 3, content: '蓝莓', type: 'special', value: 1, color: '#00BFFF' },
    { id: 4, content: '西葫芦', type: 'special', value: 0, color: '#BA55D3' },
    { id: 5, content: '白菜', type: 'penalty', value: 20, color: '#eaedf0' },
    { id: 6, content: '橘子', type: 'reward', value: 1, color: '#fe7e0d' },
    { id: 7, content: '西蓝花', type: 'special', value: 0, color: '#20B2AA' },
    { id: 8, content: '西蓝花', type: 'special', value: 0, color: '#918f96' },
    // { id: 9, content: '西蓝花', type: 'special', value: 0, color: '#90bc41' },
    // { id: 10, content: '西蓝花', type: 'special', value: 0, color: '#ec459d' },
  ];

  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<Section | null>(null);
  const currentRotation = useRef(0);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult(null);

    const spins = Math.floor(Math.random() * 4) + 2; // 随机圈数
    const targetSection = Math.floor(Math.random() * sections.length);
    const sectionAngle = 360 / sections.length; // 每个扇区的角度
    const targetRotation = spins * 360 + (targetSection * sectionAngle) + (Math.random() * sectionAngle);

    const duration = 3000; // 3秒
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // 缓动函数
      const current = currentRotation.current + (targetRotation - currentRotation.current) * easeProgress;

      setRotation(current % 360);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        currentRotation.current = current % 360;
        setIsSpinning(false);
        setResult(sections[targetSection]);
        Taro.setStorageSync('wheelRotation', currentRotation.current);
      }
    };

    animate();
  };

  useEffect(() => {
    const savedRotation = Taro.getStorageSync('wheelRotation') || 0;
    currentRotation.current = savedRotation;
    setRotation(savedRotation);
  }, []);

  return (
    <View className='wheel-container'>
      <View className='pointer' />
      <View
        className='wheel'
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: 'center center',
          transition: isSpinning ? 'none' : 'transform 0.5s ease-out',
        }}
      >
        {sections.map((section, index) => (
          <View
            key={section.id}
            className='section'
            style={{
              backgroundColor: section.color,
              transform: `rotate(${index * (360 / sections.length)}deg)`,
              clipPath: 'polygon(50% 50%, 100% 0%, 100% 100%)',
            }}
          >
            <View
              className='section-content'
              style={{
                transform: `rotate(-${(index * (360 / sections.length))}deg)`,
                textAlign: 'center'
              }}
            >
              <Text>{section.content}</Text>
            </View>
          </View>
        ))}
      </View>
      <Button
        className={`spin-button ${isSpinning ? 'disabled' : ''}`}
        onClick={handleSpin}
        disabled={isSpinning}
      >
        {isSpinning ? '旋转中...' : '开始旋转'}
      </Button>
      {result && (
        <View className={`result ${result.type}`}>
          <View className='result-title'>{result.content}</View>
          {result.type === 'reward' && <Text>+{result.value}奖励！</Text>}
          {result.type === 'penalty' && <Text>-{result.value}惩罚！</Text>}
          {result.type === 'special' && <Text>特殊奖励已解锁！</Text>}
        </View>
      )}
    </View>
  );
};

export default RotatingWheel;