import React, { useState } from "react";
import {
  FlatList,
  StatusBar,
  View,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import Card from "../components/card";
import Header from "../components/header";
import SearchBar from "../components/input/search";
import LocationHeader from "../components/locationHeader";
import TypeCard from "../components/typeCard";
import CactusSvg from "../components/svg/cactusSvg";
import { colors } from "../../constants/themes";
const Home = () => {
  const [search, setSearch] = useState("");
  const [openResults, setOpenResults] = useState(false);
  const [currentTag, setCurrentTag] = useState({
    index: undefined,
    count: false,
  });
  const data = [
    {
      name: "home",
      type: "ant-design",
      title: "Private Office",
    },
    {
      name: "room",
      type: "fontisto",
      title: "Rented House",
    },
    {
      name: "building",
      type: "font-awesome-5",
      title: "Apartment",
    },
    {
      name: "warehouse",
      type: "material-community",
      title: "Ware house",
    },
  ];
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ paddingHorizontal: 10 }}>
        <LocationHeader />
        <SearchBar
          state={search}
          setState={setSearch}
          onSubmitEditing={() => setOpenResults(!openResults)}
        />
      </View>
      {openResults ? (
        <>
          <View style={styles.typeCardHolder}>
            {data.map((data, index) => {
              return (
                <TypeCard
                  key={index}
                  {...data}
                  selected={currentTag.index === index && currentTag.count}
                  onPress={() =>
                    setCurrentTag(() => ({
                      count: !(currentTag.index === index),
                      index: index,
                    }))
                  }
                />
              );
            })}
          </View>
          <Header />
          <FlatList
            data={Array(6)}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            bounces={false}
            renderItem={() => <Card />}
            contentContainerStyle={{ paddingBottom: 30 }}
          />
        </>
      ) : (
        <View>
          <CactusSvg style={{ width: "100%", height: 400 }} />
          <Text style={styles.emptyText}>Try searching something!</Text>
        </View>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
  },
  typeCardHolder: {
    paddingTop: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexGrow: 1,
    flexShrink: 1,
  },
  emptyText: {
    fontFamily: "outfit-medium",
    fontSize: 18,
    textAlign: "center",
    color: colors["theme-2"],
  },
});
export default Home;
