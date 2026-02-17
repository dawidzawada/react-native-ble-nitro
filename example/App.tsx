import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Scanner from "./Scanner";

export default function App() {
  const [shouldRenderScanner, setShouldRenderScanner] = useState(false);

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={[styles.container, { padding: 16 }]}
          nestedScrollEnabled
        >
          {shouldRenderScanner ? (
            <Scanner />
          ) : (
            <View>
              <Text>
                When BLENitroLazyInit is set to true iOS BLE prompt will pop-up
                after rendering a scanner, when its set to false it will show up
                at the app launch
              </Text>
              <Text>Press a button to render a scanner: </Text>
              <Button
                title="Render scanner"
                onPress={() => setShouldRenderScanner(true)}
              />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingHorizontal: 0,
  },
  button: {
    padding: 8,
    backgroundColor: "#999",
    borderRadius: 4,
    alignItems: "center",
    marginVertical: 8,
  },
});
