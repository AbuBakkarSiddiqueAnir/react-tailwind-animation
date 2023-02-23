

import MenuEffect from '../../animation/menu-effect/index'
import './AnimationContainer.css'
type TypeName= {

};

const  AnimationContainer:React.FC<TypeName> = () => {

    return (
        <div className='animation-container'>
            {/* <Snowfall/> */}
            <MenuEffect/>


        </div>
    )
}

export default AnimationContainer