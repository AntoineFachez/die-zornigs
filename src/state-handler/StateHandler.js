import { useMediaQuery } from 'react-responsive';
import useOrientation from './useOrientation'; // Assuming you have the custom hook
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function StateHandler({ render }) {
  const stateSpecificProps = {
    // ... other props based on state
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {' '}
      {/* Ensure the parent has a minimum height */}
      <div style={{ position: 'sticky', top: 0, zIndex: 1 }}>
        {' '}
        {/* Sticky header */}
        {render({ ...stateSpecificProps, isHeader: true })}
      </div>
      {/* Main content goes here */}
      <div style={{ position: 'sticky', bottom: 0, zIndex: 1 }}>
        {' '}
        {/* Sticky footer */}
        {render({ ...stateSpecificProps, isFooter: true })}
      </div>
    </div>
  );
}

// Usage
const MyComponent = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 414px) and (max-height: 844px)',
  });
  const isTablet = useMediaQuery({
    query: '(max-width: 768px)and (max-height: 1024px)',
  });
  const isLandscape = useOrientation();
  return (
    <StateHandler
      render={(stateSpecificProps) => (
        <>
          <Header
            {...stateSpecificProps}
            variant={
              stateSpecificProps.isHeader ? (isMobile ? 'h3' : 'h2') : undefined
            }
          />

          {/* ... your main content ... */}

          <Footer
            {...stateSpecificProps}
            backgroundColor={
              stateSpecificProps.isFooter && isMobile
                ? 'lightblue'
                : 'lightgreen'
            }
            fontSize={
              stateSpecificProps.isFooter && isTablet ? '1.2rem' : '1rem'
            }
            padding={
              stateSpecificProps.isFooter && isLandscape === 'landscape'
                ? '2rem'
                : '1rem'
            }

            // Add other conditional props for the Footer as needed
          />
        </>
      )}
    />
  );
};
export default MyComponent;
