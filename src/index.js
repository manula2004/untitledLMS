import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import 'firebase/app';
import 'firebase/firestore';
import firebase from './config/FirebaseConfig' 
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';
import Loading from './components/layout/Loading'

const rrfConfig = { 
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false, 
  resetBeforeLogin: false
}

const store = createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase)
  )
    );

    

    const rffProps = {
      firebase,
      config: firebase,
      config: rrfConfig,
      dispatch: store.dispatch,
      createFirestoreInstance
  }

  function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div ><Loading /></div>;
        return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rffProps}>
            <AuthIsLoaded>
              <App />
            </AuthIsLoaded>  
        </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
