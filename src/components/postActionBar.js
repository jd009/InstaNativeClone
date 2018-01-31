import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {
  Ionicons,
  SimpleLineIcons,
  FontAwesome,
} from '@expo/vector-icons';

export default class PostActionBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={styles.postActionBarContainer}
      >
        <View
          style={styles.primaryActionsContainer}
        >
          <View
            style={styles.actionContainer}
          >
            <Ionicons name="md-heart-outline" size={32} />
          </View>
          <View
            style={styles.actionContainer}
          >
            <SimpleLineIcons name="bubble" size={28} />
          </View>
          <View
            style={[styles.actionContainer, styles.sendContainer]}
          >
            <SimpleLineIcons name="paper-plane" size={25} />
          </View>
        </View>
        <View>
          <FontAwesome name="bookmark-o" size={28} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postActionBarContainer: {
    paddingTop: 5,
    paddingBottom: 5,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryActionsContainer: {
    flexDirection: 'row',
  },
  actionContainer: {
    marginRight: 15,
  },
  sendContainer: {
    paddingTop: 2,
  },
});