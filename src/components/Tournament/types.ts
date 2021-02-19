export interface IMockedTableData {
  tableHead: string[];
  tableBody: ITableRow[];
}

export interface ITableRow {
  id: number;
  gameMode: string;
  tournament: {
    name: string;
    status: string;
    date: string;
  },
  prize: string;
  teamSize: number | null;
  registrationInfo: {
    status: string;
    timeline: string;
  }
}