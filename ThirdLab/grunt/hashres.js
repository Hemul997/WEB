module.exports =
{
    options:
    {
        fileNameFormat: '${name}.[${hash}].${ext}'
    },

    prod:
    {
        src: ['.build/dist/js/main.min.js', '.build/dist/css/main.min.css'],
        dest: ['index.html']
    }
};