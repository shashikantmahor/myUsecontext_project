import React from "react";
import InputBuilder from "./InputBuilder";
import SelectBuilder from "./SelectBuilder";
import MDatePicker from "./DatePicker";

const TagFieldBuilder = (attributes) => {
    let tag ;
    switch(attributes.tag) {
        case "input":tag = <InputBuilder {...attributes}/>;
        break;
        case "select":tag=<SelectBuilder {...attributes}/>;
        break;
        case "date":tag=<MDatePicker {...attributes}/>;

        default:tag=<InputBuilder {...attributes}/>
    }
    return tag;
    
}

export default TagFieldBuilder;