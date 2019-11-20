import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore'

const firebaseConfig = {
 
  };
  // Initialize Firebase
  

  class Firebase{
      constructor(){
        app.initializeApp(firebaseConfig);
        this.auth=app.auth();
        this.db=app.firestore();

      }
      login(email,password){
          return this.auth.signInWithEmailAndPassword(email,password);
      }
      logout(){
          return this.auth.signOut();
      }
      isInitialized(){
          return new Promise(resolve=>{
              this.auth.onAuthStateChanged(resolve)
          })
      }

      getCurrentUsername(){
          return this.auth.currentUser && this.auth.currentUser.email;

      }
  }

  export default new Firebase();