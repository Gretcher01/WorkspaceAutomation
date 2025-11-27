import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "./BaseNode";
import { MdInput } from "react-icons/md";


export const InputNode = ({ id, data }) => {
    const [currName, setCurrName] = useState(data?.inputName || id.replace("customInput-", "input_"));
    const [inputType, setInputType] = useState(data.inputType || "Text");

    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const handleTypeChange = (e) => {
        setInputType(e.target.value);
    };

    return (
        <BaseNode id={id} className="input-node">
            {/* Icon + Title + Description */}
            <div className="title-container">
                <div className="title">
                    <MdInput   className="icon" />
                    Input
                </div>
                <p className="description">
                    Pass data of different types into your workflow.
                </p>
            </div>

            {/* Name Field */}
            <div className="name-field">
                <input
                    type="text"
                    value={currName}
                    onChange={handleNameChange}
                    className="name-input"
                />
            </div>

            {/* Type Dropdown */}
            <div className="dropdown-container">
                <label className="label">Type:</label>
                <label className="dropdown-label">Dropdown</label>
            </div>
            <select
                value={inputType}
                onChange={handleTypeChange}
                className="dropdown-select"
            >
                <option value="Text">Text</option>
                <option value="File">File</option>
            </select>

            {/* Output Handle */}
            <Handle type="target" position={Position.Left} id={`${id}-input`} />
            <Handle type="source" position={Position.Right} id={`${id}-output`} />
        </BaseNode>
    );
};
