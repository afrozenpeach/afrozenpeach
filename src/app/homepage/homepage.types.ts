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
        title: 'Personal & Blogs',
        subtitle: 'About me',
        imageUrl: 'assets/images/TransMercy.jpg',
        content: 'A little about me and the blogs that I infrequently update. Some more infrequently than others.',
        buttons: [
            {
                text: 'Find out more',
                clickUrl: 'personal'
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