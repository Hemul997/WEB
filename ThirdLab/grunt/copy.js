module.exports =
{
    main:
    {
        files: [{ expand: true,
                  cwd: '',
                  src: ['index.html', 'css/bootstrap.min.css'],
                  dest: '.build/'
                }]
    }
};