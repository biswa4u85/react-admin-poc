import React, { useState } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import AppScrollbar from '../AppScrollbar';
import './index.style.less';
import AppCard from '../AppCard';

const ComponentCardWithoutAnim = ({
  title,
  description,
  link,
  className,
  maxHeight,
  component: Component,
}) => {
  return (
    <AppCard
      className={clsx('comp-card', className)}
      title={
        <>
          <span>{title}</span>
          <span className='comp-card-title-description text-truncate'>
            {description}
            {link}
          </span>
        </>
      }
    >
      <AppScrollbar className='comp-scrollbar' style={{ maxHeight: maxHeight }}>
        <div className='component-root'>
          <Component />
        </div>
      </AppScrollbar>
    </AppCard>
  );
};

export default ComponentCardWithoutAnim;

ComponentCardWithoutAnim.defaultProps = {
  description: '',
  link: '',
  maxHeight: 500,
};

ComponentCardWithoutAnim.propTypes = {
  component: PropTypes.any.isRequired,
  source: PropTypes.node,
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  link: PropTypes.node,
  maxHeight: PropTypes.number,
  className: PropTypes.string,
  size: PropTypes.number,
};
