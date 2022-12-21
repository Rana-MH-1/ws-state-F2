import React from 'react'

class Timer extends React.Component{
    constructor(){
        console.log('I am in Constructor');
        super()
        this.state={
            timer:0,
            intervall:null
        }
    }

    componentDidMount(){
       console.log('hi Timer Comp is mounted');
        this.setState({intervall : setInterval(()=>this.setState({timer: this.state.timer +1 }),1000)})
    }

    componentDidUpdate(){
        console.log(this.state.timer);
        console.log('Comp Timer is updated')//effet dsecondaire a chaque fois isir mise à jour au niv du comp timer ==> instruction du console t3awed tsir;
    }
    componentWillUnmount(){
        clearInterval(this.state.intervall)
        console.log('timer Comp is dead');
    }

    render(){
        return(
            <div>
                <h2>{this.state.timer}</h2>
            </div>
        )
    }
}

export default Timer
