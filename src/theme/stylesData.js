import { blue, green, grey, yellow } from '@mui/material/colors';

export const appBodyStyles = {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
};
export const headerStyles = {
  // zIndex: 100,
  // position: 'absolute',
  // top: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
export const footerStyles = {
  zIndex: 100,
  // position: 'absolute',
  // bottom: 0,
  width: '100%',
  height: '5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#333433cc',

  // backgroundColor: 'yellow',
  '&:hover': {
    backgroundColor: '#333433',
  },
};
export const titleStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Julius Sans One',
  color: 'white',
};
export const subTitleStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  fontFamily: 'Julius Sans One',
  color: 'white',
};

export const flexBoxStyles = {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
};
export const iconButtonStyles = {
  width: '3rem',
  height: '3rem',
  // color: '#ccc',
  // color: 'white',
  // color: 'primary',
  color: grey[500],
  '&:hover': {
    color: 'white',
  },
};
export const textButtonStyles = {
  width: 'fit-content',
  // height: '3rem',
  // color: '#ccc',
  // color: 'white',
  // color: 'primary',
  color: grey[100],
  fontFamily: 'Reddit Sans',
  fontWeight: '300',
  backgroundColor: '#33343340',
  '&:hover': {
    color: grey[800],
    backgroundColor: 'white',
    // color: 'white',
  },
};
export const sectionsContainerStyles = {
  zIndex: 10,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  gap: '1rem',
  overflow: 'scroll',
  // margin: '0 2rem',
  // padding: '2rem',
  // backgroundColor: 'white',
};
export const sectionStyles = {
  sectionStyles: {
    position: 'relative',
    // width: 'fit-content',
    // width: '100%',
    // minWidth: '20ch',
    // maxWidth: '25ch',
    height: 'fit-content',
    minHeight: '12ch',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    // alignItems: 'flex-start',
    fontFamily: 'Julius Sans One',
    backgroundColor: '#33343360',
    borderRadius: '5px',
    padding: '2rem',
    boxShadow: '-2px -2px 25px 5px #33343380',
    border: 'solid 1px #555',
  },
  sectiontitleStyles: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: 'Julius Sans One',
    fontSize: '1.2rem',
  },

  liStyles: {
    padding: 0,
    margin: 0,
    fontFamily: 'Reddit Sans',
  },
  textBodyStyles: {
    width: '100%',
    maxWidth: '40ch',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 0,
    margin: 0,
    fontFamily: 'Reddit Sans',
  },
};
export const ulStyles = {
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  // flexFlow: 'column nowrap',
  // justifyContent: 'flex-start',
  justifyContent: 'center',
  alignItems: 'center',
  // alignItems: 'flex-start',
  padding: 0,
  margin: 0,
  gap: '1rem',
  // backgroundColor: 'white',
};
export const textFieldStyles = {
  width: '100%',
  backgroundColor: 'white',
  color: 'white',
  borderRadius: '5px',
  fontFamily: 'Reddit Sans',
  '& .MuiInputBase-input': {
    borderRadius: '5px',
    backgroundColor: '#33343340',
    color: 'white',
    fontFamily: 'Reddit Sans',
  },
  '& .MuiFormLabel-root': {
    fontFamily: 'Reddit Sans',
    color: 'white',
  },
};
