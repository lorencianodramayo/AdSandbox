import React, { useState } from 'react';
import { 
    FaFileMedical,
    FaDownload,
    FaUpload,
    FaFolderPlus,
    FaFolderOpen,
    FaFolder,
    FaFile,
    FaHtml5,
    FaCss3,
    FaJs,
    FaImage
} from "react-icons/fa";

import { 
    Pane,
    UnorderedList,
    ListItem,
    IconButton
} from 'evergreen-ui';

const AdFiles = () =>{
    const [fileState, setFileState] = useState(['style.css', 'script.js', 'index.html']);
    const fileOptions = (e, type) => {
        e.preventDefault();

        switch(type){
            case "file":
                if(!fileState.includes("New File")){
                    setFileState([...fileState, "New File"]);
                }else{
                    
                }
            break;

            case "folder":
                if(!fileState.includes("New Folder")){
                    setFileState([...fileState, "New Folder"]);
                }
            break;

            default:
                console.log(type)
            break;
        }
    }

    return(
    <Pane
        color="#cccccc"
    >
        <Pane
            borderBottom="1px solid #2b2b2b"
            padding="9px"
            background= "#242424e8"
            fontSize={14}
            display="flex"
        >
            <Pane width="100%">Files</Pane>
            <Pane width="100%" display="flex" justifyContent="flex-end" alignItems="center">
                <IconButton appearance="minimal" icon={FaDownload} marginX={2} height={15} color="#cccccc !important" onClick={(e)=>fileOptions(e, "download")}></IconButton> 
                <IconButton appearance="minimal" icon={FaUpload} marginX={2} height={15} color="#cccccc !important" onClick={(e)=>fileOptions(e, "upload")}></IconButton> 
                <IconButton appearance="minimal" icon={FaFileMedical} marginX={2} height={15} color="#cccccc !important" onClick={(e)=>fileOptions(e, "file")}></IconButton>
                <IconButton appearance="minimal" icon={FaFolderPlus} marginX={2} height={15} iconSize={14} color="#cccccc !important" onClick={(e)=>fileOptions(e, "folder")}></IconButton>
            </Pane>
        </Pane>
        <Pane padding="0.7em">
        <UnorderedList>
            {
                fileState.sort().map((files, index) => {
                    let fileList = {
                        color: null,
                        icon: null,
                        contentEditable: false,
                        suppressContentEditableWarning: false
                    };

                    if(/folder/.test(files.toLowerCase())){fileList.icon = <FaFolder />; fileList.color="#afafaf"; fileList.contentEditable=true; fileList.suppressContentEditableWarning=true;}
                    if(/css|scss|less/.test(files.toLowerCase())){fileList.icon = <FaCss3 />; fileList.color="#1080b7"; }
                    if(/js|jsx|json/.test(files.toLowerCase())){fileList.icon = <FaJs />; fileList.color="#fff906";}
                    if(/html|xhtml/.test(files.toLowerCase())){fileList.icon = <FaHtml5 />; fileList.color="#fb840f";}
                    if(!(/css|scss|less|js|jsx|json|html|xhtml|folder/.test(files.toLowerCase()))){fileList.icon = <FaFile />; fileList.color="#afafaf"; fileList.contentEditable=true; fileList.suppressContentEditableWarning=true;}


                    return(
                        <ListItem icon={fileList.icon} iconColor={fileList.color} margin={0} color="#afafaf" key={index}>
                            <div contentEditable={fileList.contentEditable} suppressContentEditableWarning={fileList.suppressContentEditableWarning}> {files} </div>
                        </ListItem>
                    );
                })
            }
            {/* <ListItem icon={FaFolderOpen} iconColor="#75beff" margin={0} color="#afafaf">
                Assets
                <UnorderedList>
                <ListItem icon={FaImage} iconColor="none" margin={0} color="#afafaf">
                    background.jpg
                </ListItem>
                <ListItem icon={FaImage} iconColor="none" margin={0} color="#afafaf">
                    model.png
                </ListItem>
                <ListItem icon={FaImage} iconColor="none" margin={0} color="#afafaf">
                    rounder.png
                </ListItem>
                <ListItem icon={FaImage} iconColor="none" margin={0} color="#afafaf">
                    curve.png
                </ListItem>
                </UnorderedList>
            </ListItem> */}
        </UnorderedList>
        </Pane>
    </Pane>
    )
}

export default AdFiles;