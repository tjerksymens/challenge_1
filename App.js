import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback, Image, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

function handlePress(){
  console.log('Book pressed')
}

function handleRead() {
  console.log("Book read");
}

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.header1}>Bookshop</Text>
        <View>
          <Text>1</Text>
        </View>
      </View>
      <View style={styles.tilesContainer}>
          <View style={styles.tile}>
            <TouchableWithoutFeedback onPress={() => handlePress()}>
              <Text style={styles.tileHeader}>Book title 1</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.tileText}>By some Random dude</Text>
            <Text style={styles.tileText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex.</Text>
            <View>
              <Text style={styles.tileText}>ISBN 978-8-2165-1860-1</Text>
              <TouchableWithoutFeedback onPress={() => handleRead()}>
                <Text style={styles.bookRead}>read</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.tile}>
            <TouchableWithoutFeedback onPress={() => handlePress()}>
              <Text style={styles.tileHeader}>Book title 2</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.tileText}>By some Random dude</Text>
            <Text style={styles.tileText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex.</Text>
            <View>
              <Text style={styles.tileText}>ISBN 978-2-1425-4277-8</Text>
              <TouchableWithoutFeedback onPress={() => handleRead()}>
                <Text style={styles.bookRead}>read</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.tile}>
            <TouchableWithoutFeedback onPress={() => handlePress()}>
              <Text style={styles.tileHeader}>Book title 3</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.tileText}>By some Random dude</Text>
            <Text style={styles.tileText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex.</Text>
            <View>
              <Text style={styles.tileText}>ISBN 978-5-9684-0436-7</Text>
              <TouchableWithoutFeedback onPress={() => handleRead()}>
                <Text style={styles.bookRead}>read</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={styles.tile}>
            <TouchableWithoutFeedback onPress={() => handlePress()}>
              <Text style={styles.tileHeader}>Book title 4</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.tileText}>By some Random dude</Text>
            <Text style={styles.tileText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex.</Text>
            <View>
              <Text style={styles.tileText}>ISBN 978-8-3356-4834-0</Text>
              <TouchableWithoutFeedback onPress={() => handleRead()}>
                <Text style={styles.bookRead}>read</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
    //

  );
}

const styles = StyleSheet.create({
  header1: {
    fontSize: 32,
    fontWeight: '800',
    },
  container: {
    backgroundColor: '#fff',
    paddingTop: 56,
    paddingLeft: 20,
    paddingRight: 20,
  },
  tile: {
    borderColor: '#B4B8DA',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginVertical: '2%',
  },
  tileHeader: {
    fontSize: 22,
    fontWeight: '600',
  },
  tileText: {
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 20,
  },
  bookRead: {
    borderColor: '#B4B8DA',
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: '2%',
  },
});
