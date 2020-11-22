module.exports = {
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'public/index.html',
            // output as dist/index.html
            filename: 'index.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Annotation Interface',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },

        instruction: {
            // entry for the page
            entry: 'src/instruction/main.js',
            // the source template
            template: 'public/instruction.html',
            // output as dist/instruction.html
            filename: 'instruction.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Annotation Instruction',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            // chunks: ['chunk-vendors', 'chunk-common', 'instruction']
        },


        validation: {
            // entry for the page
            entry: 'src/validation/main.js',
            // the source template
            template: 'public/index.html',
            // output as dist/instruction.html
            filename: 'validation.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Validation of Answers',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            // chunks: ['chunk-vendors', 'chunk-common', 'instruction']
        },


        validation_event: {
            // entry for the page
            entry: 'src/validation_event/main.js',
            // the source template
            template: 'public/index.html',
            // output as dist/instruction.html
            filename: 'validation_event.html',
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Validation of Events',
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            // chunks: ['chunk-vendors', 'chunk-common', 'instruction']
        },
    }
}
