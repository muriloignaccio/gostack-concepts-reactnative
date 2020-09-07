import React, { useState, useEffect } from "react";

import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
} from "react-native";

import { Repository } from './components';

import api from './services/api';

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(response => setRepositories(response.data));
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={repositories}
          renderItem={({ item: repo }) => (
            <Repository
              data={repo}
            />
          )}
          keyExtractor={repo => repo.id}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
  },
});
