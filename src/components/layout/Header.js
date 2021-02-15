import React,{Component,Fragment} from 'react';
import './Header.css';


class Header extends Component {
  constructor(){
    super()

    this.state={
      title:''
    }
    }

  render(){
  return(
    <Fragment>
<header>
<center>
Movies-IMDB
</center>
</header>
<hr/>
</Fragment>
)

}

}

export default Header;
