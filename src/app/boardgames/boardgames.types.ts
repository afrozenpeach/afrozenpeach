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
        status: 'Self-published - discontinued',
        buttons: [
            {
                text: 'Find out more',
                clickUrl: 'https://walkingdoggos.com'
            },
            {
                text: 'Rules',
                clickUrl: 'https://walkingdoggos.com/rules/WalkingDoggos-MintTin.pdf'
            },
            {
                text: 'How to play',
                clickUrl: 'https://www.youtube.com/watch?v=ppk82cpz2mc'
            }
        ]
    },
    {
        title: 'Heckin Hounds',
        subtitle: 'Walking Doggos for Hades',
        imageUrl: 'assets/images/HeckinHounds.jpg',
        content: 'A silly trick taking game about walking dogs, in which you can\'t see the cards in your and and try to not win tricks.',
        status: 'Signed with Sapphire City Games - Kickstarter coming in 2021',
        buttons: [

        ]
    },
    {
        title: 'White Hat',
        subtitle: 'A Hacking Simulator Board Game',
        imageUrl: 'assets/images/WhiteHat.jpg',
        content: 'A simultaneous play action selection/worker placement style game where you try and patch all the vulnerabilities before your opponents.',
        status: 'Looking for a publisher',
        buttons: [
            {
                text: 'Find out more',
                clickUrl: 'https://whitehat.games'
            },
            {
                text: 'Rules',
                clickUrl: 'http://whitehat.games/downloads/WhiteHatCTF.pdf'
            },
            {
                text: 'How to play',
                clickUrl: 'https://www.youtube.com/watch?v=3QXYTUcdGcY'
            },
            {
                text: 'Tabletop Simulator',
                clickUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1827367585'
            }
        ]
    }
]