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
        subtitle: 'Walking Doggos and White Hat: CTF ',
        imageUrl: 'assets/images/WhiteHat.jpg',
        content: 'I design board games, write about board games, and help run Geekway to the West',
        buttons: [
            {
                text: 'Walking Doggos',
                clickUrl: 'https://walkingdoggos.com'
            },
            {
                text: 'White Hat: Capture the Flag',
                clickUrl: 'https://whitehatctf.com'
            },
            {
                text: 'The Rules Lawyer',
                clickUrl: 'https://theruleslawyer.com'
            },
            {
                text: 'Geekway to the West',
                clickUrl: 'https://geekwaytothewest.com'
            }
        ]
    },
    {
        title: 'Development',
        subtitle: 'C++, C#, PHP, JavaScript, Angular',
        imageUrl: '',
        content: 'I write code and release them as open source projects',
        buttons: [
            {
                text: 'GitHub',
                clickUrl: 'https://github.com/afrozenpeach'
            }
        ]
    }
]