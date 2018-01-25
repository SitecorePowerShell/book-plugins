module.exports = {
    hooks: {
        "page:before": function (page) {
            var content = page.content;
            var d = new Date('{{ file.mtime }}');
            content = ">*Last modified: " + d.toString() + "*\n\n" + content; 
            page.content = content; 
            return page;
        }
    }
};
