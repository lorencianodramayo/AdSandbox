import { FcGoogle } from "react-icons/fc";

import { 
    Pane,
    Text,
    Heading
} from 'evergreen-ui';

const AdSettings = () =>{
    return(
    <Pane
        color="#cccccc"
    >
        <Pane
            borderBottom="1px solid #2b2b2b"
            padding="9px"
            background= "#242424e8"
            fontSize={14}
        >
            Ad Settings
        </Pane>
        <Pane padding="0.7em">
            <Heading size={500} marginTop={0} color="muted">Configuration of your Ad</Heading>

            <Text color="muted" marginTop={20}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Text>
        
            <Heading 
                size={400}
                marginTop={10} 
                display="flex" 
                alignItems="center"
                color="#cccccc"
            > 
                <FcGoogle style={{marginRight:"10px"}}/> Enabler
            </Heading>
        </Pane>
    </Pane>
    )
}

export default AdSettings;