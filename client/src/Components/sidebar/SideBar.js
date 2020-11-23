import ApInfo from './AdInfo';
import AdFiles from './AdFiles';
import AdSettings from './AdSettings';
import { 
    Pane,
    IconButton,
    DocumentIcon,
    CogIcon,
    SettingsIcon,
    Tooltip,
    Position,
    Popover
} from 'evergreen-ui';

function SideBar(){
    const sidebar = {
        "Ad Info": {
            "icon": SettingsIcon,
            "component": <ApInfo />
        },
        "Files": {
            "icon": DocumentIcon,
            "component": <AdFiles />
        },
        "Settings": {
            "icon": CogIcon,
            "component": <AdSettings />
        },
    }
    
    return(
        <Pane 
            position="fixed" 
            right={0} 
            padding={8} 
            borderLeft="1px solid #242424" 
            height="100vh" 
            color="#a6a6a6" 
            fontSize = "1.4rem"
            backgroundColor = "#333333"
        >
            {
                Object.keys(sidebar).map((data, i) => {
                    return(
                        <Popover
                            key={i}
                            content={
                                <Pane
                                    width={250}
                                    height="100vh"
                                    top={0}
                                    display="flex"
                                    flexDirection="column"
                                    position="relative"
                                    background="#101010e8"
                                    borderRadius={0}
                                >
                                    {sidebar[data].component}
                                </Pane>    
                            }
                            position={Position.LEFT}
                        >
                            <Tooltip position={Position.LEFT} content={data}>
                                <IconButton appearance="minimal" icon={sidebar[data].icon} iconSize={22} padding={24} />
                            </Tooltip>
                        </Popover>
                    )
                })
            }
        </Pane>
    )
}

export default SideBar;