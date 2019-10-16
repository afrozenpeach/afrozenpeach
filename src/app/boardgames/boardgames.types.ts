export interface Game {
    title: string,
    subtitle: string,
    imageUrl: string,
    content: string,
    status: string,
    buttons: Button[]
}

export interface Button {
    text: string,
    clickUrl: string
}

export const Games: Game[] = [
    {
        title: 'Walking Doggos',
        subtitle: 'A Game of Being Barely Adequate',
        imageUrl: 'assets/images/WalkingDoggosCards.jpg',
        content: 'A silly trick taking game about walking dogs, in which you can\'t see the cards in your and and try to not win tricks.',
        status: 'Self-published',
        buttons: [
            {
                text: 'Buy Now',
                clickUrl: 'https://walkingdoggos.com/buy-now/'
            },
            {
                text: 'Rules',
                clickUrl: 'https://walkingdoggos.com/rules/WalkingDoggos-MintTin.pdf'
            },
            {
                text: 'How to play',
                clickUrl: 'https://www.youtube.com/watch?v=ppk82cpz2mc'
            },
            {
                text: 'Tabletop Simulator',
                clickUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1701859774'
            },
            {
                text: 'Find out more',
                clickUrl: 'https://walkingdoggos.com'
            }
        ]
    },
    {
        title: 'White Hat',
        subtitle: 'Capture the Flag ',
        imageUrl: 'assets/images/WhiteHat.jpg',
        content: 'An action selection/worker placement style game where you try and patch all the vulnerabilities before your opponents.',
        status: 'Looking for a publisher',
        buttons: [
            {
                text: 'Rules',
                clickUrl: 'http://whitehatctf.com/downloads/WhiteHatCTF.pdf'
            },
            {
                text: 'How to play',
                clickUrl: 'https://www.youtube.com/watch?v=7LDr68pGVMM'
            },
            {
                text: 'Tabletop Simulator',
                clickUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1827367585'
            },
            {
                text: 'Find out more',
                clickUrl: 'https://whitehatctf.com'
            }
        ]
    }
]