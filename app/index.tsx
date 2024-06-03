import { HelloWave } from "@/components/HelloWave";
import { store } from "@/redux/store";
import { Link } from "expo-router";
import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

const App = () => {
 
    return (
  
        <SafeAreaView>
          <Link href={"/home"} className="text-xl" > characters {">"} (tap me!)</Link>
        </SafeAreaView>
  
    )
  }
  
  export default App;