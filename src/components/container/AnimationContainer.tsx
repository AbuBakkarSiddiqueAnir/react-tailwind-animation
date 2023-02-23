
import Snowfall from '../../animation/snowfall/Snowfall';
import MenuEffect from '../../animation/menu-effect/index'
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