// app/index.jsx
import { Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import FlashCards from '@/component/flashCards';
import { useState } from "react";
import frenchwords from '@/data/words'; // Fixed import to use default export

export default function Index() {
  const [indexValue, setIndexValue] = useState(0);

  const nextWord = () => {
    if (indexValue < frenchwords.length - 1) {
      setIndexValue(indexValue + 1);
    }
  };

  const prevWord = () => {
    if (indexValue > 0) {
      setIndexValue(indexValue - 1);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlashCards
          french={frenchwords[indexValue].french}
          english={frenchwords[indexValue].english}
        />
        <View style={styles.buttons}>
          <Button title="Previous" onPress={prevWord} disabled={indexValue === 0} />
          <Text style={styles.counter}>{indexValue + 1}/{frenchwords.length}</Text>
          <Button title="Next" onPress={nextWord} disabled={indexValue === frenchwords.length - 1} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    padding: 20,
  },
  counter: {
    fontSize: 16,
    fontWeight: '600',
  }
});