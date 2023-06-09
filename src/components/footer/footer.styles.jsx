import styled from "styled-components";

export const Wrapper = styled.section`
    background-color: #F5F5F5;
    margin-top: 100px;
   
`;

export const FooterPadding = styled.div`
 padding: 5rem 1rem 0;
`;

export const FooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    text-align: left;
    margin-bottom: 2rem;
`;

export const FooterSub = styled.section`
    width: 255px;
    margin: 1rem;
    display: flex;
    justify-content:  flex-start;
    flex-direction: column;

    a{
        text-decoration: none;
        color: black;
        font-size: 12px;
        cursor: pointer;
        
    }

    p{
        font-size: 12px;
    }

    .socials{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

`;
export const FooterBelow = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;

    
`;


