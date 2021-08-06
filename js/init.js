
< ! -  El  núcleo  Firebase  JS  SDK  es  siempre  necesaria  y  debe  ser  aparece  primero  - >
< script  src = "https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js" > < / script >

< ! -  TODO : Add  SDK  para  firebase  productos  que  usted  desee  para  su uso
     https: //firebase.google.com/docs/web/setup#available-libraries ->
< script  src = "https://www.gstatic.com/firebasejs/8.7.0/firebase-analytics.js" > < / script >

< guión >
  // La configuración de Firebase de su aplicación web
  // Para Firebase JS SDK v7.20.0 y versiones posteriores, MeasureId es opcional
  var  firebaseConfig  =  {
    apiKey: "AIzaSyA-0VG6bQC8HMkNpm4zUUyvOASO2RW8cNU",
    authDomain: "basedatos-2310d.firebaseapp.com",
    projectId: "basedatos-2310d",
    storageBucket: "basedatos-2310d.appspot.com",
    messagingSenderId: "755994364389",
    appId: "1:755994364389:web:0850c20274c947b054470c"
  } ;
  // Inicializar Firebase
  base de fuego . initializeApp ( firebaseConfig ) ;
  base de fuego . analítica ( ) ;
< / script >
