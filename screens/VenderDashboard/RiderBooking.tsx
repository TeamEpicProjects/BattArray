import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import RiderCard from "../../components/RiderCard";
import RiderDetails from "./RiderDetails";

export default function RiderBooking({ navigation }) {
  const [riders, setRiders] = useState([
    { title: "Battery1", charge: 15, status: "In Use", key: "1" },
    { title: "Battery2", charge: 4, status: "Charging", key: "2" },
    { title: "Battery3", charge: 5, status: "Available", key: "3" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 17, color: "black" }}>Rider Bookings</Text>
      <FlatList
        data={riders}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.push("RiderDetailsScreen")}
          >
            <View
              style={{
                backgroundColor: "#dedede",
                borderRadius: 10,
                padding: 10,
                marginTop: "2.5%",
                elevation: 5,
                shadowColor: "#000000",
                shadowOffset: 5,
              }}
            >
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.titleText}>
                Charge Left : {item.charge} Hours
              </Text>
              <Text style={styles.titleText}>Status : {item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    padding: 20,
  },
  titleText: {
    //fontSize: 18,
    //  fontWeight: "bold",
    color: "black",
  },
});
