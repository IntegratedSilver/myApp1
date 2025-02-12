import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  StatusBar,
  Platform,
} from "react-native";

export default function Index() {
  const handlePress = () => console.log("pressed from a function");

  return (
    <View style={[styles.container]}>
      <Button
        color={"orange"}
        title="Click me!"
        onPress={() => Alert.prompt("My Title", "My Message", text => console.log(text))}
      />
      <StatusBar barStyle={'light-content'} backgroundColor={'black'}/>
    </View>
  );
}

const backgroundStyle = {BackgroundColor: 'orange'}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
