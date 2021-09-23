
import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import glamorous from "glamorous";
import Drawer from 'material-ui/Drawer';
import { MenuItem } from "material-ui/Menu";
import RaisedButton from 'material-ui/RaisedButton';


const StyledView = glamorous.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "baseline",
    alignItems: "start",
    height: "100%",
    width: "100%",
    minHeight: "0",
    position: 'relative'
});

const ControlPanelLayout = glamorous.div({
    flex: "0 0 80px",
    width: "100%"
});

const ListLayout = glamorous.div({
    width: "100%",
    height: "100%",
    display: "flex",
    minHeight: "0",
    overflow: "auto",
    position: 'relative',
    background: '#d9d9d9'
});


class CbtLayout extends Component { 
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    
    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        let { controlPanel, list } = this.props;
        return (
            <StyledView>
                <div>
                    <div>
                        <RaisedButton
                            secondary={true}
                            color="accent" 
                            label="Toggle Drawer"
                            onClick={this.handleToggle}
                        >
                            
                        </RaisedButton>
                        
                        <Drawer open={this.state.open} docked={true}>
                            <MenuItem>Menu Item</MenuItem>
                            <MenuItem>Menu Item 2</MenuItem>
                        </Drawer>
                    </div>
                </div>
                {/* <ControlPanelLayout>
                    { controlPanel }
                </ControlPanelLayout>
                
                <ListLayout>
                    { list }
                </ListLayout> */}

                { this.props.children }
            </StyledView>
        )
    }
}

export default CbtLayout;