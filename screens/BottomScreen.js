import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, Platform, Text, SafeAreaView, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import NumberScreen from "./NumberScreen";
import ProfileScreen from "./ProfileScreen";
import ChatScreen from "./ChatScreen";

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: height / 12,
    background: "#fff",
    borderTopLeftRadius: 16, // Rayon coin supérieur gauche
    borderTopRightRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3, // Hauteur de l'ombre vers le haut
    },
    shadowOpacity: 0.3, // Opacité de l'ombre (0.0 - 1.0)
    shadowRadius: 4,
  },
};
export default function BottomScreen() {
  const { width, height } = Dimensions.get("window");

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 16,
                  width: width / 3,
                }}
              >
                <MaterialIcons
                  name="home"
                  size={30}
                  color={focused ? "#2B6FF2" : "#111"}
                />
                <Text
                  style={{ fontSize: 14, color: focused ? "#2B6FF2" : "#111" }}
                >
                  Accueil
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Number"
        component={NumberScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 16,
                  width: width / 3,
                }}
              >
                <Ionicons
                  name="call"
                  size={24}
                  color={focused ? "#2B6FF2" : "#111"}
                />
                <Text
                  style={{ fontSize: 14, color: focused ? "#2B6FF2" : "#111" }}
                >
                  Numero Vert
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 16,
                  width: width / 3,
                }}
              >
                <FontAwesome
                  name="wechat"
                  size={24}
                  color={focused ? "#2B6FF2" : "#111"}
                />
                <Text
                  style={{ fontSize: 14, color: focused ? "#2B6FF2" : "#111" }}
                >
                  Espace Keneya Lakika
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 16,
                  width: width / 3,
                }}
              >
                <FontAwesome
                  name="user"
                  size={24}
                  color={focused ? "#2B6FF2" : "#111"}
                />
                <Text
                  style={{ fontSize: 14, color: focused ? "#2B6FF2" : "#111" }}
                >
                  Profil
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
