import React from 'react';
import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';
import SECTIONS from './directory.data'

class Directory extends React.Component{
    constructor(){
        super();
        this.state={
            sections: SECTIONS
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherSectionProps})=>(
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;





