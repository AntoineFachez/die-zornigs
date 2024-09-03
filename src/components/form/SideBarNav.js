import React, { useContext } from 'react';
import ButtonItem from '../button/Button';
import PTBalanceContext from '../../context/PTBalanceContext';

export default function SideBarNav({ props, inquirySteps }) {
  const { inquiry, setInquiry, inquiryStepIndex, setInquiryStepIndex } =
    useContext(PTBalanceContext);
  // console.log(inquiryStepIndex);

  return (
    <ul
      style={{
        // listStyleType: 'none',
        width: 'fit-content',
        height: props.deviceType === 'desktop' ? '70%' : 'fit-content',
        display: 'flex',
        flexFlow: props.deviceType === 'desktop' ? 'column nowrap' : 'row wrap',
        justifyContent:
          props.deviceType === 'desktop' ? 'space-around' : 'flex-start',
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
