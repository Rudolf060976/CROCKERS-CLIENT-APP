import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {rgba, darken} from 'polished';


const StyledContainer = styled.div`

    width: 100%;
    padding-top: 10rem;
    height: 30rem;

`;

const StyledList = styled.ul`

    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    margin-bottom: 5rem;


`;

const StyledTitleContainer = styled.div`

    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

`;

const StyledTitle = styled.h4`

    width: 30rem;
    text-align: center;
    color: ${props => rgba(props.theme.colorMainBlueDark,0.9)};
`;

const StyledSeparator = styled.div`
    width: 30rem;
    height: 0.3rem;
    background-color: black;
`;

const StyledListItem = styled.li`

    font-family: 'Rubik', Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2rem;
    font-weight: 500;
    width: 20rem;
    padding: 15px 25px;
    border-radius: 5px;
    text-align: center;
    
    
    background-color: ${props => props.selected ? rgba(props.theme.colorMainBlueDark,0.9) : 'transparent' };
    color: ${props => props.selected ? props.theme.colorMainBeigeDark : darken(0.1,props.theme.colorMainOrangeDark) };
    cursor: ${props => props.selected ? 'auto' : 'pointer' };


    &:hover {

        transform: ${props => props.selected ? 'scale(1)' : 'scale(1.1)'};
        color: ${props => props.theme.colorMainBeigeDark};

    }

`;




function MenuGroupSelection(props) {
 
    const { groups, handleSelected } = props;
 
    const [ selectedId, setSelectedId ] = useState(groups[0].id);
    const [ selectedName, setSelectedName] = useState(groups[0].name);

    useEffect(() => {
        
        handleClick(selectedId, selectedName);
        
    }, []);


    const handleClick = (groupId, groupName) => {

        setSelectedId(groupId);

        setSelectedName(groupName);

        handleSelected(groupId);

    };

    
    const groupList = groups.map(groupItem => {

        return (
            <StyledListItem key={groupItem.id} onClick={(e) => handleClick(groupItem.id, groupItem.name) } selected={ selectedId === groupItem.id }>{ groupItem.name }</StyledListItem>
        );
    });



    return (
        <StyledContainer>
            <StyledList >
                { groupList }
            </StyledList>
            <StyledTitleContainer>
                <StyledTitle>{ selectedName }</StyledTitle>
                <StyledSeparator />
            </StyledTitleContainer>
        </StyledContainer>
    );
}

export default MenuGroupSelection;
