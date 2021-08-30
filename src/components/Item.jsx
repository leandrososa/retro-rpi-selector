//import './Item.css';
import React, {Component} from 'react'
import changeSfxFile from './../assets/sound/change.mp3'
import selectSfxFile from './../assets/sound/select.mp3'
import './Item.scss'

class AudioSfx {
    constructor(audiofile) {
        this.resource = new Audio(audiofile);
    }
    play() {
        this.resource.play()
    }
}


class Item extends Component{

    constructor(props){
        super(props);
        this.state = {
            selected: false
        }
    }

    select(){
        this.setState({ selected: true })
        let changeSfx = new AudioSfx(changeSfxFile);
        changeSfx.play();
        console.log('Selected ' + this.props.name);
    }

    deselect(){
        this.setState({ selected: false })
        console.log('Deselected ' + this.props.name);
    }

    run(){
        let selectSfx = new AudioSfx(selectSfxFile);
        selectSfx.play();
        console.log('Ran ' + this.props.name);
    }

    render(){
        return(
            <div onFocus={() => this.select()}
                 onBlur={() => this.deselect()}
                 className={this.state.selected ? 'Item selected' : 'Item'}
                 onMouseEnter={() => this.select()}
                 onMouseLeave={() => this.deselect()}
                 onClick={() => this.run()}>
                    <img className="Item-img" src={this.props.img} alt={this.props.name} />
                <div>
                    <span className="Item-name">{this.props.name}</span>
                </div>
            </div>
        )
    }
}


export default Item;