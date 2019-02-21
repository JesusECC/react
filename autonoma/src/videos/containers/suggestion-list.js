import React, { Component } from 'react';
import{
  FlatList,
  Text
}from 'react-native';

import Layout from '../components/suggestion-list-layouts';

class SuggestionList extends Component{
  render() {
    const list=[
      {
        title:'jesus',
        key:'1'
      },
      {
        title: 'chilca',
        key: '2'
      }
    ]
    return (
      <Layout
        title= "Recomendado para ti" >
        <FlatList
          data={list}
          ListEmptyComponent={()=><Text>No hay elemento en la lista</Text>}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />
      </Layout>
    )
  }
}
export default SuggestionList
