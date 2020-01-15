import React, { Component } from 'react';

import Header from '../common/header.component';
import Footer from '../common/footer.component';
import CardBox from '../card-box/card-box.component';
import SearchForm from '../common/search-form.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialUsers: [],
      users: [],
      searchVal: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const str = e.target.value;
    if(!str) {
      this.setState({ users: this.state.initialUsers, searchVal: '' });
    } else {
      const iUsers = this.state.initialUsers;
      const fUsers = iUsers.filter(
        u => u.name.toLowerCase().includes(str.toLowerCase())
      );
      this.setState({
        users: fUsers,
        searchVal: str
      });
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ initialUsers: users, users }));
  }

  render() {
    return (
      <div className="App">
        <Header>
          <SearchForm name='searchVal' placeholder='Search users ...' onChange={this.onChange} />
        </Header>

        <section id='body'>
          <CardBox data={this.state.users} />
        </section>

        <Footer />
      </div>
    );
  }
}

export default App;
