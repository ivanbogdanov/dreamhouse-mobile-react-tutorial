'use strict';

import React, {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

module.exports = React.createClass({
  handlePress(){
    if(this.props.navigator){
      this.props.navigator.push({name:'PageA'});
    }
  },
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.text}>Page B</Text>
        </TouchableOpacity>
      </View>
    );
  },
});
