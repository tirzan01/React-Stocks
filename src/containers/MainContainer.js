import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor() {
    super()

    this.state = {
      myStocks: [],
      stocks: [],
      sortBy: 'Alphabetically',
      filter: 'Tech',
    }
  }

  addStockToMyStocks = id => {
    let newStock = this.state.stocks.filter(stock => stock.id === id)
    console.log(newStock.length)
    if(!this.state.myStocks.find(stock => stock === newStock[0])){
      this.setState(prevState => {
        return {
          myStocks: [...prevState.myStocks, newStock[0]]
        }
      })
    }
  }

  deleteStockFromMyStock = id => {
    console.log('delete')
    this.setState(prevState => {
      return {
        myStocks: prevState.myStocks.filter(stock => stock.id !== id)
      }
    })
  }

  sortByName = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  }

  sortByPrice = (a, b) => a.price - b.price

  handleChangeSortBy = e => {
    if(e.target.value === 'Alphabetically'){
      console.log(e.target.value)
      this.setState(prevState => {
        return {stocks: prevState.stocks.sort(this.sortByName)}
      })
    }else{
      this.setState(prevState => {
        return {stocks: prevState.stocks.sort(this.sortByPrice)}
      })
    }
  }

  handleChangeFilter = e => {
    this.setState({filter: e.target.value})
  }

  render() {
    return (
      <div>
        <SearchBar handleChangeSortBy={this.handleChangeSortBy} handleChangeFilter={this.handleChangeFilter} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks.filter(stock => stock.type === this.state.filter)} addStockToMyStocks={this.addStockToMyStocks} />

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.myStocks} deleteStockFromMyStock={this.deleteStockFromMyStock} />

            </div>
          </div>
      </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:3001/stocks')
      .then(resp => resp.json())
      .then(stocks => {this.setState({stocks})})
  }

}

export default MainContainer;
