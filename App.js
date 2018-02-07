import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
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

  loadMorePosts = () => {
    fetchInstaData()
      .then((data) => {
        this.setState({
          posts: [
            ...this.state.posts,
            ...data.results,
          ],
        });
      });
  }

  renderPost({ item: post }) {
    return (
      <Post
        key={post.login.sha1}
        username={post.login.username}
        userThumbnailURL={post.picture.thumbnail}
      />
    );
  }

  generateKeyForPost(post) {
    return post.login.sha1;
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text
            style={styles.headerText}
          >
            {'InstaNative'}
          </Text>
        </SafeAreaView>
        <FlatList
          data={this.state.posts}
          keyExtractor={this.generateKeyForPost}
          renderItem={this.renderPost}
          onEndReached={this.loadMorePosts}
          onEndReachedThreshold={0.25}
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
  },
  headerText: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
    fontSize: 24,
  },
});
