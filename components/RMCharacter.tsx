import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";

import { useEffect, useState } from "react";

import Api from "../services/Api";

import { ICharacter } from "../types";
import ModalContentCharacter from "./ModalContentCharacter";

function RMCharacter() {
  const [character, setCharacter] = useState<ICharacter[]>();
  const [showModal, setShowModal] = useState(false);
  const [characterDetails, setCharacterDetails] = useState<ICharacter>();

  useEffect(() => {
    Api.get("character").then((res) => {
      setCharacter(res.data.results);
    });
  }, []);

  const getDataCharacter = (id: Number) => {
    const value: ICharacter[] | any = character?.filter(
      (item) => item.id === id
    );

    let parsed: any = {};

    value.forEach(function (item: any) {
      for (var i in item) {
        parsed[i] = item[i];
      }
    });
    setCharacterDetails(parsed);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#7B25F0" }}>
      <View style={styles.container}>
        <FlatList
          data={character}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item, index }) => (
            <Pressable
              key={index}
              onPress={() => {
                getDataCharacter(item.id);
                setShowModal(!showModal);
              }}
            >
              <View style={styles.card}>
                <Modal
                  animationType="slide"
                  visible={showModal}
                  onRequestClose={() => setShowModal(!showModal)}
                  presentationStyle={"pageSheet"}
                >
                  <ModalContentCharacter
                    name={characterDetails?.name}
                    gender={characterDetails?.gender}
                    location={characterDetails?.location}
                    origin={characterDetails?.origin}
                    species={characterDetails?.species}
                    status={characterDetails?.status}
                    type={characterDetails?.type}
                    onPressClose={() => {
                      setShowModal(!showModal);
                    }}
                    image={characterDetails?.image}
                  />
                </Modal>
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ uri: item.image }}
                />
                <View style={styles.textBox}>
                  <Text style={styles.textName}>{item.name}</Text>
                  <Text style={styles.text}>{item.species}</Text>
                  <Text style={styles.text}>{item.gender}</Text>
                </View>
              </View>
            </Pressable>
          )}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#7B25F0",
    width: Dimensions.get("window").width - 40,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 12,
    margin: 12,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
  },
  textBox: {
    flex: 1,
    paddingHorizontal: 15,
  },
  textName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
  },
});

export default RMCharacter;
