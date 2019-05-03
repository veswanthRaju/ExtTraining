Ext.define('ArticleReader.view.main.Routes', {
    extend : 'Ext.Mixin',

    onTabChange : function(tabPanel, newCard, oldCard, eOpts) {
        var ref = newCard.reference;
        this.redirectTo(ref);
    }
});