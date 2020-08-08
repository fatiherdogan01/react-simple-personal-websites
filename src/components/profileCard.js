import React from 'react'

import { makeStyles, Avatar } from '@material-ui/core';
import { GithubIcon, LinkedinIcon, EmailIcon } from '../icons'
function ProfileCard({ profileImage, name, title, linkedin, github, email }) {

  const props = { width: 200 };
  const classes = useStyles(props);
  return (
    <div className={classes.container} >
      <div className={classes.avatarProfile} >
        <Avatar style={{ width: props.width, height: props.width, border: '4px solid white', }}>
          <img width={props.width} height={props.width} alt='profile' src={profileImage} />
        </Avatar>
      </div>
      <div>
        <div className={classes.contact}>
          <h1 className={classes.name} >{name}</h1>
          <h3>{title}</h3>
          <p> <a className={classes.link} href={linkedin[1]} rel="noopener noreferrer" target="_blank">
            <Avatar className={classes.avatar}>  <LinkedinIcon /></Avatar><span>{linkedin[0]}</span> </a></p>

          <p> <a className={classes.link} href={github[1]} rel="noopener noreferrer" target="_blank">
            <Avatar className={classes.avatar}> <GithubIcon /></Avatar><span>{github[0]}</span></a></p>

          <p><a className={classes.link} href={email[1]} rel="noopener noreferrer" target="_blank">
            <Avatar className={classes.avatar}> <EmailIcon /></Avatar><span>{email[0]}</span></a></p>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#252525',
    height: 480,
    color: 'white',
    display: 'flex',
    [theme.breakpoints.down(840)]: {
      display: 'grid'
    }
  },
  name: {
    fontSize: 32,
    [theme.breakpoints.down(840)]: {
      fontSize: 24,
    }
  },
  link: {
    color: 'white',
    fontWeight: '500',
    fontSize: 22,
    opacity: 0.6,
    '&:hover': {
      opacity: 1
    }
  },
  avatar: {
    top: 5,
    display: 'inline-flex',
    width: 35,
    height: 35,
    backgroundColor: 'grey'
  },
  avatarProfile: {
    flex: 1,
    placeSelf: 'flex-end',
    marginLeft: 50,
    marginBottom: props => props.width / 2 * -1,
    [theme.breakpoints.down(840)]: {
      placeSelf: 'auto',
      marginTop: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  },

  contact: {
    position: 'absolute',
    top: '30%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down(840)]: {
      textAlign: 'center',
      position: 'relative',
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      '& span': {
        display: 'none'
      },
      '& p': {
        display: 'inline-block',
        padding: 5,
      },
    }
  },


}));
export default ProfileCard;