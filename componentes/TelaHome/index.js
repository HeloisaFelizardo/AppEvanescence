import React from "react";
import { View, Image, Text } from "react-native";

import imrCapa from '../../assets/capa.png';
import estilos from './estilos';

export default function TelaGato() {
  return (
    <View style={ estilos.container }>
      <Image resizeMode="contain" source={ imrCapa } style={ estilos.img } />
    </View>
  )
}