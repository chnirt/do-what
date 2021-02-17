import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';

import {HeartSVG} from '../../assets/svgs';
import {PRIMARY_COLOR, WINDOW_HEIGHT} from '../../constants';

let heartCount = 2;
const animationEndY = Math.ceil(WINDOW_HEIGHT * 0.5);
const negativeEndY = animationEndY * -1;

interface IHeart {
  id: number;
  right: number;
  color: string;
}

function getRandomNumber(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  return `rgb(${getRandomNumber(100, 144)}, ${getRandomNumber(
    10,
    200,
  )}, ${getRandomNumber(200, 144)})`;
}

function HeartContainer({right = 0, color = PRIMARY_COLOR}) {
  const position = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(position, {
      duration: 2000,
      toValue: negativeEndY,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [position]);

  const yAnimation = position.interpolate({
    inputRange: [negativeEndY, 0],
    outputRange: [animationEndY, 0],
  });

  const opacityAnimation = yAnimation.interpolate({
    inputRange: [0, animationEndY],
    outputRange: [1, 0],
  });

  const scaleAnimation = yAnimation.interpolate({
    inputRange: [0, 15, 30],
    outputRange: [0, 1.4, 1],
    extrapolate: 'clamp',
  });

  const xAnimation = yAnimation.interpolate({
    inputRange: [
      0,
      animationEndY / 6,
      animationEndY / 3,
      animationEndY / 2,
      animationEndY,
    ],
    outputRange: [0, 25, 15, 0, 10],
  });

  const rotateAnimation = yAnimation.interpolate({
    inputRange: [
      0,
      animationEndY / 6,
      animationEndY / 3,
      animationEndY / 2,
      animationEndY,
    ],
    outputRange: ['0deg', '-5deg', '0deg', '5deg', '0deg'],
  });

  const getHeartStyle = () => {
    return {
      transform: [
        {
          translateY: position,
        },
        {
          scale: scaleAnimation,
        },
        {
          translateX: xAnimation,
        },
        {
          rotate: rotateAnimation,
        },
      ],
      opacity: opacityAnimation,
    };
  };

  return (
    <Animated.View
      style={[
        styles.heartContainer,
        getHeartStyle(),
        {
          right,
        },
      ]}>
      <Heart color={color} />
    </Animated.View>
  );
}

function Heart({color = PRIMARY_COLOR, width = 25, height = 25}) {
  return (
    <HeartSVG style={styles.heart} width={width} height={height} fill={color} />
  );
}

export function MyHeart() {
  const [hearts, setHearts] = useState<IHeart[]>([]);
  const heartScaleAnimation = useRef(new Animated.Value(1)).current;
  const heartFadeAnimation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const random = getRandomNumber(0, 500);
    const interval = setInterval(() => {
      addHeart();
    }, random);

    Animated.loop(
      Animated.parallel([
        Animated.timing(heartScaleAnimation, {
          toValue: 1.2,
          duration: random,
          delay: 0,
          useNativeDriver: false,
        }),
        Animated.timing(heartFadeAnimation, {
          toValue: 0.5,
          duration: random,
          delay: 0,
          useNativeDriver: false,
        }),
      ]),
    ).start();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const addHeart = () => {
    setHearts((prevState) => [
      ...prevState,
      {
        id: heartCount,
        right: getRandomNumber(-50, 50),
        color: getRandomColor(),
      },
    ]);
    heartCount++;
  };

  return (
    <View style={styles.container}>
      {hearts.length > 0 &&
        hearts.map((heart, i) => {
          const {right, color} = heart;
          return <HeartContainer key={i} right={right} color={color} />;
        })}
      <Animated.View
        style={[
          {alignItems: 'center'},
          {
            opacity: heartFadeAnimation,
            transform: [
              {
                scale: heartScaleAnimation,
              },
            ],
          },
        ]}>
        <Heart width={40} height={40} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartContainer: {
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  heart: {
    position: 'absolute',
  },
});
