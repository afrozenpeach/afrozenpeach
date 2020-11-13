export interface Project {
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

export const Projects: Project[] = [
    {
        title: 'C# MARC / C# MARC Editor',
        subtitle: 'Written in C#.Net',
        imageUrl: 'assets/images/CSharpMarc.png',
        content: 'A C# class library and GUI editor for Library of Congress MARC Records',
        status: 'Active',
        buttons: [
            {
                text: 'Find out more',
                clickUrl: 'https://csharpmarc.net'
            }
        ]
    },
    {
        title: 'Dungeons and Dragons v3.5 Character Sheet Generator',
        subtitle: 'Written in VisualC++ Builder 5',
        imageUrl: 'assets/dndcharsheet/Page1.png',
        content: 'A digital character sheet for D&D 3.5. Somehow still works after nearly two decades.',
        status: 'Abandoned (but now with less dead naming)',
        buttons: [
            {
                text: 'Download',
                clickUrl: 'https://frozenpeach.net/assets/dndcharsheet/CharSheet.zip'
            },
            {
                text: 'Github',
                clickUrl: 'https://github.com/afrozenpeach/charsheet'
            }
        ]
    },
    {
        title: 'A Frozen Peach Website',
        subtitle: 'Written in Angular 8',
        imageUrl: 'assets/images/afrozenpeach-website.jpg',
        content: 'This website!',
        status: 'Active',
        buttons: [
            {
                text: 'GitHub Project',
                clickUrl: 'https://github.com/afrozenpeach/afrozenpeach'
            }
        ]
    },
    {
        title: 'Geekway to the West Website',
        subtitle: 'Written in Angular 8',
        imageUrl: 'assets/images/geekwaywebsite.png',
        content: 'The website for the board game convention Geekway to the West. Built with an Angular 8 front end and using a Strapi/GraphQL Headless CMS backend.',
        status: 'Active',
        buttons: [
            {
                text: 'GitHub Project',
                clickUrl: 'https://github.com/afrozenpeach/geekway'
            }
        ]
    },
    {
        title: 'Elasticsearch-PHP',
        subtitle: 'Contributed to the Elasticsearch-PHP library',
        imageUrl: '',
        content: 'Because the host is adding the port, the host header also has the port in it. Instead, the handler should be using CURLOPT_PORT to specify which port is the curl request is being sent on. This also affects unit tests that no longer need to verify that the port is in the host name.',
        status: 'Committed to Master',
        buttons: [
            {
                text: 'Pull Request on GitHub',
                clickUrl: 'https://github.com/elastic/elasticsearch-php/pull/782'
            }
        ]
    },
    {
        title: 'Stomp RPG Library',
        subtitle: 'Contributed to the stmp RPG library',
        imageUrl: '',
        content: 'Added an optional virtual host header support to support Rabbit MQ\'s virtual host feature',
        status: 'Committed to Master',
        buttons: [
            {
                text: 'Pull Request on BitBucket',
                clickUrl: 'https://bitbucket.org/m1hael/stomp/pull-requests/1'
            },
            {
                text: 'Pull Request on BitBucket - Bug Fix',
                clickUrl: 'https://bitbucket.org/m1hael/stomp/pull-requests/2'
            }
        ]
    },
    {
        title: 'HimitsuBotsou',
        subtitle: 'Discord bot for managing characters in a collaborative writing server',
        imageUrl: '',
        content: 'Written in Node.JS and connects to a MySQL Database. Also runs the backend API for the Himitsu Companion Website.',
        status: 'Active',
        buttons: [
            {
                text: 'Find out more',
                clickUrl: 'https://github.com/afrozenpeach/himitsubotsou'
            }
        ]
    },
    {
        title: 'Himitsu Companion Website',
        subtitle: 'A companion website for HimitsuBotsou',
        imageUrl: '',
        content: 'Written in Angular and connects to a Node.js backend, which connects to MySQL',
        status: 'Active',
        buttons: [
            {
                text: 'Live Site',
                clickUrl: 'https://franel.net'
            },
            {
                text: 'Front End',
                clickUrl: 'https://github.com/afrozenpeach/HimitsuFrontend'
            }
        ]
    },
    {
        title: 'Phergie IRC Bot - One Night Revolution',
        subtitle: 'Plugin for the Phergie IRC Bot to play One Night Revolution',
        imageUrl: '',
        content: 'I have no idea if this still works, but I haven\'t been on IRC in ages. I really should start making discord bots instead. ',
        status: 'Abandoned',
        buttons: [
            {
                text: 'GitHub Project',
                clickUrl: 'https://github.com/afrozenpeach/phergie-irc-plugin-react-gamebot'
            }
        ]
    }
]