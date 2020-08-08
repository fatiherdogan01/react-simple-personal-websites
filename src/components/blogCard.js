import React from 'react'

import { makeStyles } from '@material-ui/core';
import { CalendarIcon } from '../icons'

function BlogCard({ title, url, description, date }) {
    const classes = useStyles();
    return (
        <a className={classes.blogContainer} href={url} rel="noopener noreferrer" target="_blank">
            <h3 className={classes.blogTitle}>{title}</h3>
            <p className={classes.blogDesc}>{description === '' ? "Medium'da" : String(description).split('<p>')[1].split('. ')[0] + '.'}</p>
            <p className={classes.blogDate}>{date && <CalendarIcon className={classes.calendarIcon} />}{date === '' ? null : '' + (String(date).split(' ')[0])}</p>
        </a>
    )
}

const useStyles = makeStyles({

    blogContainer: {
        flex: '0 0 auto',
        minHeight: 250,
        maxHeight: 250,
        minWidth: 300,
        maxWidth: 300,
        margin: 30,
        borderRadius: 20,
        boxShadow: "1px 1px 2px 2px #DBDBDB",
        transition: 'transform 420ms',
        transform: 'scale(1)',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: "0 0 32px  rgba(0,0,0,.1)",
        }
    },
    blogTitle: {
        flex: 2,
        display: 'flex',
        fontSize: 20,
        letterSpacing: 1,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        color: '#58677C',
    },
    blogDesc: {
        flex: 5,
        display: 'flex',
        fontSize: 16,
        letterSpacing: 1,
        paddingRight: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        color: '#58677C',
    },
    blogDate: {
        position: 'fixed',
        bottom:0,
        right:10,
        color: '#58677C',
    },
    calendarIcon: {
        width: 18,
        height: 19,
        verticalAlign: '-17%',
        marginRight: 10,
        marginLeft: 10
    },

});
export default BlogCard;