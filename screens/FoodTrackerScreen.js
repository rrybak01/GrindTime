import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { get, post } from "../api/client";

var { height } = Dimensions.get('window');

var box_count = 3;
var box_height = height / box_count;

export default function FoodTrackerScreen({ navigation }) {

    const comida = {
        "nombre": "Helado",
        "calorias": "121",
        "hidratos": 14,
        "proteinas": 21,
        "grasas": 9
    };

    const [comidas, setComidas] = React.useState([]);

    const postComida = async (comida) => {

        console.log("comida" + comida);

        try {
            const data = await post(`comidas/`, comida);
            console.log("data" + data);
        } catch (error) {
            console.log("Error al crear alimento" + error)
        }
    }

    const getComidas = async () => {
        try {
            const data = await get(`comidas/`);
            console.log(data);
            setComidas(data);
            console.log(comidas);
        } catch (error) {
            console.log("Error al cargar los entrenamientos: " + error);
        }
    }

    React.useEffect(() => {
        getComidas();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={[styles.header]}>
                    <Text style={styles.caloriesText}>Calorías restantes</Text>
                    <View style={[styles.textContainer]}>
                        <Text style={[styles.text, styles.caloriesNumber]}>3200</Text>
                        <Text style={[styles.text]}>Objetivo</Text>
                    </View>
                    <Text style={[styles.text]}>-</Text>
                    <View style={[styles.textContainer]}>
                        <Text style={[styles.text, styles.caloriesNumber]}>3200</Text>
                        <Text style={[styles.text]}>Alimento</Text>
                    </View>
                    <Text style={[styles.text]}>=</Text>
                    <View style={[styles.textContainer]}>
                        <Text style={[styles.text, styles.caloriesNumber]}>3200</Text>
                        <Text style={[styles.text]}>Restantes</Text>
                    </View>
                </View>
                <View style={[styles.content]}>
                    <View style={[styles.box]}>
                        <View style={styles.foodNameContainer}>
                            <Text style={styles.foodText}>Desayuno</Text>
                            <Text style={styles.totalMealCalories}>800</Text>
                        </View>
                        <View style={styles.añadirAlimentoContainer}>
                            <Text style={styles.añadirAlimento} onPress={() => navigation.navigate("AddFood")}>AÑADIR ALIMENTO</Text>
                        </View>
                    </View>
                    <View style={[styles.box]}>
                    </View>
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
        justifyContent: 'center',
        marginBottom: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    content: {
        alignItems: 'center',
        marginTop: 110,
    },
    box: {
        width: "95%",
        minHeight: 100,
        backgroundColor: '#102739',
        marginBottom: 10,
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 20,
    },
    caloriesText: {
        position: 'absolute',
        left: 20,
        top: 5,
        color: 'white',
        fontSize: 14
    },
    caloriesNumber: {
        fontSize: 16

    },
    textContainer: {
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 12
    },
    foodNameContainer: {
        minHeight: 50,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    foodText: {
        color: 'white',
    },
    totalMealCalories: {
        color: 'white',
        position: 'absolute',
        right: 0
    },
    añadirAlimentoContainer: {
        minHeight: 50,
        alignItems: 'center',
        flexDirection: 'row',
        borderTopColor: 'grey',
        borderTopWidth: 1,

    },
    añadirAlimento: {
        color: 'white'
    }
});

