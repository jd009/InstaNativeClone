import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Platform,
} from 'react-native';

import { fetchInstaData } from './src/utils/instaDataFetcher';
import Post from './src/components/post';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    fetchInstaData()
      .then((data) => {
        this.setState({
          posts: data.results,
        });
      });
  }

  render() {
    const posts = this.state.posts.map((post, index) => {
      return (
        <Post
          key={post.login.sha1}
          username={post.login.username}
          userThumbnailURL={post.picture.thumbnail}
        />
      );
    });

    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text
            style={styles.headerText}
          >
            {'InstaNative'}
          </Text>
        </SafeAreaView>
        <ScrollView>
          {posts}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
    fontSize: 24,
  },
});
