
< ! -  El  núcleo  Firebase  JS  SDK  es  siempre  necesaria  y  debe  ser  aparece  primero  - >
< script  src = "https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js" > < / script >

< ! -  TODO : Add  SDK  para  firebase  productos  que  usted  desee  para  su uso
     https: //firebase.google.com/docs/web/setup#available-libraries ->
< script  src = "https://www.gstatic.com/firebasejs/8.7.0/firebase-analytics.js" > < / script >

< guión >
  // La configuración de Firebase de su aplicación web
  // Para Firebase JS SDK v7.20.0 y versiones posteriores, MeasureId es opcional
  var  firebaseConfig  =  {
    apiKey: "AIzaSyAP0U5a82XzdvJf9sCV9b8xhSZZtPOx9bM",
    authDomain: "chat41casp.firebaseapp.com",
    projectId: "chat41casp",
    storageBucket: "chat41casp.appspot.com",
    messagingSenderId: "346756189972",
    appId: "1:346756189972:web:b0a8c8d78c552d99b57c01"
  } ;
  // Inicializar Firebase
  base de fuego . initializeApp ( firebaseConfig ) ;
  base de fuego . analítica ( ) ;
< / script >
