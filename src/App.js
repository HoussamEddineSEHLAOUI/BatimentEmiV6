import {Component} from 'react';
import SearchBox from './SearchBox/SearchBox';
import batimentData from './batimentData';
import Batiments from './Batiments/Batiments';
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state={
      serachfield:'',
      batimentData:[],
      disableModifier :"none"
    }
  }

  componentDidMount=()=>{
    const url = 'http://localhost:3030/Batiment';
        fetch(url)
        .then(response => response.json())
        .then(data=>{
            this.setState({batimentData :data})
        })
  }
  
  onClickModifier=()=>{
    console.log("hey from modifier")
    const disableModifier =this.state.disableModifier ;
    if(disableModifier==="none"){
      this.setState({disableModifier : "block"})
    }else{
      this.setState({disableModifier : "none"})
    }

    console.log(disableModifier)
  }

  onSearchChange=(event)=>{
    this.setState({serachfield :event.target.value})
  }
  
  render(){
     
      const  filteredBatiment = this.state.batimentData.filter(batiment =>{
        return  batiment.nomBatiment.toUpperCase().includes(this.state.serachfield.toUpperCase())
      }) 
      return(
          <div>
              <div>Hey</div>
               <div className='searchzone'>
                  <div className='search'>
                      <SearchBox searchChange={this.onSearchChange}/>
                  </div>
                  <div className='btn-modifier' onClick={this.onClickModifier}>Modifier</div>
               </div>
               <Batiments batimentData={filteredBatiment} disableModifier={this.state.disableModifier}/>         
          </div>
        );
  }
  
}

export default App;

/**
 *                 <Etage chambres={this.chambres} idEtage={this.idEtage}/>
                <Etage chambres={this.chambres} idEtage={this.idEtage}/>
                <Etage chambres={this.chambres} idEtage={this.idEtage}/>

                <Chambre idChmbre={500} dispo={0}/>
 */
/**
 *   const filteredBatiment = batimentData.filter(batiment =>{
      return  batiment.nomBatiment.toLowerCase().includes(this.searchField.toLowerCase())
    });


               <Batiments batimentData={filteredBatiment}/>   

 */