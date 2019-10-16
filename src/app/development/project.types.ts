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
        subtitle: '',
        imageUrl: 'assets/images/CSharpMarc.png',
        content: 'A C# class library and GUI editor for Library of Congress MARC Records',
        status: 'Active',
        buttons: [
            {
                text: 'Find out more',
                clickUrl: 'https://csharpmarc.net'
            }
        ]
    }
]