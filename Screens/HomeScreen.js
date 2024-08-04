import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import SearchBar from '../Components/SearchBar';
import Iconnic from '../Components/iconic';
import Popular from '../Components/PopularProducts';
import Product1 from '../Components/ProductCard';
import Speaker from '../Components/Speakers';
import Earphones from '../Components/Earphone';
import { useNavigation } from '@react-navigation/native';
 
 export default function HomeScreen() {
  const navigation = useNavigation();
   return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>

      <View style={{backgroundColor:'#232F3F', height:340, borderBottomEndRadius:40, borderBottomLeftRadius:40}}>
    
    <Image
      style={styles.tinyLogo}
      source={{
        uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Famazon-logo-white-png-14.png&f=1&nofb=1&ipt=b720e2ad0ff1d734bd45a43a723863e2561e9d66438092b2fd4ec9514ba6e3ad&ipo=images',
      }}
      resizeMode="contain"
    />

    <SearchBar />
    
   
    <Text style={{fontSize:20, color:'white', fontWeight:"bold", marginLeft:20}}>Best Collections</Text>
    <Iconnic/>
</View>
<Text style={{fontSize:20, fontWeight:'bold', color:'black', marginLeft:20, marginTop:50}}> Popular Products</Text>


<Popular />



<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>MobilePhones</Text>
      <TouchableOpacity onPress={() => { /* Handle See All button press */ }}>
        <Text style={{ fontSize: 16, color: 'blue' }}>See All</Text>
      </TouchableOpacity>
    </View>
<Product1 />
<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Speakers</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Test')}>
        <Text style={{ fontSize: 16, color: 'blue' }}>See All</Text>
      </TouchableOpacity>
    </View>
  
  <Speaker />
  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>EarPhones</Text>
      <TouchableOpacity onPress={() => { /* Handle See All button press */ }}>
        <Text style={{ fontSize: 16, color: 'blue' }}>See All</Text>
      </TouchableOpacity>
    </View>
  
  <Earphones />




    </ScrollView>
  </SafeAreaView>
   )
 }
 const styles = StyleSheet.create({
    container: {
      flex: 1,
                // Center items horizontally
      
    
    },
    scrollView: {
    
      
    },
    text: {
      fontSize: 42,
   
    },
    tinyLogo: {
      marginTop:40,
      marginLeft:90,
      width: '50%',  // Adjust width as needed
      height: 40,   // Adjust height as needed
    },
  });
 