import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from './assets/loading.json'; // path to your lottie file

const Loading = () => {
  return (
    <div style={styles.container}>
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
};

export default Loading;
