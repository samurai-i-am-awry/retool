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
import AccountIcon from "@material-ui/icons/AccountCircle";
import ToolboxIcon from "@material-ui/icons/Build";
import AddIcon from "@material-ui/icons/Add";
import HelpIcon from "@material-ui/icons/Help";
import ContactIcon from "@material-ui/icons/Message";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchResults from "./SearchResults";
import ItemInfo from "./ItemInfo";
import VideoResults from "./VideoResults";
import ToolboxContainer from "./ToolboxContainer";
import WebsiteInfo from "./WebsiteInfo";
import SearchBar from "./SearchBar";
import AddTool from "./AddTool";
import UserInfo from "./UserInfo";
import ContactForm from "./ContactForm";
import SearchIcon from "@material-ui/icons/Search";
import Home from "../pages/Home";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: "flex"
  },
  appBar: {
    backgroundColor: "#6A6AA0",
    color: "#22f4db",
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
    color: "blue",
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
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
    anchorEl: null,
    profile: {}
  };

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

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
        return <SearchBar key={current} />;
      case "results":
        return <SearchResults key={current} tool={this.props.tool} />;
      case "details":
        return (
          <div>
            <ItemInfo
              key={current + "itemInfo"}
              user={this.state.profile}
              tool={this.props.tool}
            />
            <VideoResults
              key={current + "videResults"}
              tool={this.props.tool}
            />
          </div>
        );
      case "profile":
        return <UserInfo user={this.state.profile} key={current} />;
      case "toolentry":
        return <AddTool user={this.state.profile} key={current} />;
      case "toolbox":
        return <ToolboxContainer user={this.state.profile} key={current} />;
      case "about":
        return <WebsiteInfo key={current} />;
      case "search":
        return <SearchBar key={current} />;
      case "contact":
        return <ContactForm key={current} />;
      default:
        return <Home auth={this.props.auth} {...this.props} />;
    }
  };

  selectIcon = option => {
    switch (option) {
      case "Profile":
        return (
          <Link key="profileLink" to="/profile">
            <ListItem button key={option}>
              <ListItemIcon>
                <AccountIcon />
              </ListItemIcon>
              <ListItemText primary={option} />
            </ListItem>
          </Link>
        );
      case "Toolbox":
        return (
          <Link key="toolboxLink" to="/toolbox">
            <ListItem button key={option}>
              <ListItemIcon>
                <ToolboxIcon />
              </ListItemIcon>
              <ListItemText primary={option} />
            </ListItem>
          </Link>
        );
      case "Add A Tool":
        return (
          <Link key="addLink" to="/toolentry">
            <ListItem button key={option}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary={option} />
            </ListItem>
          </Link>
        );
      case "Search":
        return (
          <Link key="searchLink" to="/search">
            <ListItem button key={option}>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary={option} />
            </ListItem>
          </Link>
        );
      default:
        return <Home auth={this.props.auth} {...this.props} />;
    }
  };

  render() {
    const { classes, theme } = this.props;
    const { anchorEl } = this.state;
    const openSide = this.state.open;
    const openMenu = Boolean(anchorEl);

    const { profile } = this.state;
    const namespace = "https://mkothari:auth0:com/";

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
              <Typography variant="title" color="inherit" align="center" noWrap>
                Re-Tool
              </Typography>
            </Link>
            <div>
              <Typography variant="title" color="inherit" noWrap>
                {"Signed in as " +
                  profile[namespace + "firstName"] +
                  " " +
                  profile[namespace + "lastName"]}
              </Typography>
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
            {["Profile", "Toolbox", "Add A Tool", "Search"].map((text, index) =>
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
            <ListItem
              button
              key="logout"
              onClick={() => this.props.auth.logout()}
            >
              <ListItemText primary="Logout" />
            </ListItem>
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
