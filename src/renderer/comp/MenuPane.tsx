import React from 'react';
import { useHistory } from 'react-router-dom';
import { BookOutline, BuildOutline } from 'react-ionicons';
import '../App.global.css';

export default function MenuPane(props: { page: string }) {
  const { page } = props;
  const history = useHistory();
  return (
    <>
      <button
        type="button"
        className={`mb-2 menuButton flex-1 ${page === '/' ? 'activeLink' : ''}`}
        onClick={() => {
          history.push('/');
        }}
      >
        <BookOutline color="#fff" height="1em" width="1em" />
      </button>
      <button
        type="button"
        className={`mb-2 menuButton flex-1 ${
          page === '/settings' ? 'activeLink' : ''
        }`}
        onClick={() => {
          history.push('/settings');
        }}
      >
        <BuildOutline color="#fff" height="1em" width="1em" />
      </button>
    </>
  );
}
