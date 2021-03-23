import React, { useState } from 'react';

import {
    DropdownContainer,
    DropdownTitle,
    DropdownMenu,
    DropdownItem
} from './CustomDropdown.style'


interface CustomDropdownProps {
    toggler: () => React.ReactNode,
    children: JSX.Element | JSX.Element[]
}


export const CustomDropdown = ({toggler, children}: CustomDropdownProps) => {
    const [open, setOpen] = useState(false);

    return (
        <DropdownContainer>
            <DropdownTitle 
                onClick={() => setOpen(!open)}
            >
                {toggler()}
            </DropdownTitle>

            {open &&
                <DropdownMenu>
                    {children}
                </DropdownMenu>
            }
        </DropdownContainer>
    )
};

CustomDropdown.Item = DropdownItem;