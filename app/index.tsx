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
  Dimensions,
} from "react-native";

export default function Index() {
  console.log(Dimensions.get('screen'))
  return (
    <View style={{backgroundColor:'cornflowerblue', width:"50%", height:70}}>
 
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
