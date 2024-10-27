import {InputUser} from '../atoms/input'


export const InputLog = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}> 
            <label>Usuario</label>
            <InputUser type="text" placeholder="pedro123"/>
        </div>
    )
}