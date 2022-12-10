import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TextInput, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { get, post } from "../api/client";

export default function NewTrainingScreen({ navigation }) {

    const [name, setName] = React.useState("Nombre del entrenamiento");

    const changeName = (nombre) => {
        setName(nombre);
    }

    const postEntrenamiento = async () => {

        console.log("llega");

        try {

            if (name === "") {
                setName("Nombre del entrenamiento");
            }

            const entrenamiento = { "nombre": name };
            const data = await post(`entrenamientos/`, entrenamiento);
            console.log("data" + data);
        } catch (error) {
            console.log("Error al crear alimento" + error)
        }
    }

    React.useEffect(() => {
        console.log(name);
    }, [name])

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={[styles.header]}>
                    <TextInput style={styles.userName} placeholder="Nombre del entrenamiento" placeholderTextColor="white" onChangeText={newText => changeName(newText)} />
                    <TouchableHighlight underlayColor='#102739' style={[styles.saveButton]} onPress={() => postEntrenamiento()}>
                        <Text style={styles.text}>Terminar</Text>
                    </TouchableHighlight>
                </View>
                <View style={[styles.content]}>
                    <View style={[styles.box, styles.box1]}>
                        <View style={styles.titleContainer}>
                            <TextInput style={[styles.titleText]} placeholder="Nombre del entrenamiento" placeholderTextColor="white" onChangeText={newText => changeName(newText)} />
                            <Ionicons style={[styles.settingsButton]} onPress={() => alert('This is a button!')} name="ellipsis-vertical" color="white" size={20} />

                        </View>
                    </View>
                </View>
                <TouchableHighlight underlayColor='#102739' style={[styles.addExerciseButton]} onPress={() => postEntrenamiento()}>
                    <Text style={styles.userName}>Añadir ejercicio</Text>
                </TouchableHighlight>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    //#f4364c

    saveButton: {
        backgroundColor: '#102739',
        marginRight: 10,
        padding: 5,
        borderRadius: 5,

    },
    titles: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: "100%",
        height: 30,
    },
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
        height: 50,
        width: "95%",
        position: 'absolute',
        left: 10,
        right: 10,
        top: 0,
        backgroundColor: '#625fd4',
        zIndex: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 5,
    },
    addExerciseButton: {
        height: 50,
        width: "95%",
        backgroundColor: '#625fd4',
        zIndex: 10,
        justifyContent: 'center',
        marginBottom: 5,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        marginLeft: 10,
    },
    content: {
        alignItems: 'center',
        marginTop: 60,
    },
    box: {
        width: "95%",
        minHeight: 200,
        backgroundColor: '#102739',
        marginBottom: 10,
        borderRadius: 5,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    box1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#102739'
    },

    titleContainer: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: "100%",
        height: 30,
    },
    settingsButton: {
        position: 'absolute',
        right: 5,
        top: -1
    },
    titleText: {
        color: 'white',
        paddingLeft: 10,
        paddingBottom: 10
    },
    userName: {
        color: 'white',
        fontSize: 18,
        paddingLeft: 10,
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