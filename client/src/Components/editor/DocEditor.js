import React from "react";
import { Resizable } from "re-resizable";
import { BsHash, BsCode, BsBraces } from "react-icons/bs";
import Editor from "@monaco-editor/react";

import { 
    Pane,
    Tab,
    CrossIcon
} from 'evergreen-ui';

const DocEditor = () => {
    return(
        <Pane
            position="absolute"
            height="95.3%"
            width="96.2%"
            backgroundColor="#f0f0f0"
            display="flex"
            overflow="hidden"
        >
            <Resizable 
                defaultSize={{
                    width:"50%"
                }}
                maxWidth="1616px"
                handleWrapperClass="resizer-vertical"
                enable = {{
                    right: true
                }}
                style={{
                    borderRight:"1px solid #f0f0f0"
                }}
            >
                <Pane
                    backgroundColor="#efefef"
                    height="100%"
                    position="relative"
                >
                    Hello
                </Pane>
            </Resizable>

            <Pane
                backgroundColor="#FFF"
                height="100%"
                width="100%"
                position="relative"
            >
                <Pane display="flex" id="nav" background="tint2" position="relative">
                    <Tab 
                        className="tabs" 
                        borderRadius={0}
                        borderBottom="#fff"
                        padding={15}
                        margin={0}
                        borderRight="1px solid #333333"
                        color="#c1c1c1 !important"
                    >
                        <BsHash size={13} style={{marginRight:"0.5em", color: "#00783e"}}/> style.css <CrossIcon size={10} marginLeft={5}/>
                    </Tab>
                    <Tab 
                        className="tabs" 
                        borderRadius={0}
                        borderBottom="#fff"
                        padding={15}
                        margin={0}
                        borderRight="1px solid #333333" 
                        color="#c1c1c1 !important"
                    >
                        <BsCode size={13} style={{marginRight:"0.5em", color: "#95591e"}}/> index.html <CrossIcon size={10} marginLeft={5}/>
                    </Tab>
                    <Tab 
                        className="tabs"
                        isSelected = {false}
                        borderRadius={0}
                        borderBottom="#fff"
                        padding={15}
                        margin={0}
                        borderRight="1px solid #333333"
                        color="#c1c1c1 !important"
                    >
                        <BsBraces size={13} style={{marginRight:"0.5em", color: "#bf0e08"}}/> script.js <CrossIcon size={10} marginLeft={5}/>
                    </Tab>
                </Pane>
                <Pane 
                    position="relative"
                    height="calc(100% - 30px)"
                    overflow="hidden"
                >
                    <Editor
                        theme="dark"
                        language="javascript"
                        value="/* code here */"
                        editorDidMount={console.clear()}
                        loading={"Loading script.js..."}
                        style={{top:"57px"}}
                        options={{
                            minimap: {
                                enabled: false,
                            }
                        }}
                    />
                </Pane>
            </Pane>
        </Pane>

        
    )
}

export default DocEditor;