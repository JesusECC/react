import React, { Component } from 'react';
import{
  FlatList,
  Text
}from 'react-native';

import Layout from '../components/suggestion-list-layouts';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';


class SuggestionList extends Component{
  renderEmtpy=()=><Empty text="No hay sugerencias :(" />
  itemSeparator=()=><Separator />
  renderItem=({item})=>{
    return(
      <Suggestion {...item} />
    )
  }
  render() {

    return (
      <Layout
        title= "Recomendado para ti" >
        <FlatList
          data={this.props.list}
          ListEmptyComponent={this.renderEmtpy}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}
export default SuggestionList
