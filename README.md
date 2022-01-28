# Metronome
A full stack metronome web application built with React for the frontend, Node/Express for the backend, MongoDB for the database, and several other npm packages.

## Project Status
This project is currently in development. Users can adjust the metronome's bpm with a slider, or they can save frequently used tempos and adjust the bpm with the click of a button. Users can also filter their saved tempos via search bar. User authentication and an improved UI are in progress.

## Steps to run in development mode
You will need `node` and `npm` installed on your machine. 

* Clone the repo.
  ```bash
  $ git clone https://github.com/garthcalkwood/metronome.git
  ```

* Install dependencies:
  ```
  $ npm install
  ```  
  
* Run the server:
  ```
  $ npm run dev
  ```  

* Run the front-end:
  ```
  $ cd client
  $ npm start
  ```
  
* Visit the app: <br>
  http://localhost:3000/