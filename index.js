module.exports = {
    hooks: {
        "page:before": function (page) {
            var time = "{{ file.mtime }}"
            if (time === "Invalid Date") {
                return page;
            }
            var content = page.content;
            content = ">*Last modified: {{ file.mtime }}*\n\n" + content; 
            page.content = content; 
            return page;
        }
    }
};
