export interface Game {
    title: string;
    subtitle: string;
    imageUrl: string;
    content: string;
    status: string;
    buttons: Button[];
}

export interface Button {
    text: string;
    clickUrl: string;
}

export const games: Game[] = [
    {
        title: 'Heckin Hounds',
        subtitle: 'A Game of Being Barely Adequate',
        imageUrl: 'assets/images/Heckin3.png',
        content: 'A silly trick taking game about walking dogs, in which you can\'t see the cards in your and and try to not win tricks.',
        status: 'Successful Kickstarter - Releasing in 2022',
        buttons: [
            {
                text: 'Find out more',
                clickUrl: 'https://heckinhounds.com'
            },
            {
                text: 'Kickstarter',
                clickUrl: 'https://www.kickstarter.com/projects/527566924/heckin-hounds'
            },
            {
                text: 'Play Now!',
                clickUrl: 'https://boardgamearena.com/gamepanel?game=heckinhounds'
            }
        ]
    },
    {
        title: 'blue_team',
        subtitle: 'A Hacking Simulator Board Game',
        imageUrl: 'assets/images/blue_team-logo.png',
        content: `A simultaneous play action selection/worker placement style game where you
                    try and patch vulnerabilities before your opponents and the nefarious
                    sine_nomine.`,
        status: 'Looking for a publisher',
        buttons: [
            {
                text: 'Find out more',
                clickUrl: 'https://blue-team.tech'
            },
            {
                text: 'Rules',
                clickUrl: 'https://blue-team.tech/downloads/blue_team-rules.pdf'
            }
        ]
    },
    {
        title: 'Line Go Up',
        subtitle: 'A Satirical Economic Simulator in the Heckinverse',
        imageUrl: 'assets/images/line-go-up.png',
        content: `Sudachi, finally sick of being jealous of his cousin, has created his own
                    cryptocurrency, and in doing so has gotten the other bad dogs into
                    cryptocurrency as well. Each dog is now the proud mascot for their own
                    cryptocurrency and the underworld inhabitants are day trading their hard
                    earned dog walking money for hopes to score their own windfall.`,
        status: 'Currently Playtesting',
        buttons: [
            {
                text: 'Find out more',
                clickUrl: 'https://line-go-up.com'
            }
        ]
    },
    {
        title: 'Oops All Bangers',
        subtitle: 'A Collaboratively Competitive Playlist Making Card Game',
        imageUrl: 'assets/images/cardbacktape.png',
        content: `Help your friends make the best playlist possible, but be careful because only one person can have the most bangers.`,
        status: 'Currently Playtesting',
        buttons: [
            {
                text: 'Find out more',
                clickUrl: 'https://oopsallbangers.com'
            }
        ]
    }
];
