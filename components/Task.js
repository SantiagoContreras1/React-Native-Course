import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Task({ key, task, index, completedTask, deleteTask }) {
  return (
    <View style={styles.task}>
      <Text style={task.completed ? styles.completed : styles.text}>
        {task.text}
      </Text>
      <View>
        <TouchableOpacity onPress={() => completedTask(index)}>
                  <Icon name="check" size={20} color='green'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(index)}>
          <Icon name="trash" size={20} color='red'/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "gray",
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    color: "black",
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
});
