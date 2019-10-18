export interface Blog {
    title: string,
    subtitle: string,
    imageUrl: string,
    content: string
    buttons: Button[]
}

export interface Button {
    text: string,
    clickUrl: string
}

export const Blogs: Blog[] = [
    {
        title: 'Mattie.LGBT',
        subtitle: 'Being Transgender in the Midwest and the Internet',
        imageUrl: 'assets/images/TransMercy.jpg',
        content: 'My most active blog where I write a lot of words about my experiences being transgender, both in real life and online.',
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
        title: 'Walking Doggos Design Diary',
        subtitle: 'A Game of Being Barely Adequate',
        imageUrl: 'assets/images/WalkingDoggos.jpg',
        content: 'My thought process about my game, Walking Doggos',
        buttons: [
            {
                text: 'Read',
                clickUrl: 'https://walkingdoggos.com/blog/'
            }
        ]
    }
]