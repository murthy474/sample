
import React, { Component } from 'react';
import {
  Platform,FlatList,
  Text,Image,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import { Button,Avatar} from 'react-native-elements';


export default class Userspage extends Component{
   state={
   user:[],userdata:''
   }
    
    componentDidMount(){
        fetch( 'https://api.github.com/users/url' , {
            method: 'GET',
        }).then((response) => response.json())
            .then((responseJson) => {
                 console.warn(responseJson);
                 this.setState({user:responseJson});
                   })
            .catch((error) => {
                console.error(error);
            });
           
    }

      renderdata(){
          if(this.state.user){
               return(
                   <View style={{marginLeft:25,justifyContent:'center',alignSelf:'center'}}>
                       <Avatar
                            large
                            rounded
                            source={{uri:this.state.user.avatar_url}}
                            onPress={() => console.log("Works!")}
                            activeOpacity={0.7}
                            />
                        <View style={{borderWidth:0.5,width:250}}>    
                            <Text style={{fontSize:20,margin:5}}>{this.state.user.name} </Text>
                        </View>
                        
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('followers',{'followerslist':this.state.user.followers_url})
                            }}> 
                            <View style={{borderWidth:0.5,width:250}}>
                                <Text style={{fontSize:20,margin:5}}>followers {this.state.user.followers}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('followers',{'followerslist':this.state.user.following_url})
                            }}>                         
                            <View style={{borderWidth:0.5,width:250}}>
                                <Text style={{fontSize:20,margin:5}}>following {this.state.user.following}</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{borderWidth:0.5,width:250}}>
                            <Text style={{fontSize:20,margin:5}}>List of repros</Text>
                        </View>
                        <View style={{borderWidth:0.5,width:250}}>
                            <Text style={{fontSize:20,margin:5}}>organization</Text>
                        </View>
                        
                    </View>
               ); 
          }else{
              return false;
          }
      }
   
     
    render() {
        return(
            <View style={{flex:1}}>
                <Text>single data</Text>
                {this.renderdata()}
            
            </View>
        );
    }
}