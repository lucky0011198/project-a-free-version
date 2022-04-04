import React, { useState, useEffect } from "react";

import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { MdPermIdentity } from 'react-icons/md';
import * as FileSystem from "expo-file-system";
import {
  Button,
  Icon,
  Div,
  Radio,
  Input,
  Text,
  shadow,
} from "react-native-magnus";

//icons......
import { AntDesign } from "@expo/vector-icons";
import { cos } from "react-native-reanimated";

function TemplateScreen({ route, navigation }) {
  const [data, setdata] = useState([]);
  const [ItemData, setItemData] = useState([]);

  const getData = async (data) => {
    try {
      const value = await AsyncStorage.getItem(`${data}`);
      if (value !== null) {
        setItemData((e) => [...e, JSON.parse(value)]);
      }
    } catch (e) {
      alert(e);
    }
  };

  console.log(ItemData);

  useEffect(async () => {
    const data = await AsyncStorage.getAllKeys();
    let temp = [];
    data.map(async (i) => {
      if (i != "@App_state") {
        await getData(i);
      }
    });

    console.log(temp);
    setdata(data);
  }, []);

  console.log(data);

  const DATA = [
    {
      name: "templet1",
      batch: "",
      branch: "",
      students: [],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Button
        ml="md"
        mb="lg"
        px="xl"
        py="lg"
        bg="blue500"
        rounded={10}
        color="white"
        fontWeight="bold"
        shadow={2}
        onPress={() => {
          navigation.navigate("CreateRecord");
        }}
      >
        + create Template
      </Button>
      {[...new Set(ItemData)].length != 0
        ? [...new Set(ItemData)].map((i, index) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                navigation.navigate("Details");
              }}
              key={index}
            >
              <View style={styles.item}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: "white",
                    marginRight: 10,
                    borderRadius: 15,
                  }}
                />
                <Text style={styles.name}>
                  {JSON.parse(i).name}
                  <Text style={styles.subname}>
                    {"\n"} {JSON.parse(i).branch},{JSON.parse(i).batch}
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  width: 40,
                  justifyContent: "center",
                }}
              >
                <Button
                  p={0}
                  w={30}
                  h={30}
                  bg="gray100"
                  rounded="md"
                  color="white"
                  shadow={2}
                  onPress={() => {
                    try {
                      AsyncStorage.removeItem(
                        data.filter((j) => j != "@App_state")[index]
                      );
                      getData();
                      alert("item deleted");
                    } catch (e) {
                      alert(e);
                    }
                  }}
                  prefix={<AntDesign name="delete" size={17} color="black" />}
                ></Button>
              </View>
            </TouchableOpacity>
          ))
        : null}
    </SafeAreaView>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}
function CreateRecordScreen({ navigation }) {
  const [name, setname] = useState("");
  const [branch, setbranch] = useState("");
  const [batch, setbatch] = useState("");

  const [RollFrom, setRollFrom] = useState(0);
  const [RollTo, setRollTo] = useState(0);
  const [Roll, setRoll] = useState();

  let student = [];

  const [data, setdata] = useState([]);
  let Temp = [];
  const [n, setn] = useState("");

  let temp = {
    name,
    batch,
    branch,
    std: data,
    RollFrom,
  };

  const storeData = async (data) => {
    const jsonValue = JSON.stringify(temp);
    let current_datetime = new Date();
    let formatted_date =
      current_datetime.getFullYear() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getDate() +
      " " +
      current_datetime.getHours() +
      ":" +
      current_datetime.getMinutes() +
      ":" +
      current_datetime.getSeconds();
    try {
      await AsyncStorage.setItem(
        `${formatted_date}`,
        JSON.stringify(jsonValue)
      );
      alert("data added");
    } catch (e) {
      alert(e);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@App_state");
      if (value !== null) {
        alert(value);
      }
    } catch (e) {
      alert(e);
    }
  };

  const AddTemplate = async () => {
    await FileSystem.writeAsStringAsync(
      FileSystem.documentDirectory + "Templet-" + `${temp.name}.txt`,
      JSON.stringify(temp)
    )
      .then((data) => {
        alert("done");
      })
      .catch((e) => {
        alert("somthing went wrong");
      });
  };
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <Div justifyContent="center" alignItems="center">
          <Input
            style={{
              width: "98%",
              padding: 1,
              marginTop: 10,
              color: "#191919",
            }}
            fontSize={16}
            fontWeight={"600"}
            onChangeText={setname}
            value={name}
            borderColor="#ffff"
            placeholder="Enter branch "
          />

          <Input
            style={{
              width: "98%",
              padding: 2,
              margin: 5,
              color: "#191919",
            }}
            fontSize={16}
            fontWeight={"600"}
            onChangeText={setbatch}
            value={batch}
            placeholder=" Enter batch"
            borderColor="#ffff"
          />
          <Input
            style={{
              width: "98%",
              padding: 2,
              margin: 5,
              color: "#191919",
            }}
            borderColor="#ffff"
            onChangeText={setbranch}
            value={branch}
            fontSize={16}
            fontWeight={"600"}
            placeholder=" Enter branch"
          />
        </Div>

        <Text
          fontSize="lg"
          fontWeight="bold"
          color="gray"
          letterSpacing={1}
          mt="lg"
          ml="lg"
          mb="lg"
        >
          Student Strenth
        </Text>
        <Div row>
          <Input
            style={{
              width: "95%",
              padding: 2,
              margin: 5,
              color: "#191919",
            }}
            fontSize={16}
            fontWeight={"600"}
            keyboardType="numeric"
            onChangeText={setRollFrom}
            value={RollFrom}
            placeholder=" Roll From"
            borderColor="#ffff"
          />
          {/*  <Input
          style={{
            width: '46%',
            padding: 2,
            margin: 5,
            color: '#191919',
          }}
          borderColor="#ffff"
          onChangeText={setRollTo}
          value={RollTo}
          fontSize={16}
          fontWeight={'600'}
          placeholder=" Roll to"
        />*/}
        </Div>

        <Button
          ml="md"
          mb="lg"
          px="xl"
          py="lg"
          mt={"lg"}
          bg="#ddd"
          rounded={10}
          color="#191919"
          fontWeight="bold"
          shadow={2}
          onPress={async () => {
            // alert(await AsyncStorage.getAllKeys());
            getData();
          }}
        >
          add +
        </Button>

        {[...new Set(data)].map((i, index) => (
          <Div alignItems="center" justifyContent="center" row>
            <Button
              justifyContent="center"
              alignItems="center"
              w={"15%"}
              mt={"lg"}
              h={"73%"}
              p={0}
              bg="#ddd"
              rounded={10}
              color="#191919"
              fontWeight="bold"
              shadow={2}
            >
              <Text>{index + Number(RollFrom)}</Text>
            </Button>
            <Input
              placeholder={i}
              p={0}
              ml="lg"
              mb="sm"
              mt={"lg"}
              w={"75%"}
              borderColor="#FFF"
              rounded={10}
              color="#191919"
              fontWeight="bold"
              shadow={2}
              focusBorderColor="blue700"
              suffix={
                <Div
                  style={{
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  {/*<Button
                  p={0}
                  w={30}
                  h={30}
                  m={0}
                    bg="gray100"
                    rounded="md"
                    color="white"
                    shadow={2}
                    onPress={()=>{
                      setn(i)
                      // setRoll(`${index+1}`)
                    }}
                    prefix={ <AntDesign name="edit" size={17} color="black" />}>
                  </Button>*/}
                  <Button
                    p={0}
                    w={30}
                    h={30}
                    bg="gray100"
                    rounded="md"
                    color="white"
                    shadow={2}
                    onPress={() => {
                      setdata(data.filter((n) => n != i));
                    }}
                    prefix={
                      <AntDesign name="deleteuser" size={17} color="black" />
                    }
                  ></Button>
                </Div>
              }
              editable={false}
            />
          </Div>
        ))}

        <Button
          ml="md"
          mb="lg"
          px="xl"
          py="lg"
          mt="xl"
          bg="blue500"
          rounded={10}
          color="white"
          fontWeight="bold"
          shadow={2}
          onPress={() => {
            console.log(temp);
            RollFrom > 0 && branch != "" && batch != "" && temp.std.length != 0
              ? storeData()
              : alert("all fields are mandatory");
          }}
        >
          submite data
        </Button>
      </ScrollView>
      <Div justifyContent="center" alignItems="center" mt={"xl"} mb={"xl"} row>
        <Input
          placeholder="student name"
          p={0}
          w={"75%"}
          onChangeText={setn}
          value={n}
          borderColor="#FFF"
          rounded={10}
          color="#191919"
          fontWeight="bold"
          shadow={2}
          focusBorderColor="blue700"
          suffix={<Icon name="search" color="gray900" fontFamily="Feather" />}
        />

        <Button
          justifyContent="center"
          alignItems="center"
          ml="md"
          w={"16%"}
          h={"100%"}
          p={0}
          bg="#ddd"
          rounded={10}
          color="#191919"
          fontWeight="bold"
          shadow={2}
          onPress={() => {
            // alert ( JSON.stringify(temp))

            if (RollFrom != 0) {
              if (data.length != 0) {
                data.map((i, index) => {
                  if (i != n) {
                    setdata(data.concat(n));
                  }
                });
              } else {
                setdata(data.concat(n));
              }
            } else {
              alert("select Roll number from..");
            }
          }}
        >
          <Text>+</Text>
        </Button>
      </Div>
    </>
  );
}

const Stack = createNativeStackNavigator();

export default function ({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Template" component={TemplateScreen} />
      <Stack.Screen
        name="CreateRecord"
        component={CreateRecordScreen}
        options={{ title: "Create record" }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#EAECEE",
    padding: 5,
    marginVertical: 4,
    marginHorizontal: 5,
    borderRadius: 15,
  },
  name: {
    margin: 3,
    fontSize: 20,
    fontWeight: "bold",
    color: "#202020",
  },
  subname: {
    fontSize: 12,
    color: "#191919",
  },
});

{
  /*
 <Div alignItems="center" justifyContent="center"  row>
           <Button
              justifyContent="center"
              alignItems="center"
              w={'15%'}
              mt={'lg'}
              h={'73%'}
              p={0}
              bg="#ddd"
              rounded={10}
              color="#191919"
              fontWeight="bold"
              shadow={2}

             >
              <Text>{index+1}</Text>
            </Button>
            <Input
              placeholder="student name"
              p={0}
             ml="lg"
              mb="sm"
              mt={'lg'}
              w={'75%'}
              borderColor="#FFF"
              rounded={10}
              color="#191919"
              fontWeight="bold"
              shadow={2}
              focusBorderColor="blue700"
              suffix={
                <Icon name="search" color="gray900" fontFamily="Feather" />
              }
              editable={false}
            />

          </Div>
 */
}
