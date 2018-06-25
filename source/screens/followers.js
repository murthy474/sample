import React from 'react';
import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native';

export default class followers extends React.Component {
    state={
        userslist:[]
        }
    componentDidMount(){
        this.setState({itemdetails:this.props.navigation.state.params.followerslist},()=>{this.showusers(this.state.itemdetails)})
    }
    showusers(url){
        fetch( url , {
            method: 'GET',
        }).then((response) => response.json())
            .then((responseJson) => {
                 console.warn(responseJson);
                  this.setState({userslist:responseJson},()=>{});
                   })
            .catch((error) => {
                console.error(error);
            });
    }
    renderuserdata(){
        if(this.state.userslist.length > 0){
           return(
            <FlatList
            showsHorizontalScrollIndicator={false}
            data={this.state.userslist}
            renderItem={({ item }) => this.username(item)}
            keyExtractor={(item, index) => index}
            />
           );
        }else{
            return false;
        }
    }
    username(item){
        return(
            <View style={{marginLeft:10,flex:1}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Userspage',{'userdata':item})}}>
                <Text style={{fontSize:15,margin:7}}> {item.login}</Text>
            </TouchableOpacity>
        </View>
        );
    }
    render() {
    return (
        <View style={{justifyContent:'center',alignSelf:'center'}}>
            <View style={{backgroundColor:'lightblue'}}>
            <Text style={{fontSize:25}}>List of users</Text>
            </View>
             {this.renderuserdata()}
        </View>
    );
  }
}


