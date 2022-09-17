import React from "react";
import { View, Image } from "react-native";

import imgCachorro from '../../assets/cachorro.png';
import estilos from './estilos';

export default function TelaCachorro() {
  return (
    <View style={estilos.container}>
      <Image source={ imgCachorro } style={ estilos.img } />
    </View>
  )
}