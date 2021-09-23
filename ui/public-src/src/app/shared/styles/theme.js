import getMuiTheme from 'material-ui/styles/getMuiTheme';
import red from 'material-ui/colors/red';
import lightBlue from 'material-ui/colors/lightBlue';

const theme = {
    palette: {
        primary: {
            ...lightBlue,
        },
        secondary: red
    }
};

export default {
    theme: getMuiTheme(theme)
};
