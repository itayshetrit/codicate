import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastProvider } from "react-toast-notifications";
import { useSelector } from 'react-redux';

import Modal from 'react-bootstrap/Modal';

import NavBar from '../components/navigation/NavBar';
import NavSwitch from '../components/navigation/NavSwitch';
import load from '../assets/spinners/load.svg';


function App() {

  const beers = useSelector(state => state.beersReducer);
  let view = <><NavSwitch /></>;
  
  return (
    <div className="App animated fadeIn">
      <NavBar />
      <ToastProvider placement="bottom-center">{view}</ToastProvider>
      <Modal centered show={beers.loading} animation={true}>
        <Modal.Body style={{ textAlign: "center"}}><img alt="infinite" src={load} width="200" /></Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
