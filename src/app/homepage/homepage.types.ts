import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faDice, faCode } from '@fortawesome/free-solid-svg-icons';

export interface Section {
    title: string;
    subtitle: string;
    imageUrl: string;
    content: string;
    icon: IconDefinition;
    buttons: Button[];
}

export interface Button {
    text: string;
    clickUrl: string;
}

export const sections: Section[] = [
    {
        title: 'Personal & Blogs',
        subtitle: 'About me',
        imageUrl: 'assets/images/TransMercy.jpg',
        content: 'A little about me and the blogs that I infrequently update. Some more infrequently than others.',
        icon: faUser,
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
        icon: faDice,
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
        content: `I have many open source projects available on my GitHub,
            from demos to board game IRC bots to library science applications.`,
        icon: faCode,
        buttons: [
            {
                text: 'Find out more',
                clickUrl: 'development'
            }
        ]
    }
];
