import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
} from "react-native";
import Header from "./common/Header";
import WriteButtonModal from "./WriteButtonModal";

const data = [
  {
    title: "에어팟 프로 싸게 처분",
    place: "송파동",
    time: "4시간 전",
    img: require("../assets/images/airpot.png"),
    price: "250,000",
    comment: "4",
    like: "2",
  },
  {
    title: "나의 마음을 가져가실 분",
    place: "송파동",
    time: "14초 전",
    img: require("../assets/images/airpot.png"),
    price: "2350,000",
    comment: "15",
    like: "23",
  },
  {
    title: "강아지 산책 도와주세요.",
    place: "송파동",
    time: "4시간 전",
    img: require("../assets/images/airpot.png"),
    price: "10,000",
    comment: "1",
    like: "2",
  },
  {
    title: "미개봉 메가커피",
    place: "송파동",
    time: "1시간 전",
    img: require("../assets/images/airpot.png"),
    price: "10,000",
    comment: "1",
    like: "1",
  },
  {
    title: "스투시 버킷햇",
    place: "송파동",
    time: "2시간 전",
    img: require("../assets/images/airpot.png"),
    price: "50,000",
    comment: "4",
    like: "2",
  },
  {
    title: "스투시 버킷햇",
    place: "송파동",
    time: "2시간 전",
    img: require("../assets/images/airpot.png"),
    price: "50,000",
    comment: "4",
    like: "2",
  },
  {
    title: "스투시 버킷햇",
    place: "송파동",
    time: "2시간 전",
    img: require("../assets/images/airpot.png"),
    price: "50,000",
    comment: "4",
    like: "2",
  },
  {
    title: "스투시 버킷햇",
    place: "송파동",
    time: "2시간 전",
    img: require("../assets/images/airpot.png"),
    price: "50,000",
    comment: "4",
    like: "2",
  },
  {
    title: "스투시 버킷햇",
    place: "송파동",
    time: "2시간 전",
    img: require("../assets/images/airpot.png"),
    price: "50,000",
    comment: "4",
    like: "2",
  },
];

const ListItem = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <View>
        <Image source={item.img} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.placeTime}>
            {item.place} • {item.time}
          </Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <View style={styles.commentHeart}>
          <Text style={styles.comment}>{item.comment}</Text>
          <Text style={styles.heart}>{item.like}</Text>
        </View>
      </View>
    </View>
  );
};

const ItemSeparator = () => {
  return <View style={styles.separator} />;
};

const Home = () => {
  return (
    //SafeAreaView 기기의 상단 노치, 하단 홈 바 영역을 고려해서 화면 내용이 보여지는 영역 제한, 주로 기기 별로 화면 잘 나타내기 위해 사용

    <SafeAreaView style={styles.container}>
      <Header style={styles.header} />

      <FlatList
        data={data} // 리스트에 표시할 데이터 배열 지정, 객체형태
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({ item }) => <ListItem item={item} />} // 각 데이터 항목을 렌더링하는 함수
        ItemSeparatorComponent={ItemSeparator} // 구분선
        contentContainerStyle={{ paddingBottom: 20 }} // 맨 마지막 거도 편하게 보기 위해서 스타일 추가
        scrollIndicatorInsets={{ right: 1 }}
        indicatorStyle="white"
      />

      <WriteButtonModal />
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  navi: {
    flex: 1,
  },

  header: {
    flex: 1,
  },

  listItem: {
    flexDirection: "row",
    padding: 10,
  },
  title: {
    color: "white",
    alignItems: "center",
    fontSize: 14,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,

    justifyContent: "space-between",
  },
  placeTime: {
    marginTop: 8,
    color: "rgba(255, 255, 255, 0.55)",
    fontSize: 10,
  },

  price: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 600,
    color: "white",
  },
  comment: {
    color: "rgba(255, 255, 255, 0.62)",
    marginRight: 10,
  },
  heart: {
    color: "rgba(255, 255, 255, 0.62)",
  },
  commentHeart: {
    flexDirection: "row",

    justifyContent: "flex-end",
  },

  separator: {
    height: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "rgba(255, 255, 255, 0.24)",
  },

  container: {
    flex: 1,
    backgroundColor: "#2A2B32",
  },
});
