export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  res.status(200).json({
  __typename: 'GetCallOutput',
  answered_at: '2022-06-21T07:51:55.000Z',
  created_at: '2022-06-21T07:51:49.000Z',
  call_uuid: 'ba62665e-0e85-11ed-861d-0242ac120002',
  company_id: '0000',
  direction: 'outbound',
  duration: "30",
  id: '222',
  state: 'done',
  type: 'voicemail',
  from: '+0000000',
  to: '111111'
});
};
