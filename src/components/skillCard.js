import React from 'react'

import { makeStyles, Avatar } from '@material-ui/core';
import { TikIcon } from '../icons'

function SkillCard({ item }) {
    const classes = useStyles();
    return (
        <div className={classes.containerBox}>
            <Avatar className={classes.avatar}> {item.icon}</Avatar>
            <p className={classes.paragraph}>
                <h3 className={classes.skillTitle}>{item.title}</h3>
                {item.skill.map(skill => { return <p> <TikIcon className={classes.tikIcon} />{skill} </p> })}
            </p>
        </div>
    )
}

const useStyles = makeStyles({
    containerBox: {
        borderRadius:20,
        height: 350,
        width: 300,
        minWidth: 300,
        backgroundColor: 'white',
        boxShadow: "1px 1px 2px 2px #DBDBDB",
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 50

    },
    avatar: {
        top: -40,
        left: 110,
        width: 80,
        height: 80,
        backgroundColor: '#252525'
    },
    skillTitle: {
        justifyContent: 'center',
        display: 'flex',
        color: '#58677C',
    },
    tikIcon: {
        width: 15,
        height: 15,
        color: '#252525',
        paddingRight: 20,
        paddingLeft: 20
    },
    chip: {
        marginLeft: 10,
        marginBottom: 10
    },
    paragraph: {
        fontSize: 18,
        color: '#58677C',
        marginTop: -40
    },

});
export default SkillCard;