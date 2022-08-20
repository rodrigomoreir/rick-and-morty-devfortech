import React from "react";

import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { ICharacter } from "../types";

interface Props extends ICharacter {
  onPressClose: () => void;
}

const ModalContentCharacter = ({
  name,
  gender,
  location,
  origin,
  species,
  status,
  type,
  image,
  onPressClose,
}: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.infoContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>Name:</Text>
          <Text style={styles.textItem}>{name}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>Gender:</Text>
          <Text style={styles.textItem}>{gender}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>Location:</Text>
          <Text style={styles.textItem}>{location.name}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>Origin:</Text>
          <Text style={styles.textItem}>
            {origin?.name === "unknown" ? "Unknown" : origin?.name}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>Specie:</Text>
          <Text style={styles.textItem}>{species}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>Status:</Text>
          <Text style={styles.textItem}>{status}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.text}>Type:</Text>
          <Text style={styles.textItem}>{!!type ? "Unknown" : type}</Text>
        </View>
      </View>

      <Pressable onPress={onPressClose} style={styles.closeButton}>
        <Text style={styles.textCloseButton}>Fechar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#7B25F0",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  image: {
    width: 200,
    height: 200,
  },
  infoContainer: {
    width: "100%",
  },
  itemContainer: {
    width: "100%",
    height: 35,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  text: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
  },
  textItem: {
    color: "#000000",
    fontSize: 15,
  },
  closeButton: {
    width: "70%",
    height: 35,
    backgroundColor: "red",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textCloseButton: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ModalContentCharacter;
