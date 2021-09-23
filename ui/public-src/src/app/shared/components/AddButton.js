import React, { Component } from "react";
import RaisedButton from 'material-ui/RaisedButton';

export default ({ children, ...rest}) => (
    <RaisedButton secondary={true} color="accent" {...rest}>
        {children}
    </RaisedButton>
);
