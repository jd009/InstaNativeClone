import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image } from 'react-native';

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
    } = this.props;

    return (
      <View style={styles.postContainer}>
        <Text>{username}</Text>
        <Image
          source={{ uri: this.state.imageURL }}
          style={{height: 300, width: 300}}
          onError={this.handleImageLoadError}
        />
      </View>
    );
  }
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  postContainer: {
    marginTop: 5,
    marginBottom: 20,
  },
});


