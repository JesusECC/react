/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
 // para llamar una imgen uri para una imagen de la nube
//  para llamar de un directorio local es require

import React, {Component} from 'react';
//son importaciones de componentes
import {
  Text,
  } from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header />
        <Text>buscardor</Text>
        <Text>categoria</Text>
        <SuggestionList />
      </Home>
    );
  }
}
