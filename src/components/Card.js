import React from 'react';
import PropTypes from 'prop-types';

import { SubHeading, Copy } from './Typography';
import { ProgressBar } from './ProgressBar';
import { Button } from './Button';

import './card.css';

export const Card = ({ title, amount, status, light, progress, action }) => (
  <div className={`brand-card card-${light ? 'light' : 'dark'}`}>
    <Copy color={`${!light ? 'light' : 'dark'}`} child={title} />
    <div>
      <SubHeading
        color={`${!light ? 'light' : 'dark'}`}
        child={amount}
        style={{
          fontWeight: 'bold',
          fontSize: '35px',
        }}
      />
      <Copy color={`${!light ? 'light' : 'dark'}`} child={status} />
      {progress ? (
        <>
          <ProgressBar value={progress.value} />
          <Copy
            color={`${!light ? 'light' : 'dark'}`}
            child={progress.label}
            style={{
              marginTop: '8px',
            }}
          />
        </>
      ) : (
        ''
      )}
      {action ? (
        <Button
          buttonHierarchy="primary"
          child={action.child}
          onClick={action.onPress}
          style={{
            width: '100%',
            fontSize: '11px',
            height: 'inherit',
            padding: '11px 0',
            marginTop: '8px',
          }}
        />
      ) : (
        ''
      )}
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  status: PropTypes.string,
  light: PropTypes.bool,
  progress: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  }),
  action: PropTypes.shape({
    child: PropTypes.string,
    onPress: PropTypes.func,
  }),
};
Card.defaultProps = {
  title: 'Provide a title',
  amount: 0,
  status: 'Provide a status',
  light: false,
  propgress: null,
  action: null,
};
