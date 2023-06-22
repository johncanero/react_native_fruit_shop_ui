import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";


export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View>
        <Icon name="navicon" size={30} color="#000" />
      </View>
    </SafeAreaView>
  );
}
