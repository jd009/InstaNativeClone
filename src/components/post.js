import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from 'react-native';

import PostActionBar from './postActionBar';

function generateRandomImageURL() {
  const imageNumber = Math.floor(Math.random() * 1000);
  const imageURL = `https://picsum.photos/300?image=${imageNumber}`;

  return imageURL;
}

export default class Post extends Component {
  constructor(props) {
    super(props);

    const imageURL = generateRandomImageURL();

    this.state = {
      imageURL,
    };
  }

  handleImageLoadError = () => {
    const imageURL = generateRandomImageURL();

    this.setState({
      imageURL,
    });
  }

  render() {
    const {
      username,
      userThumbnailURL,
    } = this.props;

    return (
      <View style={styles.postContainer}>
        <View style={styles.postHeaderContainer}>
          <Image
            source={{uri: this.props.userThumbnailURL}}
            style={styles.userThumbnail}
          />
          <Text
            style={styles.username}
          >
            {username}
          </Text>
        </View>
        <Image
          source={{ uri: this.state.imageURL }}
          style={styles.postImage}
          onError={this.handleImageLoadError}
        />
        <PostActionBar />
      </View>
    );
  }
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  userThumbnailURL: PropTypes.string.isRequired,
};

const USER_THUMBNAIL_SIZE = 30;

const styles = StyleSheet.create({
  postContainer: {
    marginTop: 5,
    marginBottom: 20,
  },
  postHeaderContainer: {
    paddingTop: 5,
    paddingBottom: 5,

    flexDirection: 'row',
    alignItems: 'center',
  },
  userThumbnail: {
    height: USER_THUMBNAIL_SIZE,
    width: USER_THUMBNAIL_SIZE,
    borderRadius: USER_THUMBNAIL_SIZE / 2,
  },
  username: {
    marginLeft: 5,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
    fontSize: 14,
  },
  postImage: {
    height: 300,
    width: 300,
  },
});


