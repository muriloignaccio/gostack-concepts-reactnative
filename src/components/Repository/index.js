import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default ({ data }) => {
  const [likes, setLikes] = useState(data.likes);

  async function handleLikeRepository(id) {
    const response = await api.post(`/repositories/${id}/like`);

    setLikes(response.data.likes);
  }

  return (
    <View style={styles.repositoryContainer}>
      <Text style={styles.repository}>{data.title}</Text>

      <View style={styles.techsContainer}>
        {data.techs.map(tech => (
          <Text style={styles.tech} key={tech} >{tech}</Text>
        ))}
      </View>

      <View style={styles.likesContainer}>
        <Text
          style={styles.likeText}
          testID={`repository-likes-${data.id}`}
        >
          {likes} curtidas
      </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLikeRepository(data.id)}
        testID={`like-button-${data.id}`}
      >
        <Text style={styles.buttonText}>Curtir</Text>
      </TouchableOpacity>
    </View>
  );
};