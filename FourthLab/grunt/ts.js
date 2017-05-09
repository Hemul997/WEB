module.exports =
{
    ts:
    {
        src: ['src/ts/*.ts'],
        dest: '.build/js/',
        ext: '.js',
        options: {
            module: 'system',
            target: 'es5',
            noImplicitAny: true,
            noEmitOnError: true,
            sourceMap: false
        }
    }
};