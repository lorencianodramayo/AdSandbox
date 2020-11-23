import { 
    Pane,
    TextInput,
    TagInput,
    Button
} from 'evergreen-ui';

const ApInfo = () =>{
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
            Ad Info
        </Pane>
        <Pane padding={10}>
            <Pane display="flex">
                <TextInput height={24} width="100%" placeholder="Width" appearance="minimal" marginRight={3} borderRadius={0} textAlign="center" className="oFffV"/>
                <TextInput height={24} width="100%" placeholder="Height" appearance="minimal" marginLeft={3} borderRadius={0} textAlign="center" className="oFffV"/>
            </Pane>
            <Pane marginTop={5}>
                <TagInput
                    appearance="minimal"
                    className="taginput"
                    inputProps={{ placeholder: 'Add dynamic element' }}
                    width="100%"
                    tagSubmitKey="enter"
                    values={["ctaText", "ctaText2"]}
                />
            </Pane>
            <Pane display="flex"  marginTop={5}>
                <Button height={24} appearance="minimal" intent="danger" paddingLeft="3em" paddingRight="3em" marginRight={3}>Cancel</Button>
                <Button height={24} appearance="minimal" intent="success" paddingLeft="3.6em" paddingRight="3.6em" className="bg-btn-1">Save</Button>
            </Pane>
        </Pane>
    </Pane>
    )
}

export default ApInfo;