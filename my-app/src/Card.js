import React from 'react';
// Changing class Card to function Card might be easier for us to follow the demo code
// export default function Card(props) {


//     return (
//         <div className='card'>
//                 <div className='card-front'>
//                     <img src={props.path} alt={props.path} />
//                 </div>
//                 <div className='card-back'>
//                     <p>Back of Card</p>
//                 </div>
//             </div>
//     );
// }
export default class Card extends React.Component {
    render() {

        return (

            <div className='card'>
                <div className='card-front'>
                    <img src={this.props.path} alt={this.props.path} />
                </div>
                <div className='card-back'>
                    <p>Back of Card</p>
                </div>
            </div>

        );
    }
}
