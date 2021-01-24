import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

// import { Picker } from "@react-native-picker/picker";

import DropDownPicker from "react-native-dropdown-picker";
import CheckBox from "@react-native-community/checkbox";
import MapView from "react-native-maps";

// function HomeScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to FreshMed</Text>
//       <Button
//         onPress={() => {
//           navigation.navigate("MealPlan");
//         }}
//         title="Go to MealPlan Screen"
//       />
//     </View>
//   );
// }

function NutritionScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 70,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: "white"
      }}
    >
      <Text style={{ fontSize: 36 }}>Nutrition</Text>
      <View
        style={{
          marginTop: 41,
          padding: 15,
          backgroundColor: "silver",
          borderRadius: 20
        }}
      >
        <Text style={{ fontSize: 24 }}>
          What meal would you like to prepare today?
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          backgroundColor: "white",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20
        }}
      >
        <View
          style={{
            backgroundColor: "#F0C02C",
            width: 172,
            height: 179,
            borderRadius: 30,
            paddingLeft: 15,
            paddingTop: 25,
            paddingRight: 10,
            marginTop: 20
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Breakfast")}>
            <Text style={{ color: "white", fontSize: 24 }}>
              Breakfast Recipes
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#F36B74",
            width: 172,
            height: 179,
            borderRadius: 30,
            paddingLeft: 15,
            paddingTop: 25,
            paddingRight: 10,
            marginTop: 20
          }}
        >
          <Text style={{ color: "white", fontSize: 24 }}>Lunch Recipes</Text>
        </View>
        <View
          style={{
            backgroundColor: "#EA9243",
            width: 172,
            height: 179,
            borderRadius: 30,
            paddingLeft: 15,
            paddingTop: 25,
            paddingRight: 10,
            marginTop: 10
          }}
        >
          <Text style={{ color: "white", fontSize: 24 }}>Dinner Recipes</Text>
        </View>
        <View
          style={{
            backgroundColor: "#CF8FE8",
            width: 172,
            height: 179,
            borderRadius: 30,
            paddingLeft: 15,
            paddingTop: 25,
            paddingRight: 10,
            paddingRight: 15,
            marginTop: 10
          }}
        >
          <Text style={{ color: "white", fontSize: 24 }}>Other Recipes</Text>
        </View>
      </View>
      <View
        style={{
          // paddingTop: 80,
          // width: "100%",
          height: 170,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "#00C569",
            width: 295,
            height: 71,
            borderRadius: 20
          }}
        >
          <Text style={{ color: "white", fontSize: 40, paddingTop: 5 }}>+</Text>
          <Text style={{ color: "white", fontSize: 20, paddingTop: 20 }}>
            Add a new recipe
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function BreakfastScreen({ navigation }) {
  const [state, setState] = React.useState({
    recipe: "oatmeal"
  });

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 70,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 36 }}>Breakfast</Text>
      </View>

      <View>
        <DropDownPicker
          items={[
            {
              label: "Oatmeal",
              value: "oatmeal"
            },
            {
              label: "Omelette",
              value: "omelette"
            },
            {
              label: "Parfait",
              value: "parfait"
            }
          ]}
          defaultValue={state.recipe}
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: "#fafafa" }}
          itemStyle={{
            justifyContent: "flex-start"
          }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={
            ((item) =>
              setState({
                recipe: item.value
              }),
            () => {
              navigation.navigate("Recipe");
            })
          }
        />
      </View>
    </View>
  );
}

function RecipeScreen() {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  return (
    <ScrollView>
      <View style={{ paddingTop: 70, paddingLeft: 30 }}>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 30 }}>Oatmeal</Text>
          <Text style={{ fontSize: 24 }}>245 Calories</Text>
          <Text>Prep: 5 minutes</Text>
          <Text>Cook: 10 minutes</Text>
          <Text>Total: 15 minutes</Text>
          <Text>Servings: 2</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginBottom: 10, fontSize: 30 }}>Nutrition Info</Text>
          <Text>Protein 9.7g</Text>
          <Text>Carbohydrates 72.4g</Text>
          <Text>Fat 16.7g</Text>
          <Text>Cholesterol 40.3mg</Text>
          <Text>Sodium 443.3mg</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginBottom: 10, fontSize: 30 }}>Ingredients</Text>
          <Text style={{ marginBottom: 20 }}>Recipe yields 2 servings</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingBottom: 10
            }}
          >
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={{ paddingLeft: 20 }}>Oats - 2 tablespoons</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingBottom: 10
            }}
          >
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={{ paddingLeft: 20 }}>Banana - 1 whole</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingBottom: 10
            }}
          >
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={{ paddingLeft: 20 }}>Milk - 1 cup</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              paddingBottom: 10
            }}
          >
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={{ paddingLeft: 20 }}>
              Cinnamon powder - 1/4 teaspoon
            </Text>
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 30, alignSelf: "center" }}>
            Help me find ingredients
          </Text>
          <View>
            <MapView
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function FitnessScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Fitness Screen</Text>
    </View>
  );
}
function MedicationScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Medication Screen</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
    </View>
  );
}
function AddTab() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>The add button can show a modal possibly</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function NutritionNavigator() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="NutritionScreen" component={NutritionScreen} />
      <Stack.Screen name="Breakfast" component={BreakfastScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="NutritionNavigator"
        tabBarOptions={{
          activeTintColor: "#015c28"
        }}
      >
        <Tab.Screen
          name="NutritionNavigator"
          component={NutritionNavigator}
          options={{
            tabBarLabel: "Nutrition",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="food" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Fitness"
          component={FitnessScreen}
          options={{
            tabBarLabel: "Fitness",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="dumbbell"
                color={color}
                size={size}
              />
            )
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddTab}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus" color={color} size={40} />
            )
          }}
        />
        <Tab.Screen
          name="Medication"
          component={MedicationScreen}
          options={{
            tabBarLabel: "Medication",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="pill" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="head" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
