import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps, Image, ImageProps } from 'react-native';

import { styles } from './style';

interface Props extends TouchableOpacityProps {
    title: string;
    image: ImageProps;
}

export function Option({ title, image, ...rest }: Props) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
        <Image source={image} style={styles.image} />

        <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}