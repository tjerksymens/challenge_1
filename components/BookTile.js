import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

function handlePress(){
  console.log('Book pressed')
}

function handleRead() {
  console.log("Book read");
}
const Book = (props) => { 
    return (
        <View style={styles.tile}>
            <TouchableWithoutFeedback onPress={() => handlePress()}>
              <Text style={styles.title}>{props.title}</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.text}>{props.author}</Text>
            <Text style={styles.text}>{props.shortText}</Text>
            <View style={styles.flex}>
              <Text style={styles.isbn}>{props.isbn}</Text>
              <TouchableWithoutFeedback onPress={() => handleRead()}>
                <Text style={styles.bookRead}>read</Text>
              </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

export default Book;

const styles = StyleSheet.create({
    tile:{
      borderColor: "#888082",
      borderBottomWidth: 1,
      borderStyle: "solid",
      marginVertical: '2%',
    },
    title:{
      fontSize: 18,
      fontWeight: "600",
    },
    text:{
      fontSize: 16,
      paddingBottom: 10,
    },
    isbn:{
      paddingTop: 3,
      fontSize: 16,
    },
    bookRead: {
      borderColor: '#B4B8DA',
      borderWidth: 1,
      borderStyle: 'solid',
      paddingVertical: 4,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    flex: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
