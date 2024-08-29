import React, { useContext } from 'react';
import ButtonItem from '../button/Button';
import PTBalanceContext from '../../context/PTBalanceContext';

export default function SideBarNav({ inquirySteps }) {
  const { inquiry, setInquiry, inquiryStepIndex, setInquiryStepIndex } =
    useContext(PTBalanceContext);
  // console.log(inquiryStepIndex);

  return (
    <ul
      style={{
        // listStyleType: 'none',
        width: 'fit-content',
        height: '70%',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-around',
        // alignItems: 'center',
        padding: '1rem',
      }}
    >
      {inquirySteps.map((step, i) => (
        <ButtonItem
          props={{
            // style: {
            //   backgroundColor: inquiryStepIndex === i ? 'white' : 'grey',
            // },
            disabled: false,
            textContent: step.name,
            handleClick: () => setInquiryStepIndex(i),
            color: inquiryStepIndex === i ? 'secondary' : 'grey',
          }}
        />
      ))}
    </ul>
  );
}
