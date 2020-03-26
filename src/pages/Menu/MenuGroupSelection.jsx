import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {rgba, darken} from 'polished';


const StyledContainer = styled.div`

    width: 100%;
    padding: 10rem 3rem;
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
    
    @media (max-width:1100px) {

        width: 90%;

    }

    @media (max-width:800px) {

        width: 100%;

    }
 
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

    font-family: 'Lilita One', Verdana, Geneva, Tahoma, sans-serif;
    letter-spacing: 2px;
`;

const StyledSeparator = styled.div`
    width: 30rem;
    height: 0.3rem;
    background-color: black;
`;

const StyledListItem = styled.li`

    font-family: 'Rubik', Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2.2rem;
    font-weight: 500;
    width: 20%;
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

    @media (max-width:1100px) {

        padding: 15px 20px;
        font-size: 1.8rem;

    }

    @media (max-width:800px) {

        padding: 15px 15px;
        font-size: 1.6rem;

    }

`;




function MenuGroupSelection(props) {
 
    const { groups, handleSelected } = props;

    let orderedGroups = [...groups];
    
    orderedGroups = orderedGroups.sort((a, b) => {

        if (a.name === b.name) return 0;

        if (a.name==='BEVERAGES') return 1;

        if (b.name ==='BEVERAGES') return -1;        
        
        if (a.name < b.name) return -1;        

        if (a.name > b.name) return 1

    });
 
    const [ selectedId, setSelectedId ] = useState(orderedGroups[0].id);
    const [ selectedName, setSelectedName] = useState(orderedGroups[0].name);

    useEffect(() => {
        
        handleClick(selectedId, selectedName);
        
    }, []);


    const handleClick = (groupId, groupName) => {

        setSelectedId(groupId);

        setSelectedName(groupName);

        handleSelected(groupId);

    };

    
    const groupList = orderedGroups.map(groupItem => {

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
