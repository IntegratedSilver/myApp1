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
import {useDeviceOrientation} from '@react-native-community/hooks'

export default function Index() {
  const orientation = useDeviceOrientation()
  const landscape = useDeviceOrientation()

  console.log('orientation is:', orientation)

  console.log(Dimensions.get('screen'))
  return (
    <View style={{backgroundColor:'orange', width:"100%", height:'30%'}}>
 
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
