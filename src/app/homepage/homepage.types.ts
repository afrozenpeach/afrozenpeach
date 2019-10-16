export interface Section {
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

export const Sections: Section[] = [
    {
        title: 'Personal Blog',
        subtitle: 'mattie.lgbt',
        imageUrl: 'assets/images/TransMercy.jpg',
        content: 'My personal blog where I write a lot about being transgender in the Midwest',
        buttons: [
            {
                text: 'Read',
                clickUrl: 'https://mattie.lgbt'
            }
        ]
    },
    {
        title: 'Board Games',
        subtitle: 'Design and Conventions ',
        imageUrl: 'assets/images/WhiteHat.jpg',
        content: 'I design board games, write about board games, and help run Geekway to the West',
        buttons: [
            {
                text: 'Find out more',
                clickUrl: 'boardgames'
            }
        ]
    },
    {
        title: 'Development',
        subtitle: 'C++, C#, PHP, JavaScript, Angular',
        imageUrl: 'assets/images/Code.jpg',
        content: 'I have many open source projects available on my GitHub, from demos to board game IRC bots to library science applications.',
        buttons: [
            {
                text: 'Find out more',
                clickUrl: 'development'
            }
        ]
    }
]