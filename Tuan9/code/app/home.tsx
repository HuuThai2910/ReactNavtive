import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { initDB, getTasks, toggleTask } from "../database";

interface Task {
  id: number;
  text: string;
  done: number;
}

export default function HomeScreen() {
  const { name } = useLocalSearchParams<{ name?: string }>();
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      await initDB();
      const allTasks = (await getTasks()) as Task[];
      setTasks(allTasks);
    })();
  }, []);

  const handleToggle = async (id: number, done: number) => {
    await toggleTask(id, !done);
    const allTasks = (await getTasks()) as Task[];
    setTasks(allTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles.back}>←</Text>
        </TouchableOpacity>
        <View style={styles.userBox}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=1" }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Hi {name || "Twinkle"}</Text>
            <Text>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <TextInput
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      <FlatList
        data={tasks.filter((t) =>
          t.text.toLowerCase().includes(search.toLowerCase())
        )}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity
              onPress={() => handleToggle(item.id, item.done)}
              style={styles.taskRow}
            >
              <Ionicons
                name={item.done ? "checkbox-outline" : "close-circle-outline"}
                size={20}
                color={item.done ? "green" : "red"}
              />
              <Text style={styles.taskText}>{item.text}</Text>
              <Ionicons size={20} name="create" color={"red"} />
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        onPress={() => router.push({ pathname: "/add", params: { name } })}
        style={styles.addButton}
      >
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 18 },
  back: { color: "#26c6da", fontSize: 40 },
  greeting: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginVertical: 16,
  },
  taskItem: {
    marginVertical: 8,
    backgroundColor: "#f7f7f7",
    borderRadius: 50,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  taskRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  taskText: { fontSize: 16, flex: 1 },
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#26c6da",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  plus: { fontSize: 30, color: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userBox: { flexDirection: "row", alignItems: "center", gap: 10 },
  avatar: { width: 60, height: 60, borderRadius: 30 },
});
