import React from 'react';
import { FaAudioDescription } from "react-icons/fa";
import { 
    Pane, 
    Menu, 
    Icon,
    toaster, 
    Popover, 
    Position,
    Button
} from 'evergreen-ui';

const navigations = {
    "File": {
        "0":{
        "New": "⌘N"
        },
        "1":{
        "Save": "⌘S",
        "Save As...": "⇧⌘S"
        },
        "2":{
        "Close Editor": "",
        }
    },
    "Edit": {
        "0":{
        "Undo": "⌘Z",
        "Redo": "⇧⌘Z"
        },
        "1":{
        "Cut": "⌘X",
        "Copy": "⌘C",
        "Paste": "⌘V"
        },
        "2":{
        "Find": "⌘F",
        "Replace": "⇧⌘F"
        },
    }
}

const NavBar = () => {
    return(
        <Pane display="flex" id="nav" padding={10} background="rgb(60, 60, 60)" >
        <Icon icon={FaAudioDescription} size={16} display="flex" alignItems="center" marginRight={10}/>
        {
            Object.keys(navigations).map((name, i) => {
            return(
                <Popover
                position={Position.BOTTOM_LEFT}
                key={i}
                content={
                    <Menu>
                    {
                        Object.keys(navigations[name]).map((child, i) => {
                        return(
                            <React.Fragment key={i}>
                            <Menu.Group >
                                {
                                Object.keys(navigations[name][child]).map((options, i) => {
                                    return(
                                    <Menu.Item 
                                        key={i}
                                        onSelect={() => toaster.notify(options)} 
                                        secondaryText={navigations[name][child][options]}
                                    >
                                        {options}
                                    </Menu.Item>
                                    )
                                })
                                }
                            </Menu.Group>
                            <Menu.Divider />
                            </React.Fragment>
                        )
                        })
                    }
                    </Menu>
                }
                >
                <Button id="nav-btn" height={24} appearance="minimal" marginRight={2} intent="success">
                    {name}
                </Button>
                </Popover>
            )
            })
        }
        </Pane>
    )
}

export default NavBar;