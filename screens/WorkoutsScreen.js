import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WorkoutBox from "../components/WorkoutBox";
import { get, post } from "../api/client";



export default function WorkoutsScreen({ navigation }) {

  const [entrenamientos, setEntrenamientos] = React.useState([]);

  const getEntrenamientos = async () => {
    try {
      const data = await get(`entrenamientos/`);
      console.log(data);
      setEntrenamientos(data);
    } catch (error) {
      console.log("Error al cargar los entrenamientos: " + error);
    }
  }

  React.useEffect(() => {
    getEntrenamientos();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity style={[styles.header]} onPress={() => navigation.navigate("NewWorkout")}>
          <Text style={[styles.startTraining, styles.text]}>Comenzar entrenamiento</Text>
        </TouchableOpacity>
        <View style={[styles.content]}>
          {entrenamientos && entrenamientos.map((item, i) => {
            console.log(item)
            return (
              <WorkoutBox key={i} nombre={item.nombre}>
                {item}
              </WorkoutBox>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
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
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
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
    justifyContent: 'space-between',
    padding: 30,
  },
  box1: {
  },
  box2: {
  },
  startTraining: {
    fontSize: 18,
  },
  text: {
    color: 'white',
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