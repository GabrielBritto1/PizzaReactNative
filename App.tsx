import { StyleSheet, Text, View } from 'react-native';
import { PizzaItem } from './Components/ItemPizza';

function desconto(precoNovo, precoAntigo) {
  return (1 - (precoNovo / precoAntigo)) * 100;
}

const App = () => {
  return (
    <View style={style.tela}>
      <Text style={style.titulo}>Pizzaria KiSabor</Text>
      <PizzaItem sabor="Calabresa" precoP={32} precoM={35} precoG={55} precoNovo={47} ingredientes={["Muçarela", "Calabresa", "Orégano", "Molho de tomate"]} />
      <PizzaItem sabor="Frango" precoP={32} precoM={35} precoG={55} precoNovo={45} ingredientes={["Muçarela", "Frango", "Orégano", "Molho de tomate"]} />
      <PizzaItem sabor="Portuguesa" precoP={32} precoM={35} precoG={58} precoNovo={50} ingredientes={["Muçarela", "Presunto", "Bacon", "Orégano", "Molho de tomate"]} />
    </View >
  );
};

const style = StyleSheet.create(
  {
    tela: {
      backgroundColor: "#EABA6B"
    },
    titulo: {
      fontSize: 30,
      textTransform: "uppercase",
      color: "#00AA00",
      textAlign: 'center',
      margin: 10,
      textShadowColor: '#888888',
      textShadowOffset: { width: 1, height: 1 },
    }
  }
);

export default App;