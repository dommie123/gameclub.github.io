import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {getGuides} from '../actions/guide-actions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      marginBottom: "1em",
      width: "50%",
      position: "relative",
      left: "24%",
      backgroundColor: "rgba(82, 241, 4, 0.7)",
      border: "2px solid green",
      borderRadius: "4px",
    },
    p: {
        color: "black"
    },
    // bullet: {
    //   display: 'inline-block',
    //   margin: '0 2px',
    //   transform: 'scale(0.8)',
    // },
    title: {
      fontSize: 12,
      fontFamily: "Orbitron, Roboto, sans-serif",
    },
    h2: {
        fontFamily: "Russo One, Orbitron, Roboto, sans-serif",
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function GuideListContainer() {
    const classes = useStyles();
    const guides = useSelector(state => state.guides.guides);
    const user = useSelector(state => state.users.currentUser);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGuides());
    }, []);

    if (guides) {
        return (
            <div className="container">
                <ul>
                    {guides.data ? guides.data.map((guide) => 
                        // <div className="container-sm">
                        //     <h5>{guide.title}</h5>
                        //     <li key={guide.id}>{guide.description}</li>
                        // </div>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Guide {guide.id}
                                </Typography>
                                <Typography variant="h5" component="h2" style={{fontFamily: "Russo One, Orbitron, Roboto, sans-serif", fontWeight: "50%",}} gutterbottom>
                                    {guide.title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {guide.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ) : <p>No guides can be found!</p>}
                </ul>
                {(user) ? <Link to="/guides/add-guide">Add a guide</Link> : <></>}
            </div>
        )
    } else {
        return (
            <div className="container">
                <p>No guides can be found!</p>
                {(user) ? <Link to="/guides/add-guide">Add a guide</Link> : <></>}
            </div>
        )
    }
  
}