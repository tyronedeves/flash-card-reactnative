import { Text, View, StyleSheet, Button } from "react-native";
import FlashCards from '@/component/flashCards';
import { useState } from "react";
import { frenchwords } from '@/data/words';

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
    <View style={styles.container}>
      <FlashCards
        french={frenchwords[indexValue].french}
        english={frenchwords[indexValue].english}
      />
      <View style={styles.buttons}>
        <Button title="Previous" onPress={prevWord} disabled={indexValue === 0} />
        <Button title="Next" onPress={nextWord} disabled={indexValue === frenchwords.length - 1} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 20,
  },
});
