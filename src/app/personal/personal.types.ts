export interface Blog {
    title: string;
    subtitle: string;
    imageUrl: string;
    content: string;
    buttons: Button[];
}

export interface Button {
    text: string;
    clickUrl: string;
}

export const blogs: Blog[] = [
    {
        title: 'Mattie.LGBT',
        subtitle: 'Being Transgender in the Midwest and the Internet',
        imageUrl: 'assets/images/TransMercy.jpg',
        content: 'My blog where I write a lot of words about my experiences being transgender, both in real life and online.',
        buttons: [
            {
                text: 'Read',
                clickUrl: 'https://mattie.lgbt'
            }
        ]
    },
    {
        title: 'Geek.gay',
        subtitle: 'A community for LGBT geeks and their allies',
        imageUrl: 'assets/images/geekgay.png',
        content: 'A community designed from the ground up to allow its members to be themselves while exploring their most geeky obsessions. We strive to be a welcoming environment for 2SLGBTQIA+ individuals, those questioning and exploring their gender and sexuality, and their allies.',
        buttons: [
            {
                text: 'Read',
                clickUrl: 'https://geek.gay'
            }
        ]
    },
    {
        title: 'The Rules Lawyer',
        subtitle: 'The art of teaching board games',
        imageUrl: 'assets/images/Dice.jpg',
        content: 'Infrequent ramblings about board games and rule books',
        buttons: [
            {
                text: 'Read',
                clickUrl: 'https://theruleslawyer.net'
            }
        ]
    }
];
