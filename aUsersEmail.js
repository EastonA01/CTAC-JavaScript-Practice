// Rough Data Model For A Gmail Account
let gmailAccount = {
    mailboxes: {
        inbox: [],
        spam: [],
        sent: [],
        drafts: [],
        starred: [],
        aol: [],
    },
    contacts: {
        John: { email: 'john@hotmail.com' },
        Steve: { email: 'stevejobs@mircrosoft.com' },
        Jacob: { email: 'kingj@aol.com' },
        Micah: { email: 'redded2@gmail.com'}
    },
    emails: [
        // Added items such as sender, recipient, subject, body
        {
            sender: 'stevejobs@microsoft.com',
            recipient: 'kingj@aol.com',
            subject: 'RE: XBox Live Renewal',
            body: 'Hey J, hope you\'re all well. Listen- xbox been actin up and need to renew the subscription\
            hope you get this message so we can play Rocket League again.',
        },
        {
            sender: 'redded2@gmail.com',
            recipient: 'john@hotmail.com',
            subject: 'RE: Who CCs emails anymore?',
            body: 'I am infuriated by the fact that I dont even know what a CC is- Credit Card an email!?',
        },
        {
            sender: 'redded2@gmail.com',
            recipient: 'mikeposer@fakemail.com',
            subject: 'RE: What if we bring back disco',
            body: 'Quick thought- we make disco- but turn it into dubstep- call it discostep.',
        },
    ]
};

// Get a list of mailbox names
console.log(gmailAccount.mailboxes);
// Get a list of emails
console.log(gmailAccount.emails)
// Get text of 2nd email in visible list
console.log(gmailAccount.emails[1].body)
// Mark email as sent
gmailAccount.mailboxes.sent.push(gmailAccount.emails[0])
// Add a draft email to the drafts mailbox
gmailAccount.mailboxes.drafts.push(gmailAccount.emails[2])