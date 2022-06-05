import SignUp from "components/SignUp/SignUp.jsx";


export default function RegisterPage() {

    return (
        <div>
            <SignUp />
        </div>
    );
}






// import { useState, useId } from "react";
// import { useDispatch } from "react-redux";
// import authOperations from "redux/auth/authOperations.js";

// export default function RegisterPage() {

//     const id = useId();
//     const dispath = useDispatch()
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleChange = ({ target: { name, value } }) => {
//         switch (name) {
//             case 'name':
//                 return setName(value);
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
//         dispath(authOperations.register({ name, email, password }));
//         setName('');
//         setEmail('');
//         setPassword('');
//     };

//     return (
//         <div>
//             <h1>Sign up</h1>
//             <form
//                 onSubmit={handleSubmit}
//                 autoComplete="off">
//                 <label htmlFor={`${id}-name`}>Name</label>
//                 <input
//                     type="text"
//                     name="name"
//                     id={`${id}-name`}
//                     value={name}
//                     onChange={handleChange}
//                 />
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
//                 <button type="submit">Sign up</button>
//             </form>
//         </div>
//     );
// }







// import { Formik, Form, input } from "formik";
// import { useId } from "react";




// export default function RegisterPage() {

//     const initialValues = {
//         name: '',
//         email: '',
//         password: '',
//     };

//     const id = useId();

    
//     return (
//         <Formik
//         initialValues={initialValues}
//         >
//             <Form autoComplete="off">
                // <label htmlFor={`${id}-name`}>Name</label>
                // <input
                //     type="text"
                //     name="name"
                //     id={`${id}-name`}
                // />
                // <label htmlFor={`${id}-email`}>Email</label>
                // <input
                //     type="email"
                //     name="email"
                //     id={`${id}-email`}
                // />
                // <label htmlFor={`${id}-password`}>Password</label>
                // <input
                //     type="text"
                //     name="password"
                //     id={`${id}-password`}
                // />
                // <button type="submit">Sign up</button>
//             </Form>
//         </Formik>
//     )
// }

//***************** */

// import { Formik, Form, input } from "formik";
// import { useId } from "react";




// export default function RegisterPage() {

//     const initialValues = {
//         name: '',
//         email: '',
//         password: '',
//     };

//     const id = useId();

    
//     return (
//         <Formik
//         initialValues={initialValues}
//         >
//             <Form autoComplete="off">
                // <label htmlFor={`${id}-name`}>Name</label>
                // <input
                //     type="text"
                //     name="name"
                //     id={`${id}-name`}
                // />
                // <label htmlFor={`${id}-email`}>Email</label>
                // <input
                //     type="email"
                //     name="email"
                //     id={`${id}-email`}
                // />
                // <label htmlFor={`${id}-password`}>Password</label>
                // <input
                //     type="text"
                //     name="password"
                //     id={`${id}-password`}
                // />
                // <button type="submit">Sign up</button>
//             </Form>
//         </Formik>
//     )
// }