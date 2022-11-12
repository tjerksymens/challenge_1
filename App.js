import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import BookTile from './components/BookTile';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View> 
        <Text style={styles.header1}>Bookshop</Text>
        <View>
          <Image style={styles.imgShoppingCart} source={require('../challenge_1/assets/shopping-cart.png')}/>
          <Text>1</Text>
        </View>
      </View>
      <View style={styles.tilesContainer}>
        <BookTile title="Book title 1" author="By Some Random dude" shortText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex." isbn="ISBN 978-8-2165-1860-1"/>
        <BookTile title="Book title 2" author="By Some Other dude" shortText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex." isbn="ISBN 978-2-1425-4277-8"/>
        <BookTile title="Book title 3" author="By Jane Doe" shortText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex." isbn="ISBN 978-5-9684-0436-7"/>
        <BookTile title="Book title 4" author="By John Doe" shortText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer luctus, nulla sit amet pellentesque ultricies, magna nisl vulputate urna, quis feugiat purus enim id ex." isbn="ISBN 978-8-3356-4834-0"/>

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
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  imgShoppingCart: {
    height: 25,
    width: 25,
  },
});
