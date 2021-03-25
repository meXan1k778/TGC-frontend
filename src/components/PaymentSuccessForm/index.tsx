import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';

import InputBlock from '../InputBlock';
import { Paragraph, SimpleButton } from '../../styles/mixins';
import { LoginRegisterButton } from '../../styles/login-registration-mixins';
import circledCheckIcon from '../../images/circled-check.svg';
import arrowIcon from '../../images/arrow.svg';
import { device } from '../../styles/constants';
import { IIviteTeamMate, IPaymentSuccessFormData } from './types';
import { Select, SelectArrow } from '../../styles/mixins';
import { useAuth } from '../../hooks/useAuth';
import { inviteTeammates } from '../../services/inviteTeammates';
import { getAuthToken } from '../../utils/helpers';

const PaymentSuccessFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background: rgba(29, 29, 29, 0.7);
  backdrop-filter: blur(10px);
  padding: 30px 20px 49px;
  width: 100%;
  box-sizing: border-box;

  @media ${device.tablet} {
    width: 650px;
    border-radius: 8px;
    padding: 30px 118px 49px;
  }

  & > div {
    margin-bottom: 73px;
  }

  & > div {
    &:last-of-type {
      margin-bottom: 3px;
    }
  }
  
  button {
    margin-top: 73px;
  }
`;

const SuccessMessageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SuccessMessage = styled(Paragraph)`
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 24px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const InviteTeammateBlock = styled.div`
  display: flex;
  align-items: flex-end;
`;

const InviteTeammateInputBlock = styled.div`
  flex: 1;
`;

const InviteTeammateButton = styled(SimpleButton)`
    margin-top: 0 !important;
    margin-left: 10px;
`;


const PaymentSuccessForm: React.FC = () => {
  const { register, handleSubmit, errors, setValue, getValues } = useForm();
  const { userData } = useAuth();
  const [usersToInvite, setUsersToInvite] = useState<string[]>([]);
  const location = useLocation<any>();
  const history = useHistory();


  useEffect(() => {
    if(userData) {
      setValue('platform', userData.platformType)
      setValue('platformId', userData.platformId)
    }
  }, [userData]);


  const onSubmit = async (data: IPaymentSuccessFormData) => {
    const token = getAuthToken();
    
    const params: IIviteTeamMate = {
      creationToken: location.state, 
      receivers: usersToInvite, 
      teamName: data.teamName,
      platformId: data.platformId, 
      platformType: data.platform,
      token: token
    };

    if(usersToInvite.length === 0) {
      delete params.receivers;
    }

    try {
      const res = await inviteTeammates(params);
      console.log('res.data', res.data)
      if(res.data.statusCode === 201) {
        history.push('/tournament')
      }
    } catch (err) {
      console.log(err)
    }
  }; 

  const handleAddTeammate = () => {
    const value = getValues('teammate');
    if(value.length > 3) {
      setUsersToInvite(state => [...state, value]);
      setValue('teammate', '')
    }
  };

  const handleRemoveTeammate = (emailToRemove: string) => {
    setUsersToInvite(state => state.filter(em => em !== emailToRemove))
  };

 
  return (
    <PaymentSuccessFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <SuccessMessageBlock>
        <img src={circledCheckIcon} alt='check icon' />
        <SuccessMessage>we recieved your payment</SuccessMessage>
      </SuccessMessageBlock>
      <Select>
        <SelectArrow src={arrowIcon} alt='arrow icon' />
        <InputBlock 
          name='platform' 
          placeholder='Your Platform Type' 
          register={register} 
          errors={errors} 
        />
      </Select>
      <InputBlock   
        name='platformId' 
        placeholder='Your Platform ID' 
        register={register} 
        errors={errors} 
      />

      {
        usersToInvite.length > 0 &&
        usersToInvite.map((email, i) => (
          <InviteTeammateBlock key={`user-email-${i}`}>
            <InviteTeammateInputBlock>
              <InputBlock 
                name={`addedTeammate`} 
                type='text' 
                register={register} 
                errors={errors} 
                value={email}
                readOnly
              />
            </InviteTeammateInputBlock>
            <InviteTeammateButton 
              type={'button'}
              onClick={() => handleRemoveTeammate(email)}
            >
              Remove
            </InviteTeammateButton>
          </InviteTeammateBlock>
        ))
      }


      {
        usersToInvite.length < 3 &&
        <InviteTeammateBlock>
          <InviteTeammateInputBlock>
            <InputBlock 
              name='teammate' 
              placeholder={`Email of Player #${usersToInvite.length + 2}`} 
              type='email' 
              register={register} 
              errors={errors} 
            />
          </InviteTeammateInputBlock>
          <InviteTeammateButton 
            type={'button'}
            onClick={handleAddTeammate}
          >
            Add
          </InviteTeammateButton>
        </InviteTeammateBlock>
      }
      
      <InputBlock 
        name='teamName' 
        placeholder='Your Team Name' 
        register={register} 
        errors={errors} 
      />
      <LoginRegisterButton onClick={() => handleSubmit(onSubmit)}>Submit</LoginRegisterButton>
    </PaymentSuccessFormWrapper>
  );
}

export default PaymentSuccessForm;
