import SignInSide from "components/SignIn/SignIn.jsx";


export default function LoginPage() {

    

    return (
        <div>
            <SignInSide />
        </div>
    );
}



// import { useState, useId } from "react";
// import { useDispatch } from "react-redux";

// import authOperations from "redux/auth/authOperations.js";


// export default function LoginPage() {

//     const id = useId();
//     const dispatch = useDispatch();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleChange = ({ target: { name, value } }) => {
//         switch (name) {
//             case 'email':
//                 return setEmail(value);
//             case 'password':
//                 return setPassword(value);
//             default:
//                 return;
//         }
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         dispatch(authOperations.logIn({email, password}))
//         setEmail('');
//         setPassword('');
//     };

//     return (
//         <div>
//             <h1>Sign in</h1>
//             <form
//                 onSubmit={handleSubmit}
//                 autoComplete="off">
//                 <label htmlFor={`${id}-email`}>Email</label>
//                 <input
//                     type="email"
//                     name="email"
//                     id={`${id}-email`}
//                     value={email}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor={`${id}-password`}>Password</label>
//                 <input
//                     type="text"
//                     name="password"
//                     id={`${id}-password`}
//                     value={password}
//                     onChange={handleChange}
//                 />
//                 <button type="submit">Sign in</button>
//             </form>
//         </div>
//     );
// }






