import React from 'react';
import {
  CloseOutline,
  RemoveOutline,
  Resize,
  AccessibilityOutline,
} from 'react-ionicons';

import '../App.global.css';

const { ipcRenderer } = window.require('electron');

export default function FormPane(props: { title: string }) {
  const { title } = props;
  return (
    <>
      <div className="flex flex-row items-center p-2 formPane">
        <AccessibilityOutline color="#00000" height="25px" width="25px" />
        <h3 className="flex-1 ml-3">{title}</h3>
        <div className="flex flex-row items-end space-x-2 formIconsPane">
          <button
            type="button"
            className="formPaneButton"
            onClick={() => {
              ipcRenderer.send('form-action', 'minimize');
            }}
          >
            <RemoveOutline color="#00000" height="25px" width="25px" />
          </button>
          <button type="button" className="formPaneButton">
            <Resize
              color="#00000"
              height="25px"
              width="25px"
              cssClasses="formPaneButton"
              onClick={() => {
                ipcRenderer.send('form-action', 'maximize');
              }}
            />
          </button>
          <button type="button" className="formPaneButton">
            <CloseOutline
              color="#00000"
              height="25px"
              width="25px"
              cssClasses="formPaneButton"
              onClick={() => {
                ipcRenderer.send('form-action', 'close');
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
}
