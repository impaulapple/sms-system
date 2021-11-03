import React from 'react'
import { useTranslation } from 'react-i18next';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, useLocation } from "react-router-dom";
// Icon
import LanguageIcon from '@material-ui/icons/Language';
// Route List
import routes from '../routes'

const theme = createTheme({
  overrides: {
    // 样式表的名字 ⚛️
    MuiListItem: {
      // 规则的名字
      root: {
        height: '50px'
      },
      button: {
        padding: '5px 10px'
      }
    },
    MuiTypography: {
      root: {
        whiteSpace: 'pre'
      },
      displayBlock: {
        lineHeight: '20px',
        fontSize: '13px'
      }
    },
    MuiListItemText: {
      root: {
        minWidth: 'none'
      }
    },
    MuiListItemIcon: {
      root: {
        marginLeft: '12px',
      }
    },
    MuiInputBase: {
      root: {
        width: '100%'
      }
    },
    MuiSelect: {
      root: {
        fontSize: '13px',
      }
    }
  }
});

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const [paramLanguage, setLanguage] = React.useState(i18n.language);
  const location = useLocation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    setLanguage(e.target.value);
  };

  const oLinkCss = {
    textDecoration: 'none',
    color: 'initial'
  }

  const oSelectedCss = {
    background: '#3f51b5',
    color: '#fff'
  }

  const oSelectedIconCss = {
    color: '#fff'
  }

  const oLanguageCss = {
    height: "80px"
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <List>
          {routes.map((oItem, index) => (
            <Link style={oLinkCss} to={oItem.path} key={index}>
              <ListItem style={oItem.path === location.pathname ? oSelectedCss : null} button key={index}>
                <ListItemIcon style={oItem.path === location.pathname ? oSelectedIconCss : null}>{oItem.icon}</ListItemIcon>
                <ListItemText primary={t(oItem.name)} />
              </ListItem>
            </Link>
          ))}
        </List>

        <hr style={{ margin: 0 }} />
        <ListItem style={oLanguageCss} button>
          <ListItemIcon ><LanguageIcon fontSize='small' /></ListItemIcon>
          <ListItemText >
            {t('language')}
            <br />
            <Select labelId="label" id="select" value={paramLanguage}
              onChange={changeLanguage}>
              <MenuItem value="en_us">English</MenuItem>
              <MenuItem value="zh_tw">繁體中文</MenuItem>
              <MenuItem value="zh_cn">简体中文</MenuItem>
            </Select>
          </ListItemText>
        </ListItem>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default Sidebar;