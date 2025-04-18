import React from "react";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      products: [],
      search: "",
      price: 0,
      text: "",
      timer: null,
    }
  }

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => this.setState({ ...this.state, products: data }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({
        ...this.state,
        text: "Search filter changed",
        timer: () => setTimeout(() => console.log("Changed"), 10000)
      });
    }
  }
  
  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  render() {
    const { products, price, search, text } = this.state;

    const filteredProducts = products.filter(p =>
      p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      && p.price >= price);

    const productsList = filteredProducts.map(product => (
      <p key={product.id}>{product.title}</p>
    ));

    return (
      <div>
        <input onChange={(e) => this.setState({ ...this.state, search: e.target.value })} type="text" placeholder="Search" />
        <p>
          {text}
        </p>
        <select onChange={(e) => this.setState({ ...this.state, price: e.target.value })}>
          <option value="0">0</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        {productsList}
      </div>
    )
  }
}

export default App;