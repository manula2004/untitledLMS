export const signIn = (credentials) =>{
    return ( dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({type: 'LOGIN_ERROR', err})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type: 'SIGNOUT_SUCCESS'})
        })
    }
}

export const signUp = (newuser) => {
    return (dispatch, getState, {getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        const firestore =  getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newuser.email,
            newuser.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                 firstName: newuser.firstName,
                 lastName: newuser.lastName,
                 bio: newuser.bio,
                 initials: ((newuser.firstName).charAt(0)+(newuser.lastName).charAt(0)).toUpperCase()
                }
            )
        }).then(()=>{
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch((err)=>{
            dispatch({type: 'SIGNUP_ERROR', err})
        })
    }
}