---

### 목표

- Navigation의 개념 이해하기
- Stack Navigation 사용하기
- Drawers & Tabs 이해하기

### Navigation이란?

React Natvie 앱에서 네비게이션이란? 

웹 브라우저에서는 URL 입력을 통해 하위 페이지로 이동하고는 한다. 모바일 앱은 좀 다른데, 버튼을 눌러서 한 화면에서 다른 화면으로 이동하거나 이전 화면으로 돌아가는 식이다. 

React native안에 있는 내비게이션 패턴을 알아보도록 하자. 

---

## 음식 카테고리 만들기

### FlatList로 음식 카테고리 구현

- 카테고리는 개수도 적고 정적 데이터여서 굳이 FlatList를 사용할 필요는 없지만 연습을 위해 사용하도록 한다.

<aside>
✂️ **이 실수로 인해 6분을 날렸다.**

화살표 함수에서 props를 전달해줄 때 중괄호를 채워주는 것을 잊지 말자

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a506c5ae-995d-4745-91a4-7d0d769a91e7/Untitled.png)

</aside>

### **Pressable**

이것이 감싼 children의 누름 상호작용을 감지하는 Component Wrapper

```jsx
<Pressable onPress={onPressFunction}>
  <Text>I'm pressable!</Text>
</Pressable>
```

- Pressable로 감싸졌을 때
  - `onPressIn` press가 활성화 되었을 때 호출된다.
  - `onPressOut` press가 비활성화 되었을 때 호출된다.
  `onPressIn` 이 감지된 이후, 아래의 두가지 중 하나가 발생한다.
  1. 사용자가 손가락을 떼면 `onPressOut` → `onPress`
  2. 사용자가 손가락을 떼기 전에 0.5 초 이상 누르고 있으면 `onLongPress` → `onPressOut`
  ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ebeb5e55-dfef-425e-a2d5-9a24513f318c/Untitled.png)

---

## 그리드에 아이템 배치하기

### FlatList에 열 추가하기

- numColumns 프로퍼티
- 기본값은 1이고 1이외의 숫자를 대입하여 열을 추가할 수 있다.

### flex

- flex는 항상 자신의 바로 부모의 크기 안에서 이루어짐을 인지하자!
- flex를 주지 않으면 차지하는 공간에 대한 정의가 이루어지지 않아 아무런 공간도 차지하고 있지 않은 상태가 된다. 그러면 화면에 나타나지 않는다.

### iOS, Android에서 그림자 추가하기

- Android
  ```jsx
  elevation: 4, //그림자, 고도
  ```
- iOS
  ```
  backgroundColor: "white",
      shadowColor: "black",
      shadowOpacity: 0.8,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
  ```

### 물결 효과

```jsx
<Pressable android_ripple={{ color: "#ccc" }} style={styles.button}>
```

android_ripple 프로퍼티를 사용하여 클릭 시 색을 지정하여 클릭 시 해당 색으로 물결 효과를 구현할 수 있다.

- 물결 효과가 둥근 테두리를 넘어가지 않도록 하기
  - `overflow: 'hidden'`
    <aside>
    ⚠️ 이 방법을 사용할 시 iOS에서 외부에 있는 그림자가 숨겨진다. 따라서 overflow: hidden은 안드로이드일 때에만 적용하고, iOS는 다른 스타일링을 추가해야 한다. 이를 위해 Platform API를 사용할 것이다.
    
    </aside>


### Platform API

react-native에서 제공하는 API이다.

```jsx
	overflow: Platform.OS === "android" ? "hidden" : "visible",
```

또한 클릭 했을 때 나타나는 스타일링을 위해서 `Pressable` 에도 조건에 따라 스타일을 반환하는 함수로 대체한다.

```
<Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
```

react native에서 제공하는 `pressed` 프로퍼티를 사용하여 이 styles 배열에 조건부 스타일을 추가한다.

객체 구조할당을 통해서 기본적으로 styles.button의 스타일을 가지고, 만약에 pressed 되었을 때 buttonPressed 스타일을, 그렇지 않을 때 null을 반환한다.

<aside>
⚠️ **하나의 컴포넌트에 여러 가지 스타일을 추가할 때 배열로 변경해주는 거 잊지 말기**

```jsx
<View style={[styles.gridItem, { backgroundColor: color }]}>
```

</aside>

### 어플리케이션 배경색 설정하기

app.json에 backgroundColor를 헥사 코드로 추가할 수 있다.

### 상태 표시줄 색 변경하기

```jsx
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
```

## React Navigation 사용하기

```jsx
const Stack = createNativeStackNavigator();
// Stack은 두 개의 프로퍼티를 가지고 얘네는 컴포넌트 기능을 가진 객체를 포함함

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          {/* Screen 컴포넌트는 내비게이터가 관리할 화면을 등록할 수 있는 컴포넌트 */}
          <Stack.Screen name="MealsCatagories" component={CategoriesScreen} />
        </Stack.Navigator>
        **{" "}
      </NavigationContainer>
    </>
  );
}
```

- Navigation Screen을 사용하여 부른 컴포넌트들은 구조 분해를 통해 pull하는 프로퍼티를 받는다.
  - 화면으로 사용되는 컴포넌트만 이 프로퍼티를 받는다. 자식 컴포넌트는 받지 않는다.
  - 여기에 있는 navigation 프로퍼티의 값은 화면 사이를 이동하게 하는 메서드를 포함하는 객체가 된다.
    <aside>
    💡 App.js → CategoriesScreen을 네비게이션 스크린으로 정의함
    
    CategoriesScreen은 화면 사이를 이동하게 하는 메서드를 가지는 객체 프로퍼티를 받음
    
    </aside>


### 기본 화면 설정하기

- `<Stack.Navigator>` Navigator 설정
- `<Stack.Screen>` 으로 화면 등록, 기본 화면 설정 가능

아무런 설정 없이는 `<Stack.Navigator>` 내의 첫 번째 자식 요소가 초기 화면이 된다.

혹은 `<Stack.Navigator>` 의 `initialRouteName` 프로퍼티를 사용하여 초기화면을 지정할 수 있다.

```jsx
<Stack.Navigator initialRouteName="ProductDetails">
  <Stack.Screen name="AllProducts" component={AllProducts} />
  <Stack.Screen name="ProductDetails" component={ProductDetails} /> // initial screen
</Stack.Navigator>
```

### Native Stack vs Stack

- Stack

  - 화면 위에 다른 페이지를 푸시하고 이전 화면으로 돌아갈 수 있다.

- Native Stack

  - 애니메이션과 UI 요소에 대해 Native Platform에서 제공하는 것을 사용한다.
  - 따라서 네이티브 동작을 흉내 내는 스택보다 성능이 더 높을 수도 있다.
  - 보톤 Native Stack을 선호하고 사용하기도 한다.

- navigation property
  - Screen으로 로드되는 컴포넌트, Screen으로 설정된 컴포넌트를 통해서만 얻을 수 있다.
  - Screen이외에도 이 객체를 사용하고 싶은 경우
    1. props로 전달하기
    2. React Navigation이 제공하는 `useNavigation` 훅 사용하기
    ```jsx
    import { useNavigation } from "@react-navigation/native";
    const navigation = useNavigation();
    ```
    - navigation 객체를 제공한다.
    - Screen 등록 여부와 상관없이 실행 가능하다.

### route, useRoute

React Navigation에서 Screen으로 등록된 컴포넌트는 `navigation` 프로퍼티와 `route` 프로퍼티를 받는다.

- route
  - params 프로퍼티가 있다. 매개변수 객체를 받을 수 있다.

```jsx
const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };

...

export default CategoriesScreen;
```

navigate를 호출할 때 categoryId라는 매개변수 객체를 정의했다.

이를 MealsOverviewScreen에서 route를 통해 매개변수 객체와 같은 식별자를 사용하여 categoryId를 추출할 수 있다.

```jsx
const MealsOverViewScreen = ({ route }) => {
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen{catId}</Text>
    </View>
  );
};

export default MealsOverViewScreen;
```

- route 프로퍼티 대안

  - `useRoute` 훅

  ```jsx
  import { useRoute } from "@react-navigation/native";

  const route = useRoute();
  const catId = route.params.categoryId;
  ```

- 프로퍼티 깔끔하게 배분하기

```jsx
<MealItem
  title={itemData.item.title}
  duration={itemData.item.duration}
  affordability={itemData.item.affordability}
  complexity={itemData.item.complexity}
  imageUrl={itemData.item.imageUrl}
/>
```

이것을 mealItemProps 객체를 따로 만들어서 배분하면 깔끔해진다.

```jsx
const renderMealItem = (itemData) => {
  const item = itemData.item;
  const mealItemProps = {
    title: item.title,
    imageUrl: item.imageUrl,
    affordability: item.affordability,
    complexity: item.complexity,
    duration: item.duration,
  };
  return <MealItem {...mealItemProps} />;
};
```
