import styled from 'styled-components';

export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: ${ props => props.actived ? '#EE6B26' : '#20295F' };
    border-radius: 5px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;

    img {
        width: 25px;
        height: 25px;
    }

    span {
        color: #FFF;
        font-wight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover {
        background: #EE6B26;
    }
    
`