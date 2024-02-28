import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function desconto(precoNovo, precoG) {
    return (1 - (precoNovo / precoG)) * 100;
}

type Props = {
    sabor: String;
    precoP: number;
    precoM: number;
    precoG: number;
    precoAntigo?: number;
    precoNovo?: number;
    ingredientes: String[];
}

export const PizzaItem = ({ sabor, precoP, precoM, precoG, precoNovo, ingredientes }: Props) => {
    return (
        <View style={style.janela}>
            <Text style={style.titulo}>{sabor} 🍕</Text>
            <Text style={style.descricao}>P (8 fatias): R$ {precoP}</Text>
            <Text style={style.descricao}>M (10 fatias): R$ {precoM}</Text>
            <Text style={style.descricao}>G (12 fatias): R$ {precoG}</Text>
            <Text style={style.descricao}>O que vai na pizza: {ingredientes.join(", ")}</Text>
            {
                (desconto(precoNovo, precoG) > 0) &&
                (<Text style={style.descricao}>Desconto na pizza G: {desconto(precoNovo, precoG).toFixed(0)}%</Text>)
            }
        </View>
    );
};

const style = StyleSheet.create({
    titulo: {
        fontSize: 15,
        color: '#F00'
    },
    descricao: {
        fontSize: 12,
        marginTop: 3
    },
    janela: {
        padding: 4,
        backgroundColor: '#f1f1f1',
        margin: 4,
        borderRadius: 6,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5
    }
});