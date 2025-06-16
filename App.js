import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";

//Components
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask(""); // Limpiar input después de agregar la tarea
    }
  };

  const completedTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index,1)
    setTasks(newTasks);
  }

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ToDo List APP</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task"
          value={task}
          onChangeText={setTask}
        />

        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.add}>ADD</Text>
        </TouchableOpacity>
      </View>

      {task.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          completedTask={completedTask}
          deleteTask={deleteTask}
        />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  add: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
