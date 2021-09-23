import React, { Component } from "react";
import { observer } from "mobx-react";
import TextField from "material-ui/TextField";
import RaisedButton from 'material-ui/RaisedButton';

import glamorous from "glamorous";
import { css } from "glamor";

const FileName = glamorous.div({
    display: 'inline-block',
    marginLeft: '10px'
});

@observer
export default class MaterialFile extends Component {
    constructor(props) {
        super(props);
    }

    _openFileDialog = () => {
        var fileUploadDom = this.refs.fileUpload;
        fileUploadDom.click();
    }

    render() {
        let { props } = this;
        let { onDrop, field, file, ...rest } = props;
        return (
            <div>
                <RaisedButton
                    primary={true}
                    onClick={ this._openFileDialog }
                    color="primary"
                    {...rest}
                >
                    Select file
                </RaisedButton>
                {
                    file && (
                        <FileName>{ file.name }</FileName>
                    )
                }
                <input
                    {...field.bind({
                        onChange: onDrop
                    })}
                    ref="fileUpload"
                    type="file"
                    style={{ display: "none" }}
                />
            </div>
        );
    }
}