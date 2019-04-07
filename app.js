(function() {
    const config = {
        apiKey: "AIzaSyAya7y971pPxYE4no2UW7DtGvZvAAdSIQ4",
        authDomain: "mycscourses-438b9.firebaseapp.com",
        databaseURL: "https://mycscourses-438b9.firebaseio.com",
        projectId: "mycscourses-438b9",
        storageBucket: "mycscourses-438b9.appspot.com",
        messagingSenderId: "449997882078"
    };
    firebase.initializeApp(config);

    console.log('Javascript running');

    //Get DOM elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    
    //Add login event
    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        console.log('Email:', email);
        console.log('Password:', pass);

        //Log in
        const promise = auth.signInWithEmailAndPassword(email, pass);

        console.log('Signed in with auth');

        promise
            .catch(e => console.log(e.message));
    });

    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        console.log('Email:', email);
        console.log('Password:', pass);

        //Log in
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise
            .catch(e => console.log(e.message));
    });


    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
            //TODO: Go to list page
        } else {
            console.log('Not logged in');
        }
    })
}());