import React from 'react';
import styled from 'styled-components';

const Radio = ({setVotingInfo, votingInfo}) => {
  const handleChange = (e)=>{
    setVotingInfo((prev)=>{
      return {...prev, notReverse: (e.target.value === "inc" ? true : false)}
    })
  }

  console.log(votingInfo);
  
  return (
    <StyledWrapper>
      <div className="radio-inputs">
        <label className="radio">
          <input type="radio" name="radio" value={"inc"} checked={votingInfo.notReverse} onChange={handleChange} />
          <span className="name">Increasing</span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" value={'dec'} checked={!votingInfo.notReverse} onChange={handleChange} />
          <span className="name">Decreasing</span>
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .radio-inputs {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border-radius: 20px;
    border: solid 1px rgb(66, 48, 77);
    background-color:rgb(28, 11, 28);
    box-sizing: border-box;
    box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
    padding: 5px;
    width: 300px;
    font-size: 18px;
    transition: all .3s ease;
  }

  .radio-inputs .radio {
    flex: 1 1 auto;
    text-align: center;
    transition: all .3s ease;
  }

  .radio-inputs .radio input {
    display: none;
    transition: all .3s ease;
  }

  .radio-inputs .radio .name {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    border: none;
    padding: 12px;
    color: rgb(225, 155, 242);
    transition: all .3s ease;
  }

  .radio-inputs .radio input:checked + .name {
    background-color:rgba(255, 172, 234, 0.12);
    font-weight: 600;
    text-shadow: 0 0 20px rgb(225, 155, 242);
  }`;

export default Radio;
