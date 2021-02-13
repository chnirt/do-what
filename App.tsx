/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Fragment, useState} from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';

import {WINDOW_WIDTH, WINDOW_HEIGHT} from './src/constants';
import {HeartSVG} from './src/assets';
import {getZodiacSVG, getGenderSVG} from './src/utils';

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const currentDate = now.getDate();

const App = () => {
  const [info, setInfo] = useState([
    {
      type: 'INFO',
      avatar:
        'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?cs=srgb&dl=pexels-spencer-selover-775358.jpg&fm=jpg',
      name: 'Me',
      gender: 'man',
      dob: new Date(1994, 3 - 1, 18),
    },
    {type: 'HEART'},
    {
      type: 'INFO',
      avatar:
        'https://images.pexels.com/photos/1845208/pexels-photo-1845208.jpeg?cs=srgb&dl=pexels-gustavo-peres-1845208.jpg&fm=jpg',
      name: 'You',
      gender: 'woman',
      dob: new Date(1996, 9 - 1, 1),
    },
  ]);
  const [background, setBackground] = useState(
    'https://images.wallpaperscraft.com/image/couple_kiss_sunset_135411_3415x3415.jpg',
  );

  const [startedDate, setStartedDate] = useState(new Date(2021, 2 - 1, 12));
  const [endedDate, setEndedDate] = useState(
    new Date(currentYear, currentMonth, currentDate),
  );
  const diffTime = Math.abs(+endedDate - +startedDate);
  const diffDays = Math.ceil(diffTime / oneDay);

  return (
    <Fragment>
      <ImageBackground
        style={styles.background}
        source={{
          uri: background,
        }}
        imageStyle={styles.imageStyle}>
        <View style={styles.container}>
          <View style={styles.daysContainer}>
            <Text style={styles.daysText}>Forever w U</Text>
            <Text style={styles.daysText}>
              <Text style={styles.numberText}>{diffDays}6789</Text> days
            </Text>
          </View>
          <View style={styles.infoContainer}>
            {info.length > 0 &&
              info.map((element, index) => {
                if (element.type === 'HEART') {
                  return (
                    <View key={index} style={styles.infoItem}>
                      <HeartSVG width={50} height={50} />
                    </View>
                  );
                }

                const date = new Date(element?.dob).getDate();
                const month = new Date(element?.dob).getMonth() + 1;

                return (
                  <View key={index} style={styles.infoItem}>
                    <Image
                      style={styles.avatar}
                      source={{
                        uri: element?.avatar,
                      }}
                      resizeMode="cover"
                    />
                    <View style={styles.profileContainer}>
                      <View style={styles.row1}>
                        <Text style={styles.nameText}>{element?.name}</Text>
                      </View>
                      <View style={styles.row2}>
                        {getZodiacSVG(month, date)}
                        {getGenderSVG(element?.gender)}
                      </View>
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
      </ImageBackground>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  background: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
  imageStyle: {resizeMode: 'cover'},
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#00000090',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  infoItem: {},
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileContainer: {
    marginTop: 10,
  },
  row1: {},
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  nameText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  daysContainer: {},
  daysText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 50,
  },
  numberText: {
    fontSize: 60,
    fontWeight: 'bold',
  },
});

export default App;
