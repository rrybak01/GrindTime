import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutsScreen";
import FoodTrackerScreen from "./screens/FoodTrackerScreen";
import NewTrainingScreen from "./screens/NewTrainingScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const LoginStackNavigator = createNativeStackNavigator();

function LoginStack() {
    return (
        <LoginStackNavigator.Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerRight: () => (
                    <Ionicons onPress={() => alert('This is a button!')} name="settings-sharp" color="white" size={25} />
                ),
                headerStyle: {
                    backgroundColor: '#102739',
                },
                headerTintColor: '#fff',

            }}
        >
            <LoginStackNavigator.Screen
                name="LoginScreen"
                component={Login}
                options={{
                    title: 'Inicio de sesión',
                }}
            />
            <LoginStackNavigator.Screen
                name="Register"
                component={Register}
                options={{
                    title: 'Registro',
                    headerBackVisible:false
                }}
            />
        </LoginStackNavigator.Navigator>
    )
}

const HomeStackNavigator = createNativeStackNavigator();

function HomeStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerRight: () => (
                    <Ionicons onPress={() => alert('This is a button!')} name="settings-sharp" color="white" size={25} />
                ),
                headerStyle: {
                    backgroundColor: '#102739',
                },
                headerTintColor: '#fff',

            }}
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Inicio',
                }}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={NewTrainingScreen}
                options={{
                    headerBackButtonMenuEnabled: true,
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}

const WorkoutStackNavigator = createNativeStackNavigator();

function WorkoutStack() {
    return (
        <WorkoutStackNavigator.Navigator
            initialRouteName="WorkoutScreen"
            screenOptions={{
                headerRight: () => (
                    <Ionicons onPress={() => alert('This is a button!')} name="settings-sharp" color="white" size={25} />
                ),
                headerStyle: {
                    backgroundColor: '#102739',
                },
                headerTintColor: '#fff',

            }}
        >
            <WorkoutStackNavigator.Screen
                name="WorkoutScreen"
                component={WorkoutScreen}
                options={{
                    title: 'Entrenamientos',
                }}
                
            />
            <WorkoutStackNavigator.Screen
                name="NewWorkout"
                component={NewTrainingScreen}
                options={{
                    headerBackButtonMenuEnabled: true,
                    title: 'Nuevo entrenamiento',
                }}
            />
        </WorkoutStackNavigator.Navigator>
    )
}

const FoodStackNavigator = createNativeStackNavigator();

function FoodStack() {
    return (
        <FoodStackNavigator.Navigator
            initialRouteName="FoodScreen"
            screenOptions={{
                headerRight: () => (
                    <Ionicons onPress={() => alert('This is a button!')} name="settings-sharp" color="white" size={25} />
                ),
                headerStyle: {
                    backgroundColor: '#102739',
                },
                headerTintColor: '#fff',
            }}
        >
            <FoodStackNavigator.Screen
                name="FoodScreen"
                component={FoodTrackerScreen}
                options={{
                    title: 'Food',
                    title: 'Comidas',
                }}
            />
            <FoodStackNavigator.Screen
                name="AddFood"
                component={NewTrainingScreen}
                options={{
                    headerBackButtonMenuEnabled: true,
                    title: 'Añadir alimento',
                }}
            />
        </FoodStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#102739',
                    height: 65,
                    padding: 10,
                    paddingBottom: 10
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'grey',
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === "Home") {
                        iconName = focused ? 'person' : 'person-outline';

                    } else if (rn === "Workouts") {
                        iconName = focused ? 'trophy' : 'trophy-outline';

                    } else if (rn === "Food") {
                        iconName = focused ? 'today' : 'today';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}>
            <Tab.Screen name="Home" component={HomeStack}></Tab.Screen>
            <Tab.Screen name="Workouts" component={WorkoutStack}></Tab.Screen>
            <Tab.Screen name="Food" component={FoodStack}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
