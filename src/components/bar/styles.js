import styled, { css } from 'styled-components';

export const Container = styled.div`
  /* margin: 0px auto; */
  /* max-width: 500px; */
  /* height: 500px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 30vh;
  width: 92vw;
  margin: 1rem auto;
  /* font-size: 1.1rem; */
  /* font-weight: bold; */
  /* background: #32383e; */
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px,
    rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px,
    rgb(255, 85, 85) 0px 0px 0px 15px;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const BarChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  /* gap: 1rem; */
  /* row-gap: 2rem; */
  /* column-gap: 6rem; */
`;

export const Chart = css`
  margin-top: 10px;
  width: 4rem;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 420px) {
    width: 2.4rem;
  }
`;

export const Number = styled.span`
  font-size: 1.5rem;
  text-align: center;
  /* width: 1rem; */
  color: ${(props) => props.color};
`;

export const MakeBar = styled.div`
  height: ${(props) => props.height}%;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.colors[0]},
    ${(props) => props.colors[1]}
  );
  ${Chart};
`;

export const BlackLine = styled.div`
  width: 100%;
  height: 5px;
  background-color: grey;
`;

export const Bar = styled.div`
  height: ${(props) => props.height}%;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.colors[0]},
    ${(props) => props.colors[1]}
  );
  ${Chart};

  &:hover {
    cursor: pointer;
  }
`;