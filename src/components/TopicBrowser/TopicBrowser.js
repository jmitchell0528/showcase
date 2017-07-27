import React, {Component} from 'react'

import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

class TopicBrowser extends Component  {

  render()  {
    return (
      <div className="TopicBrowser">
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
    )
  }
}

export default TopicBrowser;

// ^ This can also be written when the class is declared instead of being added to the bottom. example: 'export default class TopicBrowser extends Component {}'
