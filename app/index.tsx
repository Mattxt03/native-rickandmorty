import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
 
    return (
  
        <SafeAreaView className="h-full justify-center items-center">
          <Link href={"/home"} className="text-xl" > characters {">"} (tap me!)</Link>
        </SafeAreaView>
  
    )
  }
  
  export default App;