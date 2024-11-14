import { StyleSheet, Text, View, Button, Alert } from "react-native";
import * as Location from "expo-location";

const GeoLocation = () => {
  const [location, setLocation] = useState();
  const [locationCancelled, setLocationCancelled] = useState(false);

  const getCurrentLocation = () => {};

  const servicesEnabledCheck = () => {
    Location.hasServicesEnabledAsync().then((enabled) => {
      if (!enabled) {
        Alert.alert("Location not enabled", "enable location", [
          {
            text: "cancel",
            onPress: () => {
              setLocationCancelled(true);
            },
          },
          {
            text: "OK",
            onPress: () => {
              setLocationCancelled(true);
            },
          },
        ]);
      } else {
      }
    });
  };
  return (
    <View>
      <Text>geolocation</Text>
      <Button onPress={getCurrentLocation} title="getLocation">
        get location
      </Button>
    </View>
  );
};

export default GeoLocation;
