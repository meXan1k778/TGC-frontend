import { IMockedTableData } from './types';

export const mockedTableData: IMockedTableData = {
  tableHead: ['game mode', 'Tournament date', 'prize pool', 'Team size', 'registration'],
  tableBody: [
    {
      id: 0,
      gameMode: 'on',
      tournament: {
        name: 'Skill Tournament #57',
        status: 'Open',
        date: 'December 15, 2020'
      },
      prize: '$3,000',
      teamSize: null,
      registrationInfo: {
        status: 'Register',
        timeline: 'End in 5h'
      }
    },
    {
      id: 1,
      gameMode: 'on',
      tournament: {
        name: 'Skill Tournament #57',
        status: 'Open',
        date: 'December 15, 2020'
      },
      prize: '$3,000',
      teamSize: null,
      registrationInfo: {
        status: 'Register',
        timeline: 'Ends in 2 days'
      }
    },
    {
      id: 2,
      gameMode: 'on',
      tournament: {
        name: 'Skill Tournament #57',
        status: 'Open',
        date: 'December 15, 2020'
      },
      prize: '$3,000',
      teamSize: 146,
      registrationInfo: {
        status: 'Register',
        timeline: 'Ends in 2 days'
      }
    }
  ]
}