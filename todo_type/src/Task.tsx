import React, { Fragment, useState, FC } from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent } from '*.svg';

interface IProps {
    text: string
    completed: boolean
  }

  const Task: FC<IProps> = ({ text, completed }: IProps) => {
    return (
      <button>
        Click here
      </button>
    )
  }

  Task.defaultProps = {
    text: '',
    completed: false,
  }

  export default Task