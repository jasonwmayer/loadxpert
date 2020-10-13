import React from 'react';
import './EasyAccessIcons.scss';

import {
    Link
  } from "react-router-dom";

import {
    Grid,
    IconButton } from '@material-ui/core';
import ExtensionIcon from '@material-ui/icons/Extension';
import ShutterSpeedIcon from '@material-ui/icons/ShutterSpeed';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';

const EasyAccessIcons = () => {
  return (
    <div>
        <Grid
        className="quickAccessIconsContainer"
        >
            <Grid
            container
            spacing={1}
            >
                <Link to="/load-planner">
                    <IconButton
                    size="small"
                    className="quickAccessIcons"
                    >
                        <AccountTreeIcon />
                    </IconButton>
                </Link>
            </Grid>
            <Grid>
                <Link to="/mill-preferences">
                    <IconButton
                    size="small"
                    className="quickAccessIcons"
                    >
                        <SettingsIcon />
                    </IconButton>
                </Link>
            </Grid>
            <Grid>
                <Link to="/reports">
                    <IconButton
                        size="small"
                        className="quickAccessIcons"
                    >
                        <BarChartIcon />
                    </IconButton>
                </Link>
            </Grid>
            <Grid>
                <Link to="/scenario-builder">
                    <IconButton
                        size="small"
                        className="quickAccessIcons"
                    >
                        <ExtensionIcon />
                    </IconButton>
                </Link>
            </Grid>
            <Grid>
                <Link to="/som-tester">
                    <IconButton
                    size="small"
                    className="quickAccessIcons"
                    >
                        <ShutterSpeedIcon />
                    </IconButton>
                </Link>
            </Grid>
        </Grid>

    </div>
  );
}

export default EasyAccessIcons;






