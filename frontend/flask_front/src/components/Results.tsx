import React, { useState } from "react";
import Paper from '@material-ui/core/Paper'
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui'

const Results = () => {
  const [columns] = useState([
    { name: 'inquiryno', title: '受付番号' },
    { name: 'inquirydate', title: '受付日' },
    { name: 'hpcd', title: '病院コード' },
    { name: 'hpname', title: '病院名' },
    { name: 'inquirytitle', title: '件名' },
    { name: 'cancel', title: '取消区分' },
    { name: 'refixdate', title: '更新日時' },
    {name:'creationdate', title:'作成日時'}
  ]);

  const [results] = useState([
    {
      inquiryno: '000001',
      inquirydate: '20220701',
      hpcd: '0001',
      hpname: 'neko',
      inquirytitle: 'test',
      cancel: 0,
      refixdate: '20220704',
      creationdate: '20220701'
    }]);

  return (
    <Paper>
      <Grid rows={results} columns={columns}>
        <Table />
        <TableHeaderRow/>
      </Grid>
    </Paper>
  );
};

export default Results;