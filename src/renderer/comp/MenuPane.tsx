import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BookOutline, BuildOutline, AirplaneOutline } from 'react-ionicons';
import '../App.global.css';

export default function MenuPane(props: { page: string }) {
  const history = useHistory();
  const { page } = props;
  return (
    <>
      <button
        type="button"
        className={`mb-2 menuButton flex-1 ${page === '/' ? 'activeLink' : ''}`}
        onClick={() => {
          history.push('/');
        }}
      >
        <BookOutline color="#fff" height="32px" width="32px" />
      </button>
      <button
        type="button"
        className={`mb-2 menuButton flex-1 ${page === '/settings' ? 'activeLink' : ''}`}
        onClick={() => {
          history.push('/settings');
        }}
      >
        <BuildOutline color="#fff" height="32px" width="32px" />
      </button>
    </>
  );
}
