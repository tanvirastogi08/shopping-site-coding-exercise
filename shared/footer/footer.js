const footerView = require('./footer.hbs');

export const Footer = {
    render: async () => {
        return footerView();
    },
    after_render: async () => {}
}