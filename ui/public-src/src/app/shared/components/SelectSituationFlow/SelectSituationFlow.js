import React, { useEffect, useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import './ConfigureSituationFlow.css';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

export default function SelectSituationFlow(props) {

  const handleSelectChange = (e) => {
    console.log(e);
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [name, setSelected] = useState([]);



  useEffect(() => {
    if (props) {
      console.log(props.situationList);
      console.log();
      // props.situationList.find(s => s.id == Number(props.selectedSituationId))
    }
  }, [props]);

  const handleChange = event => {
    setSelected(event.target.value);
    findSituationDetaiById(event.target.value);

  };

  const findSituationDetaiById = id => {
    props.situationList && props.situationList.map(situation => {
      if (situation._id == id) {
        console.log("here=====", situation)
      }
    })
  }

  const getSituationNameById = id => {
    props.situationList && props.situationList.map(situation => {
      if (situation._id == id) {
        console.log("/////////", situation.situation_name);
        return situation.situation_name;
      }
    })
  }

  console.log("=====name=====", name)

  return (
    <Drawer
      anchor="right"
      variant="temporary"
      open={props.openSelectSituationModal}
    >
      <div style={{ minWidth: '300px' }} className="p-20">
        <div className="mtb-20 drawer-title">
          <div>Situations</div>
          <IconButton
            color="inherit"
            aria-label="Close"
            onClick={(e) => props.closeSelectSituationModal()}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />

        <FormControl style={{ width: "100%" }} >
          <InputLabel htmlFor="select-multiple-checkbox">Select Situation</InputLabel>
          <Select
            multiple
            value={name}
            onChange={(e) => handleChange(e)}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => (

              <div >
                {selected.map(value => (
                  <React.Fragment>
                    {console.log("*******selected******", value)}
                    <Chip key={value} label={getSituationNameById(value)} />
                  </React.Fragment>
                ))}
              </div>
            )}
          >
            {props.situationList && props.situationList.map((situation, id) => (
              <MenuItem key={id} value={situation._id}>
                {situation.situation_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Drawer>
  );
}
