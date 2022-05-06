import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import sucessImg from '../../assets/images/sucess.png';
import { Copyrights } from '../Copyright';

import { styles } from './styles';

export function Sucess() {
  return (
    <View style={styles.container}>
        <Image 
            source={sucessImg}
            style={styles.image}
        />
        <Text
            style={styles.title}
        >   
            Agradescemos o feedback!
        </Text>

        <TouchableOpacity style={styles.button}>
            <Text
                style={styles.buttonTitle}
            >
                Quero Enviar outro
            </Text>
        </TouchableOpacity>

        <Copyrights/>

    </View>
  );
}