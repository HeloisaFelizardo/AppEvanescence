import React from "react";
import { ScrollView, View, Image, Text } from "react-native";

import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import estilos from './estilos';

export default function TelaSobre() {
  return (
    <ScrollView>
      <View style={estilos.container}>
        <Image source={ img1 } style={ estilos.imgCapa } />

        <Text style={ estilos.titulo }>Sobre a banda</Text>
        <Text style={ estilos.paragrafo }>Evanescence é uma banda americana de metal alternativo formada em 1995 na cidade de Little Rock, Arkansas pela vocalista e pianista Amy Lee e o guitarrista Ben Moody. Atualmente o grupo possui cinco integrantes, porém Moody não está mais envolvido.</Text>
        
        <Image source={ img2 } style={ estilos.img } />
        <Text style={ estilos.titulo }>Álbum Fallen</Text>
        <Text style={ estilos.paragrafo }>O álbum Fallen foi oficialmente lançado em 4 de março de 2003,[3] ficando na terceira posição da Billboard 200, com mais de 17 milhões de cópias comercializadas posteriormente.</Text>
        
        <Image source={ img3 } style={ estilos.img } />
        <Text style={ estilos.titulo }>The Open Door</Text>
        <Text style={ estilos.paragrafo }>O disco gerou o single "Call Me When You're Sober", que se tornou um enorme sucesso e alcançou a décima posição das paradas americanas,[47] com a banda também gravando videoclipes de alto custo para todas as faixas de trabalho, tais como "Lithium", "Sweet Sacrifice" e "Good Enough".</Text>
      </View>
    </ScrollView>
  )
}