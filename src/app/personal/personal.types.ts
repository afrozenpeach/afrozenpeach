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
    },
    {
        title: 'Heckin Hounds Design Diary',
        subtitle: 'A Game of Being Barely Adequate',
        imageUrl: 'assets/images/Heckin3.png',
        content: 'The thought processes behind my game, Heckin Hounds',
        buttons: [
            {
                text: 'Read',
                clickUrl: 'https://heckinhounds.com/blog/'
            }
        ]
    }
];
