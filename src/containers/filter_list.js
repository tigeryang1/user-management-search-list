import React, { Component } from 'react';
import SearchBar from './search_bar';
import WorkList from './work_list';

export default class FilterList extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <WorkList/>
      </div>
    );
  }
}