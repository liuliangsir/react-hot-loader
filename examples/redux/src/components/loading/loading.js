import React from 'react';

import './loading.css';

export default function Loading(props) {
  if (props.error) {
    return <div>Error! Component failed to load</div>;
  }

  if (!props.isLoading) {
    return null;
  }

  if (props.timedOut) {
    return <div>Loader timed out!</div>;
  }

  if (props.pastDelay) {
    return <div>Loading...</div>;
  }

  return null;
}
