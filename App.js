import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { fetchInstaData } from './src/utils/instaDataFetcher';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: '',
    }
  }

  componentDidMount() {
    fetchInstaData()
      .then((users) => {
        this.setState({
          userInfo: JSON.stringify(users),
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>InstaNative</Text>
        <Text
          numberOfLines={15}
          ellipsizeMode='tail'
        >
          {this.state.userInfo}
        </Text>
        <Image
          source={{ uri: 'https://picsum.photos/300?random' }}
          style={{height: 300, width: 300}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
