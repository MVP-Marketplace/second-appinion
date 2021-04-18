// import React from 'react'
// import FirstOnboard from '../components/FirstOnboard';

// const UserOnboard = () => {
//     const state={
//         step:1
//     }

//     //Next Step
//     const nextStep= ()=> {
//         const { step }= this.state;
//         this.setState ({
//             step:step + 1
//         });
//     }
//     //Previous Step
//     const prevStep= ()=> {
//         const { step }= this.state;
//         this.setState ({
//             step:step - 1
//         });
//     }

//     //Handle Change
//     const handleChange = input => e =>{
//         this.setState({[input]: e.target.value})
//     }
//     const {step} = this.state;
//     const values = { step }

//     switch(step){
//         case 1:
//             return(
//                 <FirstOnboard
//                     nextStep={this.nextStep}
//                     handleChange={this.handleChange}
//                     values={values}
//                 />
//             )
//         case 2:
//             return(
//                 <h1>SecondOnboard</h1>
//             )
//         case 3:
//              return(
//                 <h1>ThirdOnboard</h1>
//             )
//         case 4:
//              return(
//                 <h1>FourthOnboard</h1>
//             )
//     }
// }

// export default UserOnboard
