import styled from 'styled-components';

export const StyledEndpoints = styled.section`
  text-align: center;
  padding: 50px 0px;
  pre {
    font-size: 1.1rem;
    text-align: center;
    width: 100%;
    border: 2px solid ${({ theme }) => theme.secondaryAccent};
    max-width: 500px;
    height: 500px;
    margin: 0 auto;
    margin-top: 25px;
    overflow-y: scroll;
    background: #272822;
    .string { 
    color: #FD971F; 
    }
    .number { 
      color: #66D9EF; 
    }
    .boolean { 
      color: #A6E22E; 
    }
    .null { 
      color: #F92672; 
    }
    .key { 
      color: #F8F8F2; 
    }
  }
`;