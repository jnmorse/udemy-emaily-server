export default [
  {
    label: 'Survey Title',
    name: 'title',
    autoFocus: true,
    required: true,
    invalidMessage: 'You must provide a title',
  },
  {
    label: 'Subject Line',
    name: 'subject',
    required: true,
    invalidMessage: 'You must provide a subject'
  },
  {
    label: 'E-Mail body',
    name: 'body',
    required: true,
    invalidMessage: 'You must provide a subject'
  },
  {
    label: 'Recipient List',
    name: 'recipients',
    required: true,
    invalidMessage: 'You must provide a comma seperated list of emails'
  },
];
