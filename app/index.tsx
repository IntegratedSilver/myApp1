import { Text, View, StyleSheet, } from "react-native";

export default function Index() {

  const handlePress = () => console.log("pressed from a function")

  return (
    <View
      style={styles.container}
    >
      <Text numberOfLines={1} onPress={handlePress}>Edit app/index.tsx to edit this screen. Lets add some more text here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
    backgroundColor: "cornflowerblue"
  }
})