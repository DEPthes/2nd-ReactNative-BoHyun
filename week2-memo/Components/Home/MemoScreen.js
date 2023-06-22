import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text, TouchableOpacity, Alert } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const MemoScreen = () => {
  const [memoText, setMemoText] = useState('');
  const [memoList, setMemoList] = useState([]);

  const handleSaveMemo = () => {
    if (memoText.trim() !== '') {
      setMemoList(prevList => [
        { id: Math.random().toString(), text: memoText },
        ...prevList,
      ]);
      setMemoText('');
    }
  };

  const handleDeleteMemo = (memoId) => {
    setMemoList(prevList => prevList.filter(item => item.id !== memoId));
  };

  const confirmDeleteMemo = (memoId) => {
    Alert.alert(
      '메모 삭제',
      '정말로 삭제하시겠습니까?',
      [
        { text: '취소', style: 'cancel' },
        { text: '삭제', style: 'destructive', onPress: () => handleDeleteMemo(memoId) },
      ],
      { cancelable: true }
    );
  };

  const renderMemoItem = ({ item }) => {
    const swipeToDelete = () => (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => confirmDeleteMemo(item.id)}
      >
        <Text style={styles.deleteButtonText}>삭제</Text>
      </TouchableOpacity>
    );

    return (
      <Swipeable renderRightActions={swipeToDelete}>
        <View style={styles.memoItem}>
          <Text style={styles.memoText}>{item.text}</Text>
        </View>
      </Swipeable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder="메모를 입력하세요"
          value={memoText}
          onChangeText={text => setMemoText(text)}
        />
        <Button title="저장" onPress={handleSaveMemo} />
      </View>
      <FlatList
        data={memoList}
        renderItem={renderMemoItem}
        keyExtractor={item => item.id}
        style={styles.memoList}
        contentContainerStyle={styles.memoListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingTop: 8,
    fontSize: 16,
  },
  memoList: {
    flex: 1,
  },
  memoListContent: {
    paddingBottom: 16,
  },
  memoItem: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    marginBottom: 8,
    borderRadius: 4,
  },
  memoText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MemoScreen;