import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AccountIcon from "@material-ui/icons/AccountCircle";
import ToolboxIcon from "@material-ui/icons/Build";
import AddIcon from "@material-ui/icons/Add";
import HelpIcon from "@material-ui/icons/Help";
import ContactIcon from "@material-ui/icons/Message";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchResults from "./SearchResults";
import ItemInfo from "./ItemInfo";
import VideoResults from "./VideoResults";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ToolboxContainer from "./ToolboxContainer";
import WebsiteInfo from "./WebsiteInfo";
import AlertIcon from "@material-ui/icons/";
import SearchBar from "./SearchBar"; 
import AddTool from "./AddTool";
import UserInfo from "./UserInfo";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  accountIcon: {
    justifyContent: "space-around"
  }
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  getMainContent = current => {
    switch (current) {
      case "home":
        return <SearchBar />;
        break;
      case "results":
        return <SearchResults tool={this.props.tool} />;
        break;
      case "details":
        return (
          <div>
            <ItemInfo tool={this.props.tool}/>
            <VideoResults tool={this.props.tool}/>
          </div>
        );
        break;
      case "profile":
        return <UserInfo />;
        break;
      case "toolentry":
        return <AddTool />;
        break;
      case "toolbox":
        return <ToolboxContainer />;
        break;
      case "about":
        return <WebsiteInfo />;
        break;
      case "search":
        return <SearchBar />;
        break;
    }
  };

  selectIcon = option => {
    switch (option) {
      case "Profile":
        return (
          <Link to="/profile">
            <ListItem button key={option}>
              <ListItemIcon>
                <AccountIcon />
              </ListItemIcon>
              <ListItemText primary={option} />
            </ListItem>
          </Link>
        );
        break;
      case "Toolbox":
        return (
          <Link to="/toolbox">
            <ListItem button key={option}>
              <ListItemIcon>
                <ToolboxIcon />
              </ListItemIcon>
              <ListItemText primary={option} />
            </ListItem>
          </Link>
        );
        break;
      case "Add A Tool":
        return (
          <Link to="/toolentry">
            <ListItem button key={option}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary={option} />
            </ListItem>
          </Link>
        );
        break;
    }
  };

  render() {
    const { classes, theme } = this.props;
    const { auth, anchorEl } = this.state;
    const openSide = this.state.open;
    const openMenu = Boolean(anchorEl);
    // const links = [
    //   <Link to="/contact">
    //     <ListItem button key={option}>
    //       <ListItemIcon>
    //         <ContactIcon />
    //       </ListItemIcon>
    //       <ListItemText primary={option} />
    //     </ListItem>
    //   </Link>,
    //   <Link to="/about">
    //     <ListItem button key={option}>
    //       <ListItemIcon>
    //         <AboutIcon />
    //       </ListItemIcon>
    //       <ListItemText primary={option} />
    //     </ListItem>
    //   </Link>
    // ];

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: openSide
          })}
        >
          <Toolbar disableGutters={!openSide} className={classes.toolBar}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                openSide && classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/home">
            <Typography variant="title" color="inherit" noWrap>
              Re-Tool
            </Typography>
            </Link>
            <div>
              <IconButton
                color="inherit"
                aria-owns={openSide ? "menu-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
                className={classes.accountIcon}
              >
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={openMenu}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={openSide}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["Profile", "Toolbox", "Add A Tool"].map((text, index) =>
              this.selectIcon(text)
            )}
          </List>
          <Divider />
          <List>
            <Link to="/contact">
              <ListItem button key="contact">
                <ListItemIcon>
                  <ContactIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>
            <Link to="/about">
              <ListItem button key="about">
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: openSide
          })}
        >
          <div className={classes.drawerHeader} />

          {this.getMainContent(this.props.current)}
        </main>
        
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
