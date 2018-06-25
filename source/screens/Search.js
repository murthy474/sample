import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,FlatList} from 'react-native';

export default class Search extends Component {
  state={
    searchBool:'none',SearchData:[]
  }
  

  SearchResults(letter) {
    if (letter.length >= 1) {
        this.setState({ searchBool: 'flex' });
        fetch( 'https://www.fashionpecks.com/v1/user/searchProducts' , {
          method: 'POST',
          body: JSON.stringify({
            'str':letter
          })
      }).then((response) => response.json())
          .then((responseJson) => {
               console.warn(responseJson);
                this.setState({SearchData: JSON.parse(JSON.stringify(responseJson.details)),
                  searchBool: 'flex'},()=>{});
                 })
          .catch((error) => {
              console.error(error);
          });
    } else {
        this.setState({ searchBool: 'none' });
    }
}
renderSearch(item) {
  if (item.name) {
      return (
              <Text>{item.name}</Text>
      
      );
  } 
}
  render() {
    return (
      <View>
        <Text>data</Text>
          <TextInput underlineColorAndroid='transparent' onChangeText={(text) => this.SearchResults(text)} placeholder="Search for Products"
              style={[{ alignSelf: 'center', width: '74%', height: 40,marginTop:20, backgroundColor: '#fff', }]} />
      
            <View style={{ backgroundColor: '#fff', display: this.state.searchBool }}>
                              <FlatList
                                  data={this.state.SearchData}
                                  keyExtractor={(item, index) => index}
                                  renderItem={({ item }) => this.renderSearch(item)}
                              />
                    </View>
      </View>
    );
  }
}


