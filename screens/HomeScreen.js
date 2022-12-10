import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { get, post } from "../api/client";

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function HomeScreen({navigation}) {

  const [usuario, setUsuario] = React.useState({});

  const getUsuario = async () => {
    try {
      const data = await get(`usuarios/1`);
      console.log(data);
      setUsuario(data);
    } catch (error) {
      console.log("Error al cargar los entrenamientos: " + error);
    }
  }

  React.useEffect(() => {
    getUsuario();
  }, []);

  React.useEffect(() => {
    console.log("Usuario: " + usuario);
  }, [usuario]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={[styles.header]}>
          <Ionicons style={styles.userContainer} onPress={() => navigation.navigate("Stack")} name="person-circle-sharp" color="white" size={70}  />
          <Text style={styles.userName}>{usuario.nombre}</Text>
        </View>
        <View style={[styles.content]}>
          <View style={[styles.box, styles.box1]}>
            <View style={[styles.strenghtProgressContainer]}>
              <View style={[styles.progressCircle]}><Text style={[styles.text]}>{usuario.benchpress} kg</Text></View>
              <Text style={[styles.text]}>Bench Press</Text>
            </View>
            <View style={[styles.strenghtProgressContainer]}>
              <View style={[styles.progressCircle]}><Text style={[styles.text]}>{usuario.squat} kg</Text></View>
              <Text style={[styles.text]}>Squat</Text>
            </View>
            <View style={[styles.strenghtProgressContainer]}>
              <View style={[styles.progressCircle]}><Text style={[styles.text]}>{usuario.deadlift} kg</Text></View>
              <Text style={[styles.text]}>Deadlift</Text>
            </View>
          </View>
          <View style={[styles.box, styles.box2]}>
            <Text style={[styles.text]}>Objetivos</Text>
            <Text/>
            <Text style={[styles.smallText]}>Peso</Text>
            <Text style={[styles.boldText]}>{usuario.peso} kg</Text>
            <Text/>
            <Text style={[styles.smallText]}>Calorías diarias</Text>
            <Text style={[styles.boldText]}>{usuario.calorias} cal</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#c1cad3',
  },
  scrollView: {
    marginTop: 10
  },
  header: {
    height: 100,
    width: "95%",
    position: 'absolute',
    left: 10,
    right: 10,
    top: 0,
    backgroundColor: '#625fd4',
    zIndex: 10,
    justifyContent: 'center',
    marginBottom: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: 5,
  },
  content: {
    alignItems: 'center',
    marginTop: 110,
  },
  box: {
      width: "95%",
      minHeight: 200,
      backgroundColor: '#333',
      marginBottom: 10,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
    },
  box1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#102739'
  },
  box2: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#102739'
  },
  userContainer: {
    height: 70,
    width: 70,
    backgroundColor: 'transparent',
    marginLeft: 20,
    marginBottom: 5,
  },
  userName: {
    color: 'white',
    fontSize: 18,
  },
  progressCircle: {
    color: 'white',
    backgroundColor: '#102739',
    height: 90,
    width: 90,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#625fd4',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  text: {
    color: 'white'
  },
  strenghtProgressContainer: {
    alignItems: 'center',
  },
  smallText: {
    color: 'white',
    fontSize: 12
  },
  boldText: {
    color: 'white',
    fontWeight: "300",
  }
});