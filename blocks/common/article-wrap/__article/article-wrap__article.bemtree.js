block('article-wrap').mode('article')(
    match(function() {
        var type = this.data.page.type;
        return !type || type === 'lib' || type === 'versioned';
    })(function() {
        return { block: 'article' };
    })
);

