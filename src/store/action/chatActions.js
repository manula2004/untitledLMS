export const sendMsg = (message) => {
    return (dispatch, getState, {getFirebase,getFirestore})=> {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const auth = getState().firebase.auth;
        // const authorInfo = {uid:auth.uid,timeJoined:new Date}
        firestore.collection('chat').add({
            ...message,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorUID: auth.uid,
            timeSent: new Date(),
        }).then(()=>{
            dispatch({type: 'CREATE_MESSAGE',message});
        }).catch((err) => {
            dispatch({type: 'CREATE_MESSAGE_ERROR',err});
        });
        
    }
};


