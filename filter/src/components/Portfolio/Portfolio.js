import React, { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import dataToDisplay from '../../dataToDisplay';
import {filtration} from './filtration';

const filters = ["All", "Websites", "Flayers", "Business Cards"];

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {filter: "All", actualDataToDisplay: dataToDisplay}
        this.changeDataToDisplay = this.changeDataToDisplay.bind(this);
    }

    changeDataToDisplay(filter) {
        this.setState({
            filter: filter,
            actualDataToDisplay:
                (filter === "All") ? 
                    dataToDisplay : 
                    filtration(dataToDisplay, filter)
        });
    }

    render() {
        return (
            <div className="portfolio">
            <Toolbar
                filters={filters}
                selected={this.state.filter}
                onSelectFilter={this.changeDataToDisplay}
            />
            <ProjectList projects = {this.state.actualDataToDisplay}/>
                
            </div>
        )
    }
}
