import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import Sketch from './Sketch';
import useResizeObserver from '../../../../hooks/useResizeObserver';
import { Box } from '@mui/material';
// import InFocusContext from "../../../../context/InFocusContext";

export default function Index({ image }) {
  // const { storyInFocus } = useContext(InFocusContext);
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({
    width: containerRef?.current?.offsetWidth,
    height: containerRef?.current?.offsetHeight,
  });
  // console.log("containerRef?.current", dimensions);
  const [isUserActive, setIsUserActive] = useState(false);
  const handleUserActivity = useCallback(() => {
    setIsUserActive(true);
  }, []);
  useResizeObserver(
    containerRef,
    setDimensions,
    handleUserActivity,
    setIsUserActive
  );

  const padding = -200;
  const width = dimensions?.width;
  const height = dimensions?.height;
  return (
    <>
      <Box
        ref={containerRef}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Sketch width={width} height={height} selectedImageUrl={image} />
      </Box>
    </>
  );
}
