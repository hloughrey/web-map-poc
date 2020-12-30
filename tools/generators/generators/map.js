module.exports = function (plop) {
    plop.setGenerator('Create a new map', {
        description: 'Scaffolds out a new map',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your map?',
                validate: function (value) {
                    if (/.+/.test(value)) {
                        return true;
                    }
                    return 'name is required';
                },
            },
        ],
        actions: [
            'Create new map component',
            {
                type: 'addMany',
                destination:
                    '../../src/components/organisms/{{pascalCase name}}Map',
                base: '../templates/map',
                templateFiles: '../templates/map/*.hbs',
            },
            'Export component from atomic folder (app component)',
            {
                type: 'append',
                path: '../../src/components/organisms/index.ts',
                template: `export * from './{{pascalCase name}}Map';`,
                separator: '',
            },
            'Create new map page',
            {
                type: 'add',
                path: '../../src/pages/{{kebabCase name}}-map.tsx',
                templateFile: '../templates/page/map.tsx.hbs',
            },
            'Create new map page styles',
            {
                type: 'add',
                path:
                    '../../src/pages-lib/{{kebabCase name}}-map/{{kebabCase name}}-map.styled.ts',
                templateFile: '../templates/page/map.styled.ts.hbs',
            },
        ],
    });
};
