"use client";

import React, { useState } from "react";
import s from "./style.module.scss";

const qtr_yr = [
    {value:"wtr_23", text: "Winter 2023"},
    {value: "spr_23", text: "Spring 2023"},
    {value: "sum_23", text: "Summer 2023"}
]

const options = qtr_yr.map((option, index) => {
    return <option value={option.value} key={index}>{option.text}</option>
})

const PhotoGallery: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState(qtr_yr[0].value);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    }

    return (
        <div className={s.container}>
            <h1>Photo Gallery</h1>
            <select name="project_select" onChange={handleChange}>
                {options}
            </select>
        </div>
    );
}

export default PhotoGallery;